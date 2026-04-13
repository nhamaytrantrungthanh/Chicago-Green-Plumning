import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MessageSquare, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Lil Green <span className="text-emerald-500">Plumbing</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Professional plumbing and sewage services you can trust. Family-owned, Black-owned, and dedicated to excellence in every job.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Our Services</Link></li>
              <li><Link to="/pricing" className="hover:text-emerald-500 transition-colors">Pricing</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-500 transition-colors">Project Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-500 transition-colors">Plumbing Tips</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">WhatsApp Us</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="mailto:info@lilgreenplumbing.com" className="hover:text-emerald-500 transition-colors">info@lilgreenplumbing.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Chicago, IL & Surrounding Areas</span>
              </li>
              <li className="flex items-start gap-3 text-emerald-400 font-medium">
                <Clock className="w-5 h-5 shrink-0" />
                <span>24/7 Emergency Services Available</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Business Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-emerald-500">Emergency Only</span></li>
            </ul>
            <div className="mt-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
              <p className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-bold">Need Help Now?</p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                <Link to="/booking">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lil Green Plumbing and Sewage LLC. All rights reserved.</p>
          <div className="mt-2 flex items-center justify-center gap-4 text-xs">
            <span>Designed for excellence. Professional Plumbing Services.</span>
            <Link to="/admin" className="hover:text-emerald-500 transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
