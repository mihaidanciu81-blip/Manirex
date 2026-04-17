import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingDown, Clock, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CASE_STUDIES = [
  {
    title: "18% Reduction in Packaging Cost for Global Salt Producer",
    industry: "Chemicals & Salt",
    challenge: "A leading salt refinery was experiencing 4.2% bag failure rate during maritime transport, leading to insurance claims and waste.",
    solution: "Transition to high-tenacity, double-chain stitch circular bags with internal PE lining.",
    result: "Failure rate reduced to 0.1%. Total cost per ton (packaging + waste) decreased by 18%.",
    image: "https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Supply Chain Resilience: 12-Day EU Lead Time for Agri-Conglomerate",
    industry: "Agriculture",
    challenge: "Importing bags from overseas took 6-8 weeks, creating inventory risks during peak harvest seasons.",
    solution: "Safety-stock agreement and prioritized production at our Bucharest plant.",
    result: "Lead time reduced to 12 days. Eliminated stock-outs for 3 consecutive seasons.",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "High-Visibility Branding: 32% Increase in Retail Throughput",
    industry: "Retail / Pet Food",
    challenge: "Client noticed low product turnover in supermarkets due to poor packaging presentation and low printing quality.",
    solution: "Transition to 10-color BOPP rotogravure laminated bags with gloss finish.",
    result: "32% increase in sales volume. Brand perception significantly increased in premium segments.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop"
  }
];

export default function CaseStudies() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen pb-24">
      <SEO 
        title="Industrial Success Stories" 
        description="Quantified results for our partners. Reducing packaging failure, optimizing logistics, and improving retail presence."
      />

       <div className="bg-[#0B3D91] py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Proven Performance</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               Quantified impact for industrial leaders. Real challenges, engineered solutions, and measurable results.
             </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 -mt-10">
         <div className="space-y-12">
            {CASE_STUDIES.map((cs, i) => (
              <Card key={i} className="rounded-sm border-none shadow-xl overflow-hidden group">
                 <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 relative h-[300px] lg:h-auto overflow-hidden">
                       <img 
                        src={cs.image} 
                        alt={cs.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                        referrerPolicy="no-referrer"
                      />
                       <div className="absolute top-6 left-6 flex gap-2">
                          <span className="bg-orange-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1">{cs.industry}</span>
                       </div>
                    </div>
                    <CardContent className="lg:w-1/2 p-10 lg:p-16 space-y-8 flex flex-col justify-center bg-white relative">
                       <h2 className="text-3xl font-black text-[#0B3D91] uppercase tracking-tighter italic leading-none">{cs.title}</h2>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">Challenge</h4>
                             <p className="text-xs text-slate-500 font-medium leading-relaxed">{cs.challenge}</p>
                          </div>
                          <div className="space-y-2">
                             <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#F97316]">Solution</h4>
                             <p className="text-xs text-slate-500 font-medium leading-relaxed">{cs.solution}</p>
                          </div>
                       </div>
                       <div className="p-6 bg-[#FAFAF9] border-l-4 border-slate-900 flex items-center justify-between gap-6">
                           <div className="space-y-1">
                              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Key Result</h4>
                              <p className="text-sm font-black text-slate-900 italic tracking-tight uppercase leading-snug">{cs.result}</p>
                           </div>
                           <TrendingDown size={32} className="text-slate-900" />
                       </div>
                       <Button asChild className="w-fit bg-slate-900 hover:bg-[#0B3D91] transition-colors h-14 font-black uppercase tracking-widest px-10">
                          <Link to="/request-quote">Achieve Similar Results</Link>
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
