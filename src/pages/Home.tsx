import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Settings, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe, 
  Package, 
  Truck,
  FileCheck,
  Factory,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <SEO 
        title="Industrial Woven Packaging Solutions" 
        description="Premium PP woven bags, FIBCs, and custom packaging for agriculture, construction, and food processing. 50M+ annual capacity." 
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Industrial Sacks & Bags Manufacturing",
          "url": "https://industrialsacks.com",
          "logo": "https://industrialsacks.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+40-700-000-000",
            "contactType": "customer service"
          }
        }}
      />

      {/* Hero Section */}
      <section className="bg-white lg:min-h-[700px] grid grid-cols-1 lg:grid-cols-[55%_45%]">
        {/* Left Side: Content */}
        <div className="p-8 lg:p-20 xl:p-32 flex flex-col justify-center relative overflow-hidden">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8 z-10"
          >
            <motion.div variants={fadeIn} className="text-[#0B3D91] font-bold text-sm uppercase tracking-[2px]">
              European Manufacturing Excellence
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-4xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.1] tracking-tight font-display">
              Industrial Woven Packaging.<br />Engineered for Scale.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-[#475569] leading-relaxed max-w-lg">
              High-tensile PP woven bags, FIBC Big Bags, and custom BOPP solutions for chemical, agricultural, and construction leaders worldwide.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#F97316]/90 text-white text-base font-bold h-14 px-10 rounded-[4px] tracking-wide">
                <Link to="/request-quote" className="flex items-center gap-2">
                  Start RFQ Process
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91]/5 transition-all text-base font-bold h-14 px-10 rounded-[4px]">
                Explore Catalog
              </Button>
            </motion.div>

            {/* Inline Info */}
            <motion.div variants={fadeIn} className="pt-12 flex flex-wrap gap-8 text-[13px] text-[#475569] font-medium border-t border-[#E2E8F0]">
              <span className="flex items-center gap-2 tracking-tight whitespace-nowrap">📞 +40 21 555 0192</span>
              <span className="flex items-center gap-2 tracking-tight whitespace-nowrap">📧 sales@industrialsacks.ro</span>
              <span className="flex items-center gap-2 tracking-tight whitespace-nowrap">📍 ISO 9001:2015 Certified</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Visual */}
        <div className="bg-[#E2E8F0] relative overflow-hidden flex flex-col justify-between p-12 lg:p-20">
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#0B3D91]/5 to-transparent"></div>
          
          {/* Featured Product Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-8 rounded-[4px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] relative z-10 max-w-sm"
          >
            <div className="text-[14px] font-extrabold text-[#0B3D91] uppercase tracking-wide mb-6">Featured: FIBC TYPE-A Standard</div>
            <div className="space-y-3">
              <SpecItem label="SWL Capacity" value="500kg - 2000kg" />
              <SpecItem label="Safety Factor" value="5:1 / 6:1 (UN Rated)" />
              <SpecItem label="Fabric Weight" value="140 - 240 GSM" />
              <SpecItem label="Lead Time" value="10 Days (EU-Wide)" />
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-4 mt-12">
            <StatCard value="50M+" label="Annual Capacity" color="bg-[#0B3D91]" />
            <StatCard value="0.8%" label="Defect Ratio" color="bg-white !text-[#0B3D91] border border-[#0B3D91]" />
            <StatCard value="25+" label="Countries Served" color="bg-[#0B3D91]" />
            <StatCard value="BRCGS" label="Food-Grade Approved" color="bg-[#F97316]" />
          </div>
        </div>
      </section>

      {/* Trust Bar Section */}
      <section className="bg-white border-y border-[#E2E8F0] h-32 hidden md:block overflow-hidden">
        <div className="max-w-7xl mx-auto h-full flex items-center">
          <div className="w-[240px] px-12 h-full flex items-center shrink-0 border-r border-[#E2E8F0] text-[13px] font-bold text-[#475569]">
            Trusted by Global Producers
          </div>
          <div className="flex-1 flex justify-around items-center px-12 grayscale opacity-40 mix-blend-multiply">
              <div className="w-24 h-6 bg-[#CBD5E1] rounded-[2px]" />
              <div className="w-24 h-6 bg-[#CBD5E1] rounded-[2px]" />
              <div className="w-24 h-6 bg-[#CBD5E1] rounded-[2px]" />
              <div className="w-24 h-6 bg-[#CBD5E1] rounded-[2px]" />
              <div className="w-24 h-6 bg-[#CBD5E1] rounded-[2px]" />
              <div className="w-24 h-6 bg-[#CBD5E1] rounded-[2px]" />
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="space-y-4">
                <span className="text-[#F97316] font-bold uppercase tracking-widest text-sm">Industrial Catalog</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0B3D91] tracking-tighter uppercase italic">Engineered Solutions</h2>
              </div>
              <Button variant="link" asChild className="text-[#0B3D91] font-bold uppercase tracking-wider p-0 h-auto">
                <Link to="/products">Explore full product range →</Link>
              </Button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProductCard 
                icon={<Package className="text-[#F97316]" size={32} />}
                title="PP Woven Bags"
                description="High-strength polypropylene sacks for sugar, flour, chemicals, and animal feed."
                href="/products/pp-woven-bags"
              />
              <ProductCard 
                icon={<Zap className="text-[#F97316]" size={32} />}
                title="BOPP Laminated Bags"
                description="Premium 8-color printing with high-gloss finish for retail shelf presence."
                href="/products/bopp-laminated-bags"
              />
              <ProductCard 
                icon={<Users className="text-[#F97316]" size={32} />}
                title="FIBC (Big Bags)"
                description="Large flexible bulk containers with SWL up to 2000kg. Type A/B/C/D available."
                href="/products/fibc-big-bags"
              />
              <ProductCard 
                icon={<Globe className="text-[#F97316]" size={32} />}
                title="Leno Mesh Bags"
                description="Optimized ventilation for fresh produce like onions, potatoes, and citrus."
                href="/products/leno-mesh-bags"
              />
              <ProductCard 
                icon={<Factory className="text-[#F97316]" size={32} />}
                title="Jute & Hessian"
                description="Natural, biodegradable packaging for commodities and decorative use."
                href="/products/jute-hessian-sacks"
              />
              <ProductCard 
                icon={<Settings className="text-[#F97316]" size={32} />}
                title="Custom Manufacturing"
                description="Tailored technical specs, internal linings, and custom private label designs."
                href="/products/custom-private-label"
              />
           </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-slate-900 py-24">
        <div className="container max-w-7xl mx-auto px-4 text-center mb-16">
           <span className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-4 block">Proven Performance</span>
           <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-6">Industries We Serve</h2>
           <p className="text-slate-400 max-w-2xl mx-auto">Providing specialized packaging that meets the rigorous demands of global supply chains.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <IndustryTile title="Agriculture" image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=600&auto=format&fit=crop" />
          <IndustryTile title="Construction" image="https://images.unsplash.com/photo-1503387762-592be5a52680?q=80&w=600&auto=format&fit=crop" />
          <IndustryTile title="Chemicals" image="https://images.unsplash.com/photo-1532187875605-2fe358a71e68?q=80&w=600&auto=format&fit=crop" />
          <IndustryTile title="Food Processing" image="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=600&auto=format&fit=crop" />
          <IndustryTile title="Mining" image="https://images.unsplash.com/photo-1578319439584-104c94d37305?q=80&w=600&auto=format&fit=crop" />
          <IndustryTile title="Retail" image="https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=600&auto=format&fit=crop" />
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-[#FAFAF9]">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#0B3D91]">
               <h3 className="text-xl font-black text-[#0B3D91] uppercase tracking-tighter mb-4 italic">High Capacity</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">50M+ bags produced annually with state-of-the-art Starlinger equipment. We guarantee continuity for your supply chain.</p>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <CheckCircle2 size={16} className="text-[#F97316]" /> 10-day EU Lead Time
               </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#0B3D91]">
               <h3 className="text-xl font-black text-[#0B3D91] uppercase tracking-tighter mb-4 italic">Certified Quality</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">Strict adherence to international standards including ISO 9001, ISO 22000 (Food Safety), and BRCGS certification.</p>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <CheckCircle2 size={16} className="text-[#F97316]" /> In-House Technical Lab
               </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-sm border-t-4 border-[#0B3D91]">
               <h3 className="text-xl font-black text-[#0B3D91] uppercase tracking-tighter mb-4 italic">Custom Engineering</h3>
               <p className="text-slate-600 text-sm leading-relaxed mb-6">Fully integrated printing, lamination, and sewing capabilities allow us to build custom packaging from the ground up.</p>
               <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <CheckCircle2 size={16} className="text-[#F97316]" /> Support for Private Labels
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-[#0B3D91] py-20">
        <div className="container max-w-7xl mx-auto px-4 text-center">
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-8">Ready to secure your production lines?</h2>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-[#F97316] hover:bg-[#EA580C] text-white">
                <Link to="/request-quote" className="flex items-center gap-2">Start Your RFQ <ArrowRight size={18} /></Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">Contact Engineering Team</Button>
           </div>
        </div>
      </section>
    </div>
  );
}

function ProductCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Card className="rounded-sm border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
      <CardContent className="p-10 space-y-6">
        <div className="w-16 h-16 bg-[#FAFAF9] rounded-sm flex items-center justify-center group-hover:bg-[#F97316]/10 transition-colors">
          {icon}
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-black text-[#0B3D91] tracking-tighter uppercase italic">{title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {description}
          </p>
          <Link to={href} className="inline-flex items-center gap-2 text-[#F97316] font-bold text-xs uppercase tracking-widest hover:underline">
            Explore Range <ArrowRight size={14} />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

function IndustryTile({ title, image }: { title: string, image: string }) {
  return (
    <Link to={`/industries/${title.toLowerCase()}`} className="relative h-[300px] overflow-hidden group">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors" />
      <div className="absolute inset-x-0 bottom-0 p-8">
         <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic translate-y-2 group-hover:translate-y-0 transition-transform">{title}</h3>
         <div className="h-0.5 w-12 bg-orange-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </Link>
  );
}

function SpecItem({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#E2E8F0] last:border-0">
      <span className="text-[12px] text-[#475569] font-medium">{label}</span>
      <span className="text-[12px] text-[#0B3D91] font-bold">{value}</span>
    </div>
  );
}

function StatCard({ value, label, color }: { value: string, label: string, color: string }) {
  return (
    <div className={cn("p-6 flex flex-col justify-center rounded-[4px]", color)}>
      <span className="text-2xl font-extrabold leading-none tracking-tight">{value}</span>
      <span className="text-[10px] font-bold uppercase tracking-wider opacity-80 mt-2">{label}</span>
    </div>
  );
}
