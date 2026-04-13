/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Booking from "@/pages/Booking";
import Pricing from "@/pages/Pricing";
import Gallery from "@/pages/Gallery";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import { Toaster } from "@/components/ui/sonner";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-center" />
        
        {/* Floating Action Buttons for Mobile */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40 flex gap-4">
          <Button size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700 shadow-2xl h-14 text-lg font-bold" asChild>
            <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">
              <MessageSquare className="mr-2 w-5 h-5" />
              WhatsApp Now
            </a>
          </Button>
          <Button size="lg" className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-2xl p-0" asChild>
            <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">
              <MessageSquare className="w-6 h-6" />
            </a>
          </Button>
        </div>
      </div>
    </Router>
  );
}

