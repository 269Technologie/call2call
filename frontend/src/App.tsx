import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ScrollToTop } from '@/components/ScrollToTop';
import { BackToTop } from '@/components/BackToTop';
import Home from '@/pages/Home';
import Fonctionnalites from '@/pages/Fonctionnalites';
import Pricing from '@/pages/Pricing';
import CommentCaMarche from '@/pages/CommentCaMarche';
import Support from '@/pages/Support';
import SecuriteRGPD from '@/pages/SecuriteRGPD';
import Portail from '@/pages/Portail';
import Ecommerce from '@/pages/Ecommerce';
import MentionsLegales from '@/pages/MentionsLegales';
import Confidentialite from '@/pages/Confidentialite';
import NotFound from '@/pages/NotFound';
import QuiSommesNous from './pages/QuiSommesNous';
import Blog from '@/pages/Blog';
import FAQ from '@/pages/FAQ';
import Langues from '@/pages/Langues';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <BackToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonctionnalites" element={<Fonctionnalites />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
          <Route path="/support" element={<Support />} />
          <Route path="/securite-rgpd" element={<SecuriteRGPD />} />
          <Route path="/portail" element={<Portail />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal/mentions" element={<MentionsLegales />} />
          <Route path="/langues" element={<Langues />} />
          <Route path="/legal/confidentialite" element={<Confidentialite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;