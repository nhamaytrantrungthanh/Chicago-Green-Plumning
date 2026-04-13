import { motion } from "motion/react";
import { 
  Droplets, 
  Wrench, 
  Hammer, 
  Flame, 
  Search, 
  Home, 
  Building2, 
  Zap,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    title: "Emergency Plumbing",
    description: "24/7 rapid response for burst pipes, flooding, and major leaks.",
    icon: Zap,
    features: ["1-hour response time", "Night & Weekend service", "Crisis management"]
  },
  {
    title: "Sewage Operations",
    description: "Specialized knowledge in main line repairs, septic systems, and backups.",
    icon: Hammer,
    features: ["Main line replacement", "Septic tank pumping", "Sewer line camera inspection"]
  },
  {
    title: "Drain Cleaning",
    description: "Clear stubborn clogs and prevent future backups with professional cleaning.",
    icon: Droplets,
    features: ["Hydro-jetting", "Root removal", "Kitchen & Bath drains"]
  },
  {
    title: "Water Heaters",
    description: "Installation and repair for all types of water heating systems.",
    icon: Flame,
    features: ["Tankless heaters", "Gas & Electric units", "Maintenance plans"]
  },
  {
    title: "Leak Detection",
    description: "Advanced technology to find hidden leaks behind walls or under slabs.",
    icon: Search,
    features: ["Electronic detection", "Thermal imaging", "Pipe mapping"]
  },
  {
    title: "Residential Service",
    description: "Full-service plumbing for homes, from faucets to full repiping.",
    icon: Home,
    features: ["Fixture installation", "Toilet repair", "Garbage disposals"]
  },
  {
    title: "Commercial Plumbing",
    description: "Heavy-duty plumbing solutions for businesses and industrial sites.",
    icon: Building2,
    features: ["Code compliance", "Large scale systems", "Preventative maintenance"]
  },
  {
    title: "General Repairs",
    description: "Small fixes that make a big difference in your daily life.",
    icon: Wrench,
    features: ["Pipe insulation", "Valve replacement", "Pressure testing"]
  }
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-emerald-600 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">What We Do</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
            Comprehensive plumbing and sewage solutions tailored to your specific needs. No job is too big or too small.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  <div className="h-2 bg-emerald-600 w-0 group-hover:w-full transition-all duration-500" />
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="p-0 h-auto font-bold text-emerald-600 hover:bg-transparent hover:text-emerald-700 group-hover:gap-2 transition-all" asChild>
                      <Link to="/booking">
                        Book This Service <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold">How We Work</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Booking", desc: "Schedule online or call us for immediate service." },
              { step: "02", title: "Inspection", desc: "We arrive on time and diagnose the issue thoroughly." },
              { step: "03", title: "Estimate", desc: "Clear, upfront pricing before any work begins." },
              { step: "04", title: "Repair", desc: "Expert craftsmanship to solve the problem for good." }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4">{step.step}</div>
                <h4 className="text-xl font-bold mb-4 relative z-10">{step.title}</h4>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-emerald-50 rounded-[3rem] p-12 md:p-20 text-center border border-emerald-100">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Not sure what you need?</h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Give us a call and describe your situation. We'll provide expert advice and help you determine the best course of action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 h-auto text-lg" asChild>
                <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">WhatsApp Us Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-8 py-6 h-auto text-lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
