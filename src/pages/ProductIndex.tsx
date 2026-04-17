import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Package, Check } from 'lucide-react';
import { PRODUCTS } from '@/constants/products';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ProductIndex() {
  const { t } = useTranslation();

  return (
    <div className="bg-[#FAFAF9] min-h-screen pb-24">
      <SEO 
        title="Industrial Packaging Product Range" 
        description="Explore our full range of PP woven bags, FIBC Big Bags, BOPP laminated packaging, and mesh sacks. Direct factory supply for industry leaders."
      />

      <div className="bg-[#0B3D91] py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Our Product Range</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               Engineered packaging solutions designed for durability, efficiency, and safety in heavy-duty industrial environments.
             </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <Card key={product.slug} className="group rounded-sm border-none shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#F97316] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">Factory Direct</span>
                </div>
              </div>
              <CardContent className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-black text-[#0B3D91] uppercase italic tracking-tighter mb-4">{product.name}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {product.summary}
                </p>
                <div className="space-y-2 mb-8 border-t border-slate-100 pt-6">
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-tight">
                     <Check size={14} className="text-[#F97316]" /> {product.specs.gsmRange}
                   </div>
                   <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-tight">
                     <Check size={14} className="text-[#F97316]" /> EU Logistics Optimized
                   </div>
                </div>
                <Button asChild className="w-full bg-slate-900 hover:bg-[#0B3D91] transition-colors rounded-none font-bold uppercase tracking-widest text-xs h-12">
                  <Link to={`/products/${product.slug}`}>View Technical Specs <ArrowRight size={16} className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
