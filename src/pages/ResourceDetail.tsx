import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { RESOURCES } from '@/constants/resources';
import SEO from '@/components/SEO';
import { ArrowLeft, Clock, User } from 'lucide-react';

export default function ResourceDetail() {
  const { slug } = useParams();
  const resource = RESOURCES.find(r => r.slug === slug);

  if (!resource) return <div className="p-20 text-center">Article not found</div>;

  return (
    <div className="bg-white min-h-screen pb-24">
      <SEO 
        title={resource.title} 
        description={resource.excerpt}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": resource.title,
          "description": resource.excerpt,
          "image": resource.image,
          "author": {
            "@type": "Organization",
            "name": "Industrial Sacks Engineering Team"
          }
        }}
      />

      <div className="container max-w-4xl mx-auto px-4 py-12 lg:py-20">
         <Link to="/resources" className="inline-flex items-center gap-2 text-xs font-bold text-[#F97316] uppercase tracking-widest mb-10 hover:translate-x-1 transition-transform">
           <ArrowLeft size={16} /> Back to resources
         </Link>

         <div className="space-y-8 mb-12">
            <span className="bg-[#0B3D91] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">{resource.category}</span>
            <h1 className="text-4xl lg:text-6xl font-black text-[#0B3D91] tracking-tighter uppercase italic leading-[1.1]">{resource.title}</h1>
            
            <div className="flex items-center gap-6 border-y border-slate-100 py-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
               <div className="flex items-center gap-2">
                  <User size={14} /> Industrial Sacks Engineering
               </div>
               <div className="flex items-center gap-2">
                  <Clock size={14} /> 6 Min Read
               </div>
            </div>
         </div>

         <div className="prose prose-slate max-w-none">
            <img 
              src={resource.image} 
              alt={resource.title} 
              className="w-full aspect-video object-cover rounded-sm mb-12" 
              referrerPolicy="no-referrer"
            />
            
            <div className="text-slate-600 text-lg leading-relaxed space-y-8 font-medium whitespace-pre-line">
               {resource.content}
            </div>
         </div>

         {/* Author Bio */}
         <div className="mt-20 p-8 bg-[#FAFAF9] rounded-sm flex flex-col md:flex-row gap-8 items-center border border-slate-100">
            <div className="w-20 h-20 bg-[#0B3D91] text-white flex items-center justify-center rounded-full font-black text-2xl">IS</div>
            <div className="space-y-2 text-center md:text-left">
               <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">About our Engineering Team</h4>
               <p className="text-sm text-slate-500 italic max-w-md">Our technical team consists of material scientists and mechanical engineers with combined 40+ years of experience in PP extrusion and industrial packaging design.</p>
            </div>
         </div>
      </div>
    </div>
  );
}
