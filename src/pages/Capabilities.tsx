import React from 'react';
import { Factory, ShieldCheck, Truck, Printer, Zap, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import SEO from '@/components/SEO';

export default function Capabilities() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <SEO 
        title="Manufacturing Capabilities" 
        description="Explore our state-of-the-art production capacity. 50M+ bags/year, Starlinger machinery, in-house printing, and high-tenacity weaving."
      />

       <div className="bg-[#0B3D91] py-20 lg:py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2">
           <Factory size={800} />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Industrial Power</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               Merging advanced European technology with scale to provide the most reliable packaging infrastructure in the region.
             </p>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
              <div className="space-y-8">
                <span className="text-[#F97316] font-bold uppercase tracking-widest text-xs">Production Engine</span>
                <h2 className="text-4xl font-black text-[#0B3D91] tracking-tighter uppercase italic">State-of-the-Art Extrusion & Weaving</h2>
                <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
                  <p>Our facility operates 24/7 utilizing high-speed Starlinger extrusion lines and circular looms. We produce high-tenacity polypropylene tapes with precise denier control, ensuring every meter of fabric meets the exact weight and strength specifications required for your project.</p>
                  <ul className="space-y-4 pt-4">
                    <CapabilityItem title="Automatic Tension Control" description="Maintains constant weave density for zero-defect fabric runs." />
                    <CapabilityItem title="Internal Technical Lab" description="Every batch is tested for breaking load, elongation, and UV stability." />
                    <CapabilityItem title="Virgin Resin Sourcing" description="Only 100% virgin PP/PE granules are used for maximum food safety and strength." />
                  </ul>
                </div>
              </div>
              <div className="bg-slate-200 aspect-video rounded-sm overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?q=80&w=1200&auto=format&fit=crop" alt="Machinery" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <FeatureCard 
                icon={<Printer size={32} className="text-[#F97316]" />}
                title="Precision Printing"
                description="8-color flexographic printing and 10-color photorealistic rotogravure capabilities for the highest level of brand presentaton."
              />
              <FeatureCard 
                icon={<Zap size={32} className="text-[#F97316]" />}
                title="Lamination Tech"
                description="In-line extrusion lamination providing a permanent barrier against moisture and fine particles, extending product shelf-life."
              />
              <FeatureCard 
                icon={<Truck size={32} className="text-[#F97316]" />}
                title="Logistics & Export"
                description="Dedicated warehouse for safety stock and expert handling of international container logistics across EU and overseas."
              />
           </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-24 text-white">
         <div className="container max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
               <div>
                  <div className="text-5xl lg:text-7xl font-black text-orange-500 tracking-tighter mb-2 italic">50M+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Total Bags / Year</div>
               </div>
               <div>
                  <div className="text-5xl lg:text-7xl font-black text-orange-500 tracking-tighter mb-2 italic">25+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Countries Served</div>
               </div>
               <div>
                  <div className="text-5xl lg:text-7xl font-black text-orange-500 tracking-tighter mb-2 italic">99.2%</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">On-time Delivery</div>
               </div>
               <div>
                  <div className="text-5xl lg:text-7xl font-black text-orange-500 tracking-tighter mb-2 italic">15y</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Industry Excellence</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}

function CapabilityItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="space-y-1">
      <h4 className="font-bold text-[#0B3D91] uppercase tracking-tight italic text-sm">{title}</h4>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-white p-10 space-y-6 shadow-sm border-l-4 border-[#0B3D91]">
      <div className="bg-[#FAFAF9] w-16 h-16 flex items-center justify-center rounded-sm">{icon}</div>
      <h3 className="text-xl font-black text-[#0B3D91] uppercase tracking-tighter italic">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
