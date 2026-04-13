import { motion } from "motion/react";
import { ShieldCheck, Users, Award, Heart, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=2000" 
            alt="About Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Our Story</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Lil Green Plumbing</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A family-owned, Black-owned business dedicated to providing Chicago with the highest quality plumbing and sewage services.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Mission</h2>
              <h3 className="text-4xl font-bold text-slate-900 mb-6 font-serif italic">"Craftsmanship that flows through generations."</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Founded on the principles of integrity, hard work, and technical excellence, Lil Green Plumbing and Sewage LLC started with a simple goal: to provide reliable plumbing solutions that homeowners and businesses can trust.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                As a Black-owned business, we take immense pride in our craftsmanship and our commitment to the Chicago community. We don't just fix pipes; we build lasting relationships with our clients through transparency and superior service.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-emerald-50 rounded-2xl">
                  <p className="text-3xl font-bold text-emerald-600 mb-1">10+</p>
                  <p className="text-sm text-slate-600 font-medium">Years Experience</p>
                </div>
                <div className="p-6 bg-emerald-50 rounded-2xl">
                  <p className="text-3xl font-bold text-emerald-600 mb-1">500+</p>
                  <p className="text-sm text-slate-600 font-medium">Projects Completed</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" 
                alt="Plumbing work" 
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Certified Experts</p>
                    <p className="text-xs text-slate-500">Licensed in Illinois</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-4">Our Values</h2>
            <h3 className="text-4xl font-bold text-slate-900">What Drives Us Every Day</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                desc: "We believe in honest work and fair pricing. No hidden fees, no unnecessary repairs.",
                icon: ShieldCheck
              },
              {
                title: "Community",
                desc: "As a local business, we are invested in the well-being of our neighbors and city.",
                icon: Heart
              },
              {
                title: "Excellence",
                desc: "We never settle for 'good enough'. Our craftsmanship is built to last.",
                icon: Award
              }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Owner Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 h-full min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=1000" 
                alt="Owner" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-1/2 p-12 lg:p-16">
              <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">The Founder</Badge>
              <h3 className="text-3xl font-bold text-white mb-6">Professionalism Plus</h3>
              <p className="text-slate-300 mb-8 leading-relaxed italic">
                "I'm here to help and to give great service to anyone who has a plumbing problem. We go beyond to get the job completed and provide the best advice for long-term maintenance."
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-white font-medium">Expert Sewage Specialist</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span className="text-white font-medium">Master Plumber Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
