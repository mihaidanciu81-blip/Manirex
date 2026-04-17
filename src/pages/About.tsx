import React from 'react';
import SEO from '@/components/SEO';
import { History, Target, Users, Factory, Award, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title="About Our Manufacturing Plant" 
        description="A legacy of industrial excellence. From a local workshop to Europe's leading manufacturer of high-tenacity woven poly packaging."
      />

       <div className="bg-[#0B3D91] py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Our Legacy & Mission</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               For over 15 years, we have been the silent engine behind Europe's industrial supply chains, providing the critical packaging that keeps commodities moving.
             </p>
          </div>
        </div>
      </div>

      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl font-black text-[#0B3D91] tracking-tighter uppercase italic leading-tight">From Local Craft to <br/>Continental Scale</h2>
                 <div className="space-y-6 text-slate-600 leading-relaxed font-bold">
                    <p>Founded with a single loom and a vision for quality, we have grown into a vertically integrated manufacturing powerhouse. Today, our 15,000 sqm facility houses the most advanced Starlinger extrusion and circular weaving technology available.</p>
                    <p className="font-medium">We don't just sell bags; we engineer packaging systems. Our commitment to using 100% virgin polypropylene and maintaining rigorous food-safety standards has made us the preferred partner for multinational producers across the EU.</p>
                 </div>
                 <div className="flex flex-wrap gap-8 items-center border-t border-slate-100 pt-8">
                    <div className="text-center">
                       <div className="text-3xl font-black text-[#0B3D91] italic tracking-tighter">15+</div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Experience</div>
                    </div>
                    <div className="text-center">
                       <div className="text-3xl font-black text-[#0B3D91] italic tracking-tighter">150+</div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Team Members</div>
                    </div>
                    <div className="text-center">
                       <div className="text-3xl font-black text-[#0B3D91] italic tracking-tighter">15k</div>
                       <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sqm Facility</div>
                    </div>
                 </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4">
                    <div className="h-64 bg-slate-100 rounded-sm overflow-hidden">
                       <img src="https://images.unsplash.com/photo-1504307651254-35680f496f04?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="h-48 bg-[#F97316] rounded-sm p-6 text-white flex flex-col justify-end">
                       <span className="text-4xl font-black italic tracking-tighter">2010</span>
                       <span className="text-xs font-bold uppercase tracking-widest opacity-80">Factory Established</span>
                    </div>
                 </div>
                 <div className="space-y-4 pt-12">
                     <div className="h-48 bg-[#0B3D91] rounded-sm p-6 text-white">
                        <Award size={32} className="mb-4" />
                        <span className="block text-xs font-bold uppercase tracking-widest leading-tight">Intertek & ISO <br/> Certified Excellence</span>
                     </div>
                     <div className="h-64 bg-slate-100 rounded-sm overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                     </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#FAFAF9]">
         <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-black text-[#0B3D91] tracking-tighter uppercase italic text-center mb-16">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
               <ValueCard 
                icon={<Target className="text-[#F97316]" size={32} />}
                title="Integrity" 
                description="We never compromise on material quality. What we spec is what we ship—every time."
               />
               <ValueCard 
                icon={<Users className="text-[#F97316]" size={32} />}
                title="Partnership" 
                description="Your supply chain is our priority. We maintain safety stock and flexible production for our contract partners."
               />
               <ValueCard 
                icon={<History className="text-[#F97316]" size={32} />}
                title="Sustainability" 
                description="Investing in energy-efficient looms and 100% recyclable poly materials to reduce ecological impact."
               />
            </div>
         </div>
      </section>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="text-center space-y-6">
       <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-md border border-slate-100">
          {icon}
       </div>
       <h3 className="text-xl font-bold uppercase tracking-tight italic text-slate-900">{title}</h3>
       <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
