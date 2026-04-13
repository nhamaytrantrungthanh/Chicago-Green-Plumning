import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { 
  LayoutDashboard, 
  Calendar, 
  Mail, 
  Phone, 
  Clock, 
  Trash2, 
  User, 
  MapPin, 
  Wrench,
  ChevronRight,
  Search,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllInquiries, deleteInquiry, InquiryData, BookingData, ContactData } from "@/lib/db";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription, 
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";

export default function Admin() {
  const [inquiries, setInquiries] = useState<InquiryData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const fetchInquiries = async () => {
    try {
      const data = await getAllInquiries();
      setInquiries(data.reverse()); // Newest first
    } catch (error) {
      console.error("Failed to fetch inquiries:", error);
      toast.error("Failed to load dashboard data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async () => {
    if (deleteId === null) return;
    try {
      await deleteInquiry(deleteId);
      setInquiries(prev => prev.filter(item => item.id !== deleteId));
      toast.success("Record deleted successfully.");
      setDeleteId(null);
    } catch (error) {
      console.error("Failed to delete record:", error);
      toast.error("Failed to delete record.");
    }
  };

  const filteredInquiries = inquiries.filter(item => {
    const name = item.name || "";
    const search = searchTerm.toLowerCase();
    
    const matchesName = name.toLowerCase().includes(search);
    const matchesService = item.type === 'booking' && (item as BookingData).service?.toLowerCase().includes(search);
    const matchesSubject = item.type === 'contact' && (item as ContactData).subject?.toLowerCase().includes(search);
    
    return matchesName || matchesService || matchesSubject;
  });

  const bookings = filteredInquiries.filter(item => item.type === 'booking') as BookingData[];
  const contacts = filteredInquiries.filter(item => item.type === 'contact') as ContactData[];

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 font-bold mb-2">
              <LayoutDashboard className="w-5 h-5" />
              <span>Internal Admin Dashboard</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900">Inquiry Management</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input 
                placeholder="Search inquiries..." 
                className="pl-10 w-full md:w-[300px] bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button onClick={fetchInquiries} variant="outline" className="bg-white">
              Refresh
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="bg-slate-200/50 p-1 rounded-xl mb-8">
            <TabsTrigger value="all" className="rounded-lg px-8">All ({filteredInquiries.length})</TabsTrigger>
            <TabsTrigger value="bookings" className="rounded-lg px-8">Bookings ({bookings.length})</TabsTrigger>
            <TabsTrigger value="contacts" className="rounded-lg px-8">Contact Messages ({contacts.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <InquiryGrid items={filteredInquiries} onDelete={setDeleteId} />
          </TabsContent>

          <TabsContent value="bookings" className="mt-0">
            <InquiryGrid items={bookings} onDelete={setDeleteId} />
          </TabsContent>

          <TabsContent value="contacts" className="mt-0">
            <InquiryGrid items={contacts} onDelete={setDeleteId} />
          </TabsContent>
        </Tabs>

        <Dialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this inquiry? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button variant="destructive" onClick={handleDelete}>
                Delete Record
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {filteredInquiries.length === 0 && !isLoading && (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No inquiries found</h3>
            <p className="text-slate-500">Try adjusting your search or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function InquiryGrid({ items, onDelete }: { items: InquiryData[], onDelete: (id: number) => void }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.05 }}
        >
          <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow group overflow-hidden">
            <div className={cn(
              "h-2 w-full",
              item.type === 'booking' ? "bg-emerald-500" : "bg-blue-500"
            )} />
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className={cn(
                  "capitalize",
                  item.type === 'booking' ? "text-emerald-600 border-emerald-200 bg-emerald-50" : "text-blue-600 border-blue-200 bg-blue-50"
                )}>
                  {item.type}
                </Badge>
                <span className="text-xs text-slate-400">
                  {format(item.timestamp, "MMM d, h:mm a")}
                </span>
              </div>
              <CardTitle className="text-xl flex items-center gap-2">
                <User className="w-5 h-5 text-slate-400" />
                {item.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Mail className="w-4 h-4" />
                  {item.email}
                </div>
                {item.type === 'booking' && (
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Phone className="w-4 h-4" />
                    {(item as BookingData).phone}
                  </div>
                )}
              </div>

              <div className="p-4 bg-slate-50 rounded-xl space-y-3">
                {item.type === 'booking' ? (
                  <>
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Wrench className="w-4 h-4 text-emerald-600" />
                      {(item as BookingData).service}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Calendar className="w-4 h-4" />
                      {(item as BookingData).date} at {(item as BookingData).time}
                    </div>
                    <div className="flex items-start gap-2 text-sm text-slate-600">
                      <MapPin className="w-4 h-4 mt-1 shrink-0" />
                      {(item as BookingData).address}
                    </div>
                    <div className="pt-2 border-t border-slate-200">
                      <p className="text-xs font-bold text-slate-400 uppercase mb-1">Description</p>
                      <p className="text-sm text-slate-700 line-clamp-3">{(item as BookingData).description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="font-bold text-slate-900 mb-1">
                      {(item as ContactData).subject}
                    </div>
                    <p className="text-sm text-slate-700 line-clamp-4">{(item as ContactData).message}</p>
                  </>
                )}
              </div>

              <div className="pt-4 flex justify-end">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  onClick={() => item.id && onDelete(item.id)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
