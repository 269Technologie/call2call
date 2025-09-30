import { Link } from "react-router-dom";
import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/30 to-white section-y">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neural-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-brand" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-brand/30" />
              <line x1="50" y1="50" x2="75" y2="100" stroke="currentColor" strokeWidth="0.5" className="text-brand/30" />
              <line x1="50" y1="50" x2="25" y2="0" stroke="currentColor" strokeWidth="0.5" className="text-brand/30" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)" />
        </svg>
      </div>

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="animate-fade-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-50 px-4 py-2">
              <Phone className="h-4 w-4 text-brand" />
              <span className="text-sm font-medium text-brand">IA téléphonique</span>
            </div>
            
            <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Réceptionniste IA{" "}
              <span className="bg-gradient-to-r from-brand to-brand-400 bg-clip-text text-transparent">
                24/7
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground">
              Répond aux appels, prend les rendez-vous et suit vos dossiers automatiquement.
            </p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link to="/ecommerce" className="btn-primary">
                Démarrer l'essai
              </Link>
              <Link to="/portail" className="btn-outline">
                Voir le portail
              </Link>
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">Entreprises</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-xs text-muted-foreground">Appels</div>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div>
                <div className="text-2xl font-bold text-primary">99.5%</div>
                <div className="text-xs text-muted-foreground">SLA</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img 
                src={heroPhone} 
                alt="Interface Call2Call avec IA conversationnelle" 
                className="w-full"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -right-4 top-10 animate-slide-in rounded-xl border border-border bg-white p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Appel traité</div>
                  <div className="text-xs text-muted-foreground">RDV automatique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
