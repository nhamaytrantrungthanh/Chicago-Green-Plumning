import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin-slow" />
            <div className="absolute w-4 h-4 bg-white rounded-sm rotate-45" />
          </div>
          <span className={cn(
            "font-bold text-xl tracking-tight",
            isScrolled ? "text-slate-900" : "text-white drop-shadow-md"
          )}>
            Lil Green <span className="text-emerald-500">Plumbing</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-emerald-500",
                location.pathname === link.href
                  ? "text-emerald-600"
                  : isScrolled ? "text-slate-600" : "text-white/90"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="outline" className={cn(
            "border-emerald-500 text-emerald-600 hover:bg-emerald-50",
            !isScrolled && "bg-white/10 border-white/20 text-white hover:bg-white/20"
          )} asChild>
            <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">
              <MessageSquare className="w-4 h-4 mr-2" />
              WhatsApp Us
            </a>
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
            <Link to="/booking">Book Online</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center gap-3">
          <a 
            href="https://wa.me/84909958164" 
            className="p-2 bg-emerald-500 text-white rounded-full shadow-lg"
            target="_blank"
            rel="noreferrer"
          >
            <MessageSquare className="w-5 h-5" />
          </a>
          <Sheet>
            <SheetTrigger asChild nativeButton={true}>
              <Button variant="ghost" size="icon" className={cn(
                isScrolled ? "text-slate-900" : "text-white"
              )}>
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "text-lg font-semibold transition-colors hover:text-emerald-600",
                      location.pathname === link.href ? "text-emerald-600" : "text-slate-600"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 pt-6 border-t">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link to="/booking">Book Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full border-emerald-500 text-emerald-600" asChild>
                    <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
