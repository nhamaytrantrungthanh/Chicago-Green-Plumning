import { motion } from "motion/react";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const posts = [
  {
    title: "5 Signs You Have a Main Sewer Line Clog",
    excerpt: "Don't ignore these warning signs! A sewage backup can cause thousands in damage if not caught early.",
    category: "Maintenance",
    date: "Oct 12, 2023",
    author: "Lil Green",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Tankless vs. Traditional Water Heaters",
    excerpt: "Which one is right for your home? We break down the costs, benefits, and energy savings of each system.",
    category: "Guides",
    date: "Sep 28, 2023",
    author: "Lil Green",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "How to Prevent Frozen Pipes in Chicago Winters",
    excerpt: "Winter is coming. Learn the essential steps to protect your plumbing from the brutal Chicago cold.",
    category: "Seasonal",
    date: "Sep 15, 2023",
    author: "Lil Green",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Dangers of Chemical Drain Cleaners",
    excerpt: "Why you should stop using store-bought chemicals and what professional alternatives actually work.",
    category: "Safety",
    date: "Aug 30, 2023",
    author: "Lil Green",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-emerald-50 py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">Plumbing Wisdom</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">The Plumbing Blog</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Expert tips, maintenance guides, and industry news to help you keep your home's plumbing in top shape.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input className="pl-10 h-12 rounded-full border-slate-200 focus:ring-emerald-500" placeholder="Search for articles..." />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <Badge className="absolute top-4 left-4 bg-white text-slate-900 border-none shadow-sm">
                    {post.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <Link to="#" className="inline-flex items-center font-bold text-emerald-600 group-hover:gap-2 transition-all">
                  Read Full Article <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button variant="outline" className="px-8 py-6 h-auto text-lg border-slate-200">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-emerald-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-emerald-50 mb-10 max-w-xl mx-auto">
              Get seasonal maintenance reminders and exclusive discounts delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input className="bg-white/10 border-white/20 text-white placeholder:text-emerald-100 h-12" placeholder="Your email address" />
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50 h-12 px-8 font-bold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
