import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Package, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES } from '@/constants/industries';
import { PRODUCTS } from '@/constants/products';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = INDUSTRIES.find(i => i.slug === slug);
  const relevantProducts = PRODUCTS.filter(p => industry?.solutions.includes(p.slug));

  if (!industry) return <div className="p-20 text-center">Industry not found</div>;

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={industry.name} 
        description={industry.description}
      />

      <section className="relative h-[60vh] flex items-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
           <img 
            src={industry.image} 
            alt={industry.name} 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
           <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        <div className="container max-w-7xl mx-auto px-4 relative z-10">
           <div className="max-w-2xl">
              <span className="text-[#F97316] font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Proven Performance</span>
              <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">{industry.name}</h1>
           </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-8">
                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-[#0B3D91] uppercase tracking-tight italic">The Packaging Challenge</h2>
                    <p className="text-lg text-slate-600 leading-relaxed font-medium">
                      {industry.challenge}
                    </p>
                 </div>
                 <div className="space-y-6">
                    <h2 className="text-2xl font-black text-[#0B3D91] uppercase tracking-tight italic">Our Strategic Approach</h2>
                    <p className="text-slate-500 leading-relaxed">
                      {industry.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <li className="flex items-center gap-3 text-sm font-bold text-slate-800 uppercase tracking-tight">
                          <CheckCircle2 size={16} className="text-[#F97316]" /> Logistics Efficiency
                       </li>
                       <li className="flex items-center gap-3 text-sm font-bold text-slate-800 uppercase tracking-tight">
                          <CheckCircle2 size={16} className="text-[#F97316]" /> Sift-Proof Engineering
                       </li>
                       <li className="flex items-center gap-3 text-sm font-bold text-slate-800 uppercase tracking-tight">
                          <CheckCircle2 size={16} className="text-[#F97316]" /> Moisture Protection
                       </li>
                       <li className="flex items-center gap-3 text-sm font-bold text-slate-800 uppercase tracking-tight">
                          <CheckCircle2 size={16} className="text-[#F97316]" /> UV Stabilization
                       </li>
                    </ul>
                 </div>
              </div>

              <div className="bg-[#0B3D91] p-10 lg:p-16 text-white space-y-10 rounded-sm">
                 <div className="space-y-6">
                    <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">Featured Solutions</span>
                    <h3 className="text-4xl font-black tracking-tighter uppercase italic">Best Products for {industry.name}</h3>
                 </div>
                 <div className="space-y-6">
                    {relevantProducts.map(product => (
                      <Link key={product.slug} to={`/products/${product.slug}`} className="group block border-b border-white/10 pb-6 hover:border-orange-500 transition-colors">
                        <div className="flex justify-between items-center">
                           <div className="space-y-2">
                             <h4 className="text-xl font-bold uppercase tracking-tight italic group-hover:text-orange-400 transition-colors">{product.name}</h4>
                             <p className="text-slate-300 text-xs line-clamp-1">{product.summary}</p>
                           </div>
                           <ArrowRight size={24} className="text-orange-500" />
                        </div>
                      </Link>
                    ))}
                 </div>
                 <Button asChild block size="lg" className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white h-14 font-black uppercase tracking-widest">
                    <Link to="/request-quote">Request Industry Quote</Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
