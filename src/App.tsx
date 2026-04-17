import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Lazy load pages for better performance
import Home from '@/pages/Home';
import ProductIndex from '@/pages/ProductIndex';
import ProductDetail from '@/pages/ProductDetail';
import IndustryIndex from '@/pages/IndustryIndex';
import IndustryDetail from '@/pages/IndustryDetail';
import Capabilities from '@/pages/Capabilities';
import Resources from '@/pages/Resources';
import ResourceDetail from '@/pages/ResourceDetail';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import RequestQuote from '@/pages/RequestQuote';
import CaseStudies from '@/pages/CaseStudies';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/products" element={<ProductIndex />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          
          <Route path="/industries" element={<IndustryIndex />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          
          <Route path="/capabilities" element={<Capabilities />} />
          
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          
          <Route path="/case-studies" element={<CaseStudies />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/request-quote" element={<RequestQuote />} />
          
          {/* Fallback */}
          <Route path="*" element={<div className="p-20 text-center">Page Not Found</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
