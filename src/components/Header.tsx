import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import logo from "@/assets/logo-call2call.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-lg">
      <nav className="container-px">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover-lift">
            <img src={logo} alt="Call2Call" className="h-10 w-auto" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/fonctionnalites"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isActive("/fonctionnalites") ? "text-blue-500" : "text-foreground"
              }`}
            >
              Fonctionnalités
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isActive("/pricing") ? "text-blue-500" : "text-foreground"
              }`}
            >
              Tarifs
            </Link>
            <Link
              to="/qui-sommes-nous"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isActive("/qui-sommes-nous") ? "text-blue-500" : "text-foreground"
              }`}
            >
              Qui sommes-nous
            </Link>
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-blue-500">
                Ressources
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 hidden w-48 rounded-xl border border-border bg-white py-2 shadow-lg group-hover:block">
                <Link
                  to="/comment-ca-marche"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-blue-500"
                >
                  Comment ça marche
                </Link>
                <Link
                  to="/support"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-blue-500"
                >
                  Support
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-blue-500 flex items-center gap-2"
                >
                  Blog
                  <span className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">Nouveau</span>
                </Link>
                <Link
                  to="/securite-rgpd"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-blue-50 hover:text-blue-500"
                >
                  Sécurité & RGPD
                </Link>
              </div>
            </div>
            <Link
              to="/portail"
              className={`text-sm font-medium transition-colors hover:text-blue-500 ${
                isActive("/portail") ? "text-blue-500" : "text-foreground"
              }`}
            >
              Portail
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Link to="/ecommerce" className="btn-outline">
              Se connecter
            </Link>
            <Link to="/ecommerce" className="btn-primary bg-red-500 hover:bg-red-600 border-red-500">
              Démarrer l'essai
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                to="/fonctionnalites"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                to="/pricing"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tarifs
              </Link>
              <Link
                to="/qui-sommes-nous"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Qui sommes-nous
              </Link>
              <Link
                to="/comment-ca-marche"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link
                to="/support"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Support
              </Link>
              <Link
                to="/blog"
                className="text-sm font-medium flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
                <span className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">Nouveau</span>
              </Link>
              <Link
                to="/securite-rgpd"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sécurité & RGPD
              </Link>
              <Link
                to="/portail"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Portail
              </Link>
              <div className="flex flex-col gap-2 pt-4">
                <Link to="/ecommerce" className="btn-outline w-full">
                  Se connecter
                </Link>
                <Link to="/ecommerce" className="btn-primary w-full bg-red-500 hover:bg-red-600 border-red-500">
                  Démarrer l'essai
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};