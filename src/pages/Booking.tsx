import React, { useState } from "react";
import { motion } from "motion/react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock, CheckCircle2, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { saveInquiry } from "@/lib/db";

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM", 
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", 
  "04:00 PM", "05:00 PM"
];

const serviceTypes = [
  "Emergency Repair",
  "Drain Cleaning",
  "Sewage Operation",
  "Water Heater Service",
  "Fixture Installation",
  "Leak Detection",
  "Other"
];

export default function Booking() {
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!date || !time) {
      toast.error("Please select a date and time");
      return;
    }
    
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      service: formData.get('service') as string,
      date: format(date, "PPP"),
      time,
      address: formData.get('address') as string,
      description: formData.get('description') as string,
      type: 'booking' as const
    };

    try {
      await saveInquiry(data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Booking request sent successfully!");
    } catch (error) {
      console.error("Failed to save booking:", error);
      toast.error("Failed to save booking. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Request Received!</h1>
          <p className="text-slate-600 mb-8">
            Thank you for choosing Lil Green Plumbing. We've received your booking request for 
            <span className="font-bold text-slate-900"> {date && format(date, "PPP")} at {time}</span>. 
            We will contact you shortly to confirm the appointment.
          </p>
          <div className="space-y-4">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700" onClick={() => setIsSuccess(false)}>
              Book Another Service
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <a href="/">Back to Home</a>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Book a Service Online</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select a date and time that works for you. Our team will review your request and get back to you within 1 hour during business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-none shadow-xl">
                <CardHeader className="bg-emerald-600 text-white rounded-t-xl">
                  <CardTitle>Appointment Details</CardTitle>
                  <CardDescription className="text-emerald-100">Fill out the form below to request a service.</CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" type="tel" placeholder="(773) 000-0000" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Type</Label>
                        <select 
                          id="service" 
                          name="service"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          required
                        >
                          <option value="">Select a service</option>
                          {serviceTypes.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2 flex flex-col">
                        <Label>Preferred Date</Label>
                        <Popover>
                          <PopoverTrigger asChild nativeButton={true}>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              initialFocus
                              disabled={(date) => date < new Date() || date.getDay() === 0}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Time</Label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((slot) => (
                            <Button
                              key={slot}
                              type="button"
                              variant={time === slot ? "default" : "outline"}
                              className={cn(
                                "text-xs h-9",
                                time === slot ? "bg-emerald-600 hover:bg-emerald-700" : "hover:border-emerald-500 hover:text-emerald-600"
                              )}
                              onClick={() => setTime(slot)}
                            >
                              <Clock className="mr-1 w-3 h-3" />
                              {slot}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Service Address</Label>
                      <Input id="address" name="address" placeholder="123 Main St, Chicago, IL" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Problem Description</Label>
                      <Textarea 
                        id="description" 
                        name="description"
                        placeholder="Please describe the issue you're experiencing..." 
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 h-auto text-lg font-bold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Processing..." : "Request Appointment"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              <Card className="border-none shadow-lg bg-slate-900 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-emerald-500" />
                    Emergency?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 mb-6">
                    If you have an urgent plumbing emergency, please call us directly for immediate assistance.
                  </p>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 h-12 text-lg font-bold" asChild>
                    <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">WhatsApp Us</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Why Book With Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Fast Response Times",
                    "Licensed Professionals",
                    "Upfront Pricing",
                    "Guaranteed Workmanship"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                  <h3 className="font-bold text-slate-900">Chat on WhatsApp</h3>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Prefer messaging? Send us a photo of your problem on WhatsApp for a quick estimate.
                </p>
                <Button variant="outline" className="w-full border-emerald-500 text-emerald-600 hover:bg-emerald-600 hover:text-white" asChild>
                  <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">
                    Message Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
