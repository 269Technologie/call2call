import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from '@/components/SEO';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Page non trouvée - Call2Call" />
      <Header />
      <main className="section-y">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8 inline-flex h-32 w-32 items-center justify-center rounded-full bg-brand-50">
              <Search className="h-16 w-16 text-brand" />
            </div>
            
            <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
            <h2 className="mb-4 text-3xl font-bold">Page introuvable</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/" className="btn-primary">
                <Home className="h-5 w-5" />
                Retour à l'accueil
              </Link>
              <button onClick={() => window.history.back()} className="btn-outline">
                <ArrowLeft className="h-5 w-5" />
                Page précédente
              </button>
            </div>

            <div className="mt-12 rounded-xl border border-border bg-surface p-6">
              <h3 className="mb-4 font-semibold">Pages populaires</h3>
              <div className="grid gap-3 text-left sm:grid-cols-2">
                <Link to="/fonctionnalites" className="rounded-lg border border-border bg-white p-3 transition-colors hover:bg-surface">
                  <span className="text-sm font-medium">Fonctionnalités</span>
                </Link>
                <Link to="/pricing" className="rounded-lg border border-border bg-white p-3 transition-colors hover:bg-surface">
                  <span className="text-sm font-medium">Tarifs</span>
                </Link>
                <Link to="/comment-ca-marche" className="rounded-lg border border-border bg-white p-3 transition-colors hover:bg-surface">
                  <span className="text-sm font-medium">Comment ça marche</span>
                </Link>
                <Link to="/support" className="rounded-lg border border-border bg-white p-3 transition-colors hover:bg-surface">
                  <span className="text-sm font-medium">Support</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;