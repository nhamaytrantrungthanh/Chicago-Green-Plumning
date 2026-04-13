import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    title: "Main Line Replacement",
    category: "sewage",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&q=80&w=800",
    desc: "Complete excavation and replacement of a collapsed main sewer line."
  },
  {
    title: "Modern Bathroom Install",
    category: "residential",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
    desc: "Full fixture installation for a luxury master bathroom renovation."
  },
  {
    title: "Commercial Kitchen Repiping",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    desc: "High-capacity grease trap and drainage system for a local restaurant."
  },
  {
    title: "Emergency Pipe Repair",
    category: "emergency",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800",
    desc: "Rapid response to a burst pipe in a residential basement."
  },
  {
    title: "Tankless Water Heater",
    category: "residential",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800",
    desc: "Energy-efficient tankless system installation for a family home."
  },
  {
    title: "Sewer Camera Inspection",
    category: "sewage",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
    desc: "Non-invasive diagnostic of a recurring blockage issue."
  }
];

export default function Gallery() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Our Work</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Project Gallery</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Take a look at some of our recent projects. We take pride in every pipe we lay and every fixture we fix.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="bg-slate-100 p-1 rounded-full">
                <TabsTrigger value="all" className="rounded-full px-8 data-active:bg-emerald-600 data-active:text-white">All Projects</TabsTrigger>
                <TabsTrigger value="residential" className="rounded-full px-8 data-active:bg-emerald-600 data-active:text-white">Residential</TabsTrigger>
                <TabsTrigger value="commercial" className="rounded-full px-8 data-active:bg-emerald-600 data-active:text-white">Commercial</TabsTrigger>
                <TabsTrigger value="sewage" className="rounded-full px-8 data-active:bg-emerald-600 data-active:text-white">Sewage</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                  <div key={idx}>
                    <ProjectCard project={project} idx={idx} />
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {["residential", "commercial", "sewage"].map(cat => (
              <TabsContent key={cat} value={cat} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.filter(p => p.category === cat).map((project, idx) => (
                    <div key={idx}>
                      <ProjectCard project={project} idx={idx} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Follow Our Daily Work</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            We post daily updates, plumbing tips, and behind-the-scenes looks at our major sewage operations on social media.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-colors">
              Instagram
            </a>
            <a href="#" className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full font-bold text-slate-700 hover:bg-slate-50 transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project, idx }: { project: any, idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: idx * 0.05 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-slate-100 aspect-square"
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <Badge className="w-fit mb-3 bg-emerald-500 text-white border-none uppercase tracking-widest text-[10px]">
          {project.category}
        </Badge>
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{project.desc}</p>
      </div>
    </motion.div>
  );
}
