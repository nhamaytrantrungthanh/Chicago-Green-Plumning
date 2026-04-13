import { motion } from "motion/react";
import { Check, Info, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic Repair",
    price: "From $99",
    description: "Perfect for minor leaks, faucet repairs, or simple clogs.",
    features: [
      "Professional Inspection",
      "Minor Parts Included",
      "Workmanship Guarantee",
      "Clean-up Service"
    ],
    cta: "Book Now",
    popular: false
  },
  {
    name: "Standard Service",
    price: "From $199",
    description: "Ideal for drain cleaning, water heater maintenance, or toilet installs.",
    features: [
      "Everything in Basic",
      "Advanced Diagnostics",
      "Priority Scheduling",
      "Maintenance Advice"
    ],
    cta: "Book Now",
    popular: true
  },
  {
    name: "Major Project",
    price: "Custom Quote",
    description: "For sewage operations, main line repairs, or full repiping.",
    features: [
      "Detailed Project Plan",
      "Permit Assistance",
      "Heavy Equipment Use",
      "Long-term Warranty"
    ],
    cta: "Get a Quote",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24 text-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Fair Rates, Exceptional Work</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We believe in upfront pricing without hidden surprises. Get a clear estimate before we start any work.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={cn(
                  "h-full border-2 transition-all duration-300 relative overflow-hidden",
                  plan.popular ? "border-emerald-500 shadow-xl scale-105 z-10" : "border-slate-100 shadow-sm"
                )}>
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-bl-lg">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="p-8 pb-0">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{plan.description}</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      {plan.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-emerald-600" />
                          </div>
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-8 pt-0">
                    <Button 
                      className={cn(
                        "w-full py-6 h-auto text-lg font-bold",
                        plan.popular ? "bg-emerald-600 hover:bg-emerald-700" : "bg-slate-900 hover:bg-slate-800"
                      )}
                      asChild
                    >
                      <Link to="/booking">{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto p-6 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4">
            <Info className="w-6 h-6 text-blue-600 shrink-0" />
            <p className="text-sm text-blue-800 leading-relaxed">
              <strong>Note:</strong> Prices listed are starting estimates. Final costs may vary based on the complexity of the job, materials required, and your specific location. We provide a firm quote after on-site inspection.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Do you charge for estimates?", a: "We offer free over-the-phone estimates. For complex issues requiring on-site diagnostic, a small service fee may apply, which is credited toward your repair if you choose us." },
                { q: "Are you available for emergencies?", a: "Yes! We provide 24/7 emergency services for urgent issues like burst pipes, major flooding, or sewage backups." },
                { q: "What areas do you serve?", a: "We primarily serve Chicago and the surrounding suburbs. Call us to confirm if we cover your specific zip code." },
                { q: "Do you offer any warranties?", a: "Absolutely. We stand behind our work with a 1-year workmanship guarantee on all repairs and installations." }
              ].map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-white px-6 rounded-xl border border-slate-200">
                  <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-24 bg-emerald-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Need an Emergency Quote?</h2>
          <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
            If you're facing a plumbing crisis, don't wait. Call us now for immediate pricing and dispatch.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-8 h-auto text-2xl font-bold shadow-xl" asChild>
            <a href="https://wa.me/84909958164" target="_blank" rel="noreferrer">
              <MessageSquare className="mr-3 w-6 h-6" />
              WhatsApp Us Now
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
