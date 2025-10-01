import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
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
        <Route path="/legal/mentions" element={<MentionsLegales />} />
        <Route path="/legal/confidentialite" element={<Confidentialite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;