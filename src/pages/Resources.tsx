import React from 'react';
import { Link } from 'react-router-dom';
import { RESOURCES } from '@/constants/resources';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Resources() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen pb-24">
      <SEO 
        title="Industrial Packaging Resources" 
        description="Technical guides, safety standards, and market insights for procurement managers in the woven packaging industry."
      />

       <div className="bg-[#0B3D91] py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Expert Insights</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               Lowering your packaging costs and improving safety through technical knowledge.
             </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 -mt-10">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map(resource => (
              <Card key={resource.slug} className="rounded-sm border-none shadow-lg overflow-hidden group">
                 <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                       <img 
                        src={resource.image} 
                        alt={resource.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-8 flex flex-col">
                       <span className="text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-2 block">{resource.category}</span>
                       <h2 className="text-xl font-black text-[#0B3D91] uppercase tracking-tight italic mb-4 leading-tight">{resource.title}</h2>
                       <p className="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">{resource.excerpt}</p>
                       <Button asChild variant="link" className="p-0 h-auto text-[#0B3D91] font-bold uppercase tracking-wider justify-start">
                          <Link to={`/resources/${resource.slug}`}>Read Full Article <ArrowRight size={14} className="ml-2" /></Link>
                       </Button>
                    </CardContent>
                 </div>
              </Card>
            ))}
         </div>
      </div>
    </div>
  );
}
