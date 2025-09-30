import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Fonctionnalites from "./pages/Fonctionnalites";
import Pricing from "./pages/Pricing";
import CommentCaMarche from "./pages/CommentCaMarche";
import Ecommerce from "./pages/Ecommerce";
import Portail from "./pages/Portail";
import SecuriteRGPD from "./pages/SecuriteRGPD";
import Support from "./pages/Support";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fonctionnalites" element={<Fonctionnalites />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/comment-ca-marche" element={<CommentCaMarche />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/portail" element={<Portail />} />
          <Route path="/securite-rgpd" element={<SecuriteRGPD />} />
          <Route path="/support" element={<Support />} />
          <Route path="/legal/mentions" element={<MentionsLegales />} />
          <Route path="/legal/confidentialite" element={<Confidentialite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
