import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  Phone, 
  Menu, 
  X, 
  Globe, 
  ChevronDown,
  Mail,
  Linkedin,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from '@/lib/utils';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] font-sans text-[#1E293B] flex flex-col">
      {/* Header */}
      <header className={cn(
        "sticky top-0 z-50 w-full h-[72px] bg-white border-b border-[#E2E8F0] flex items-center shrink-0 transition-shadow duration-300",
        isScrolled && "shadow-sm"
      )}>
        <div className="max-w-7xl mx-auto px-4 lg:px-12 w-full flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#0B3D91] flex items-center justify-center rounded-none relative">
              <div className="w-4 h-4 border-2 border-white"></div>
            </div>
            <span className="text-[#0B3D91] font-extrabold text-xl tracking-wider uppercase font-display">IndustrialSacks</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex items-center gap-8">
               <Link to="/products" className="text-sm font-medium text-[#1E293B] hover:text-[#0B3D91] transition-color uppercase tracking-tight">Products</Link>
               <Link to="/industries" className="text-sm font-medium text-[#1E293B] hover:text-[#0B3D91] transition-color uppercase tracking-tight">Industries</Link>
               <Link to="/capabilities" className="text-sm font-medium text-[#1E293B] hover:text-[#0B3D91] transition-color uppercase tracking-tight">Capabilities</Link>
               <Link to="/resources" className="text-sm font-medium text-[#1E293B] hover:text-[#0B3D91] transition-color uppercase tracking-tight">Quality</Link>
            </nav>

            <div className="flex items-center">
               {/* Language Switcher */}
               <div className="flex items-center gap-2 border-r border-[#E2E8F0] pr-5 flex-shrink-0">
                  <button 
                  onClick={() => changeLanguage('ro')}
                  className={cn("text-[10px] font-bold uppercase hover:text-[#0B3D91] transition-colors", i18n.language.startsWith('ro') ? "text-[#0B3D91]" : "text-[#475569]")}
                  >
                  RO
                  </button>
                  <span className="text-[#E2E8F0] text-[10px]">/</span>
                  <button 
                  onClick={() => changeLanguage('en')}
                  className={cn("text-[10px] font-bold uppercase hover:text-[#0B3D91] transition-colors", i18n.language.startsWith('en') ? "text-[#0B3D91]" : "text-[#475569]")}
                  >
                  EN
                  </button>
               </div>

               <Button asChild className="bg-[#F97316] hover:bg-[#F97316]/90 text-white font-bold h-10 px-6 rounded-[4px] ml-5 uppercase text-xs tracking-wide">
               <Link to="/request-quote">{t('nav.requestQuote') || 'Request Quote'}</Link>
               </Button>
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
             <Sheet>
               <SheetTrigger asChild>
                 <Button variant="ghost" size="icon">
                   <Menu className="text-slate-900" />
                 </Button>
               </SheetTrigger>
               <SheetContent side="right" className="bg-white p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                       <span className="font-bold text-lg uppercase tracking-wider text-[#0B3D91]">Menu</span>
                    </div>
                    <nav className="flex-1 overflow-y-auto p-6 space-y-4">
                       <MobileLink to="/" title="Home" />
                       <div className="space-y-2">
                         <span className="text-xs font-bold uppercase text-slate-400 tracking-widest">{t('nav.products')}</span>
                         <div className="pl-4 space-y-2 flex flex-col">
                           <MobileLink to="/products/pp-woven-bags" title="PP Woven Bags" />
                           <MobileLink to="/products/fibc-big-bags" title="FIBC Big Bags" />
                           <MobileLink to="/products/bopp-laminated-bags" title="BOPP Laminated" />
                         </div>
                       </div>
                       <MobileLink to="/capabilities" title={t('nav.capabilities')} />
                       <MobileLink to="/about" title={t('nav.about')} />
                       <MobileLink to="/contact" title={t('nav.contact')} />
                    </nav>
                    <div className="p-6 border-t border-slate-100 space-y-4">
                        <div className="flex gap-4">
                          <Button variant="outline" className="flex-1" onClick={() => changeLanguage('ro')}>RO</Button>
                          <Button variant="outline" className="flex-1" onClick={() => changeLanguage('en')}>EN</Button>
                        </div>
                        <Button asChild className="w-full bg-[#F97316] hover:bg-[#EA580C]">
                          <Link to="/request-quote">{t('nav.requestQuote')}</Link>
                        </Button>
                    </div>
                  </div>
               </SheetContent>
             </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-slate-800 pb-16 mb-10">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
                <span className="text-[#0B3D91] font-bold text-lg">W</span>
              </div>
              <span className="text-xl font-extrabold tracking-tighter uppercase italic">Woven</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Direct manufacturers of engineered industrial packaging solutions. Supplying Europe's leading producers in agriculture, industry, and retail.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center hover:bg-[#0B3D91] hover:border-transparent transition-all">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">{t('nav.products')}</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link to="/products/pp-woven-bags" className="hover:text-white transition-colors">PP Woven Bags</Link></li>
              <li><Link to="/products/bopp-laminated-bags" className="hover:text-white transition-colors">BOPP Laminated Bags</Link></li>
              <li><Link to="/products/fibc-big-bags" className="hover:text-white transition-colors">FIBC Big Bags</Link></li>
              <li><Link to="/products/leno-mesh-bags" className="hover:text-white transition-colors">Leno Mesh Bags</Link></li>
              <li><Link to="/products/custom-private-label" className="hover:text-white transition-colors">Private Label Solutions</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">{t('footer.company')}</h4>
             <ul className="space-y-3 text-slate-400 text-sm">
                <li><Link to="/capabilities" className="hover:text-white transition-colors">Manufacturing Capabilities</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Our Factory</Link></li>
                <li><Link to="/resources" className="hover:text-white transition-colors">Buyer's Resources</Link></li>
                <li><Link to="/case-studies" className="hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 uppercase tracking-wider">{t('footer.newsletter')}</h4>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full bg-slate-800 border-none rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-[#F97316] transition-all outline-none"
                />
              </div>
              <Button className="w-full bg-[#0B3D91] hover:bg-[#0B3D91]/90 font-bold uppercase tracking-wider text-xs">Subscribe Now</Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 items-center grayscale opacity-40">
               <img src="https://placehold.co/40x40?text=ISO" alt="ISO" />
               <img src="https://placehold.co/40x40?text=BRC" alt="BRC" />
               <img src="https://placehold.co/40x40?text=UN" alt="UN" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <p>© {new Date().getFullYear()} Industrial Sacks & Bags Manufacturing. {t('footer.rights')}</p>
          <div className="flex gap-6 uppercase tracking-widest font-bold">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Sale</Link>
            <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/40700000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

function ListItem({ title, href, children }: { title: string, href: string, children: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-50 hover:text-[#0B3D91] focus:bg-slate-50 focus:text-[#0B3D91]"
        >
          <div className="text-sm font-bold uppercase tracking-wide leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-slate-500">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MobileLink({ to, title }: { to: string, title: string }) {
  return (
    <Link to={to} className="block text-lg font-bold uppercase tracking-tighter text-slate-800 hover:text-[#0B3D91]">
      {title}
    </Link>
  );
}
