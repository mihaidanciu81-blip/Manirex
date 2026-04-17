import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe, Linkedin, MessageSquare } from 'lucide-react';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div className="bg-[#FAFAF9] min-h-screen pb-24">
      <SEO 
        title="Contact Our Sales & Engineering Team" 
        description="Reach out for technical inquiries, factory tours, or logistics coordination. Our Bucharest plant is open Mon-Fri for client visits."
      />

       <div className="bg-[#0B3D91] py-20 lg:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
             <h1 className="text-4xl lg:text-7xl font-black text-white tracking-tighter uppercase italic mb-6">Let's Connect</h1>
             <p className="text-lg text-slate-300 font-medium leading-relaxed">
               Whether you need a sample run or a multi-year supply contract, our team is ready to discuss your packaging strategy.
             </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 -mt-16 lg:-mt-24">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-white shadow-xl rounded-sm p-8 lg:p-12">
               <h2 className="text-2xl font-black text-[#0B3D91] uppercase tracking-tighter italic mb-8 border-b border-slate-100 pb-4">General Inquiry</h2>
               <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Your Name</label>
                     <Input placeholder="John Doe" className="rounded-none border-slate-200" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Company</label>
                     <Input placeholder="Company Name" className="rounded-none border-slate-200" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email Address</label>
                     <Input type="email" placeholder="john@company.com" className="rounded-none border-slate-200" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Subject</label>
                     <Input placeholder="Technical Inquiry" className="rounded-none border-slate-200" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Message</label>
                     <Textarea placeholder="How can we help you today?" className="rounded-none border-slate-200 min-h-[150px]" />
                  </div>
                  <Button className="md:col-span-2 bg-[#0B3D91] hover:bg-[#0B3D91]/90 h-14 font-black uppercase tracking-widest">Send Message</Button>
               </form>
            </div>

            <div className="space-y-8">
               <div className="bg-white p-8 rounded-sm shadow-sm border border-slate-100 space-y-6">
                  <h3 className="text-lg font-bold text-[#0B3D91] uppercase tracking-tight italic">Global Headquarters</h3>
                  <div className="space-y-6">
                     <ContactLine icon={<MapPin size={18} className="text-[#F97316]" />} title="Address" detail="Bulevardul Industrial 44, Bucharest, Romania" />
                     <ContactLine icon={<Phone size={18} className="text-[#F97316]" />} title="Main Office" detail="+40 700 000 000" />
                     <ContactLine icon={<Mail size={18} className="text-[#F97316]" />} title="Email" detail="office@industrialsacks.com" />
                     <ContactLine icon={<Clock size={18} className="text-[#F97316]" />} title="Working Hours" detail="Mon - Fri: 08:00 - 17:00 (EET)" />
                  </div>
               </div>

               <div className="bg-slate-900 p-8 text-white rounded-sm space-y-6">
                  <h3 className="text-lg font-bold uppercase tracking-tight italic">Quick Support</h3>
                  <p className="text-sm text-slate-400">Need immediate pricing or stock check?</p>
                  <div className="flex flex-col gap-4">
                     <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12">
                        <a href="https://wa.me/40700000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                           <MessageSquare size={16} /> WhatsApp Sales
                        </a>
                     </Button>
                     <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 h-12">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                           <Linkedin size={16} /> LinkedIn Professional
                        </a>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <section className="container max-w-7xl mx-auto px-4 mt-24">
         <div className="h-[400px] bg-slate-200 rounded-sm overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 grayscale opacity-40">
               <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="relative z-10 bg-white p-6 shadow-xl rounded-sm border-l-4 border-orange-500">
               <h4 className="font-bold text-slate-900 mb-2 uppercase tracking-widest text-xs">Bucharest Logistics Hub</h4>
               <p className="text-sm text-slate-500">44-48 Industrial Blvd, Sector 3</p>
            </div>
         </div>
      </section>
    </div>
  );
}

function ContactLine({ icon, title, detail }: { icon: React.ReactNode, title: string, detail: string }) {
  return (
    <div className="flex gap-4 items-start">
       <div className="shrink-0 mt-0.5">{icon}</div>
       <div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{title}</div>
          <p className="text-sm font-bold text-slate-800 leading-tight">{detail}</p>
       </div>
    </div>
  );
}
