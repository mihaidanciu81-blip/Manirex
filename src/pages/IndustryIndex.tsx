import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '@/constants/industries';
import SEO from '@/components/SEO';

export default function IndustryIndex() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <SEO 
        title="Industrial Sectors We Serve" 
        description="Specialized industrial packaging solutions for Agriculture, Construction, Chemicals, Food Processing, and Mining."
      />

       <div className="bg-[#0B3D91] py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Industries Served</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               Packaging that understands the specific demands of your sector. From food safety to mining durability.
             </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 -mt-10 pb-24">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {INDUSTRIES.map((industry) => (
              <Link 
                key={industry.slug} 
                to={`/industries/${industry.slug}`}
                className="group relative h-[450px] overflow-hidden border border-slate-200"
              >
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent group-hover:via-slate-900/20 transition-all" />
                  <div className="absolute inset-x-0 bottom-0 p-10 space-y-4">
                     <span className="text-orange-400 font-bold uppercase tracking-widest text-[10px]">Specialized Solutions</span>
                     <h2 className="text-3xl font-black text-white tracking-tighter uppercase italic">{industry.name}</h2>
                     <p className="text-slate-300 text-sm line-clamp-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                       {industry.description}
                     </p>
                     <div className="pt-2">
                       <span className="inline-flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest border-b-2 border-orange-500 pb-1">
                          View Industry Specs <ArrowRight size={14} />
                       </span>
                     </div>
                  </div>
              </Link>
            ))}
         </div>
      </div>
    </div>
  );
}
