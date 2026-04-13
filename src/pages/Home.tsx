import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { 
  Droplets, 
  ShieldCheck, 
  Clock, 
  Wrench, 
  ArrowRight, 
  Star, 
  MessageSquare,
  CheckCircle2,
  Hammer
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Emergency Repairs",
    description: "Burst pipes, major leaks, or sewage backups? We're available 24/7 for urgent plumbing crises.",
    icon: Clock,
    color: "bg-red-50 text-red-600"
  },
  {
    title: "Drain Cleaning",
    description: "Professional hydro-jetting and snaking to clear even the most stubborn clogs and root intrusions.",
    icon: Droplets,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Sewage Operations",
    description: "Expert knowledge in sewage systems, septic tanks, and main line replacements.",
    icon: Hammer,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Water Heaters",
    description: "Installation, repair, and maintenance for traditional and tankless water heating systems.",
    icon: Wrench,
    color: "bg-orange-50 text-orange-600"
  }
];

const testimonials = [
  {
    name: "Arthur Mcfarland",
    rating: 5,
    text: "Amazing craftsmanship, thoroughly knowledgeable about sewage operations..professionalism plus. Willing to go beyond to get the job completed..best choice i have made.",
    date: "2 years ago"
  },
  {
    name: "Sarah Jenkins",
    rating: 5,
    text: "Lil Green was a lifesaver when our basement flooded. They arrived within the hour and fixed the issue quickly. Highly recommend!",
    date: "6 months ago"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Plumbing Background" 
            className="w-full h-full object-cover brightness-[0.3]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1 text-sm">
                #1 Rated Plumbing in Chicago
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
                Expert Plumbing & <br />
                <span className="text-emerald-500">Sewage Solutions</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
                Reliable, professional, and family-owned. We provide top-tier craftsmanship for all your residential and commercial plumbing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 h-auto" asChild>
                  <Link to="/booking">Book a Service</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-6 h-auto" asChild>
                  <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">
                    <MessageSquare className="mr-2 w-5 h-5" />
                    Emergency WhatsApp
                  </a>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-xs font-bold text-white overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-400 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-sm text-slate-400 font-medium">Trusted by 500+ Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-emerald-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-80 grayscale invert brightness-0">
            <span className="text-2xl font-black tracking-tighter">TRUSTED</span>
            <span className="text-2xl font-black tracking-tighter">RELIABLE</span>
            <span className="text-2xl font-black tracking-tighter">EXPERT</span>
            <span className="text-2xl font-black tracking-tighter">LOCAL</span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Professional Services for Every Need</h3>
            <p className="text-lg text-slate-600">From minor leaks to major sewage operations, we have the tools and experience to get the job done right the first time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", service.color)}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h4>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <Link to="/services" className="inline-flex items-center text-emerald-600 font-bold hover:gap-2 transition-all">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=1000" 
                  alt="Plumber working" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600 rounded-3xl -z-0 hidden md:block" />
              <div className="absolute top-10 -left-10 p-8 bg-white rounded-2xl shadow-xl z-20 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Licensed & Insured</p>
                    <p className="text-xs text-slate-500">Full Protection Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Why Lil Green?</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-8">Committed to Quality Craftsmanship</h3>
              <div className="space-y-6">
                {[
                  { title: "Black-Owned Business", desc: "Proudly serving our community with integrity and excellence." },
                  { title: "24/7 Emergency Support", desc: "Plumbing disasters don't wait for business hours, and neither do we." },
                  { title: "Transparent Pricing", desc: "No hidden fees. We provide clear estimates before any work begins." },
                  { title: "Expert Knowledge", desc: "Specialized in complex sewage operations and modern plumbing systems." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-10 bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 h-auto text-lg" asChild>
                <Link to="/about">About Our Business</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
            <h3 className="text-4xl font-bold mb-6">What Our Customers Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, idx) => (
              <Card key={idx} className="bg-white/10 border-white/10 text-white backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-emerald-400">{t.name}</p>
                      <p className="text-sm text-slate-400">{t.date}</p>
                    </div>
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white" asChild>
              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">View All Google Reviews</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 skew-x-12 translate-x-1/4" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Fix Your Plumbing Issues?</h2>
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
            Don't let a small leak turn into a major disaster. Book your appointment online today or call us for emergency service.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-8 h-auto text-xl font-bold shadow-xl" asChild>
              <Link to="/booking">Book Online Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-8 h-auto text-xl font-bold" asChild>
              <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">WhatsApp Us Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
