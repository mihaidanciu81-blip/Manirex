import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowLeft, 
  FileDown, 
  CheckCircle2, 
  Package, 
  ShieldCheck, 
  Truck,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PRODUCTS } from '@/constants/products';
import SEO from '@/components/SEO';

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return <div className="p-20 text-center">Product not found. <Link to="/products" className="text-[#0B3D91] underline">Back to catalog</Link></div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO 
        title={product.name} 
        description={product.summary}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "brand": {
            "@type": "Brand",
            "name": "Industrial Sacks"
          }
        }}
      />

      {/* Breadcrumb & Navigation */}
      <div className="bg-[#FAFAF9] border-b border-slate-200 py-4">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link to="/" className="hover:text-[#0B3D91]">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-[#0B3D91]">Products</Link>
            <span>/</span>
            <span className="text-slate-900">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12 lg:py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Gallery placeholder */}
            <div className="space-y-4 sticky top-32">
               <div className="aspect-square bg-slate-100 rounded-sm overflow-hidden border border-slate-200">
                 <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
               </div>
               <div className="grid grid-cols-4 gap-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="aspect-square bg-slate-100 rounded-sm border border-slate-200 hover:border-[#0B3D91] cursor-pointer" />
                  ))}
               </div>
               <div className="pt-6">
                 <Button variant="outline" className="w-full border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-xs py-10">
                    <FileDown size={20} className="mr-3 text-[#F97316]" /> Download Data Sheet (PDF)
                 </Button>
               </div>
            </div>

            {/* Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0B3D91]/5 text-[#0B3D91] text-[10px] font-bold uppercase tracking-[0.2em]">
                  Industrial Grade Packaging
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-[#0B3D91] tracking-tighter uppercase italic">{product.name}</h1>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                   <Button size="lg" asChild className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 h-14 font-black uppercase tracking-widest text-sm">
                      <Link to="/request-quote">Get Price Estimate <ArrowRight size={18} className="ml-2" /></Link>
                   </Button>
                   <div className="flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Typical Lead Time</span>
                      <span className="text-sm font-bold text-slate-900">{product.leadTime}</span>
                   </div>
                </div>
              </div>

              {/* Specs Table */}
              <div className="space-y-6 pt-10 border-t border-slate-100">
                <h3 className="text-xl font-bold uppercase tracking-tight italic text-[#0B3D91]">Technical Specifications</h3>
                <Table className="border border-slate-100">
                  <TableBody>
                    <SpecRow label="Material" value={product.specs.material} />
                    <SpecRow label="GSM Range" value={product.specs.gsmRange} />
                    <SpecRow label="Size Range" value={product.specs.sizeRange} />
                    <SpecRow label="Capacity / Load" value={product.specs.capacity} />
                    <SpecRow label="Closure Options" value={product.specs.closure} />
                    <SpecRow label="Printing" value={product.specs.printing} />
                    <SpecRow label="Lamination" value={product.specs.lamination} />
                    <SpecRow label="UV Stability" value={product.specs.uvTreatment} />
                  </TableBody>
                </Table>
              </div>

              {/* Applications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
                 <div className="space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-tight italic text-[#0B3D91]">Common Applications</h3>
                    <ul className="space-y-3">
                      {product.applications.map(app => (
                        <li key={app} className="flex items-start gap-4 text-sm text-slate-600 font-medium">
                           <CheckCircle2 size={18} className="text-[#F97316] shrink-0 mt-0.5" />
                           {app}
                        </li>
                      ))}
                    </ul>
                 </div>
                 <div className="bg-[#FAFAF9] p-6 rounded-sm space-y-4">
                    <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Quality Compliance</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.specs.certifications.map(c => (
                        <span key={c} className="bg-white border border-slate-200 px-3 py-1 rounded-sm text-[10px] font-bold text-slate-600">{c}</span>
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-medium">All our industrial sacks undergo rigorous bursting strength and UV exposure testing in our certified technical lab.</p>
                 </div>
              </div>

              {/* FAQ Section */}
              <div className="pt-10 border-t border-slate-100">
                <h3 className="text-xl font-bold uppercase tracking-tight italic text-[#0B3D91] mb-6">Frequently Asked Questions</h3>
                <Accordion type="single" collapsible className="w-full">
                  {product.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border-slate-100">
                      <AccordionTrigger className="text-left font-bold text-slate-800 uppercase tracking-tight text-sm py-4">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-6">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container max-w-7xl mx-auto px-4 text-center">
           <span className="text-orange-400 font-bold uppercase tracking-widest text-xs mb-4 block">Request A Samples & Quote</span>
           <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic mb-8">Discuss your technical requirements</h2>
           <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input type="email" placeholder="Enter your work email" className="bg-slate-800 border-none px-6 h-14 rounded-none outline-none focus:ring-2 focus:ring-orange-500 flex-1 font-medium" />
              <Button asChild className="bg-[#F97316] hover:bg-[#EA580C] h-14 font-black uppercase tracking-widest px-8">
                <Link to="/request-quote">Contact Sales</Link>
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}

function SpecRow({ label, value }: { label: string, value: string }) {
  return (
    <TableRow>
      <TableCell className="font-bold text-[#0B3D91] uppercase tracking-widest text-[10px] w-1/3 py-4">{label}</TableCell>
      <TableCell className="text-sm text-slate-600 font-medium py-4">{value}</TableCell>
    </TableRow>
  );
}
