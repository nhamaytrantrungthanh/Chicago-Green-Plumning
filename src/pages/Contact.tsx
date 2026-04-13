import React, { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { saveInquiry } from "@/lib/db";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      type: 'contact' as const
    };

    try {
      await saveInquiry(data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("Message sent! We'll get back to you shortly.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Failed to save contact:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center text-white">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Get In Touch</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a question or need a quote? We're here to help. Reach out via the form or use our direct contact methods.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="How can we help?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Tell us more about your plumbing needs..." className="min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-6 h-auto text-lg font-bold">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">WhatsApp Us</p>
                      <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-emerald-600 transition-colors">Chat Now</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Email Us</p>
                      <a href="mailto:info@lilgreenplumbing.com" className="text-slate-600 hover:text-emerald-600 transition-colors">info@lilgreenplumbing.com</a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Location</p>
                      <p className="text-slate-600">Chicago, IL & Surrounding Areas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Working Hours</p>
                      <p className="text-slate-600">Mon-Fri: 8am - 6pm</p>
                      <p className="text-emerald-600 font-bold text-xs mt-1">24/7 Emergency Available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="rounded-3xl overflow-hidden h-[300px] bg-slate-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-xs">
                    <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
                    <p className="font-bold text-slate-900 mb-2">Serving All of Chicago</p>
                    <p className="text-sm text-slate-500 mb-4">We come to you! Professional mobile plumbing services.</p>
                    <Button variant="outline" className="w-full border-emerald-500 text-emerald-600" asChild>
                      <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">Open in Google Maps</a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-emerald-600 rounded-3xl text-white flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-2">Chat with us on WhatsApp</h3>
                  <p className="text-emerald-100 mb-4">Fastest way to get a quick estimate or send photos of your issue.</p>
                  <Button className="bg-white text-emerald-600 hover:bg-emerald-50 font-bold" asChild>
                    <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">Start Chat</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
