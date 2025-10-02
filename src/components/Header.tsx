import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-call2call.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur-lg">
      <nav className="container-px">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover-lift">
            <img src={logo} alt="Call2Call" className="h-10 w-auto" />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              to="/qui-sommes-nous"
              className={`text-sm font-medium transition-colors hover:text-red-500 ${isActive("/qui-sommes-nous") ? "text-red-500" : "text-foreground"
                }`}
            >
              Qui sommes-nous
            </Link>
            <Link
              to="/pricing"
              className={`text-sm font-medium transition-colors hover:text-red-500 ${isActive("/pricing") ? "text-red-500" : "text-foreground"
                }`}
            >
              Tarifs & Nos services
            </Link>
            <div
              className="group relative"
              onMouseEnter={() => handleMouseEnter("ressources")}
              onMouseLeave={handleMouseLeave}
              ref={dropdownRef}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-red-500">
                Ressources
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-56 rounded-xl border border-border bg-white py-2 shadow-lg transition-all duration-200 ${openDropdown === "ressources" ? "block opacity-100" : "hidden opacity-0"
                }`}>
                <Link
                  to="/fonctionnalites"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  Fonctionnalités
                </Link>
                <Link
                  to="/comment-ca-marche"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  Comment ça marche
                </Link>
                <Link
                  to="/langues"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  Langues
                </Link>
                <Link
                  to="/faq"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  FAQ
                </Link>
                <Link
                  to="/support"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  Support
                </Link>
                <Link
                  to="/blog"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500 flex items-center gap-2"
                >
                  Blog
                  <span className="px-1.5 py-0.5 text-xs bg-red-500 text-white rounded-full">Nouveau</span>
                </Link>
                <Link
                  to="/securite-rgpd"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  Sécurité & RGPD
                </Link>
                <div className="border-t border-border my-1"></div>
                <Link
                  to="/portail"
                  className="block px-4 py-2 text-sm transition-colors hover:bg-red-50 hover:text-red-500 font-medium"
                >
                  Espace client
                </Link>
              </div>
            </div>
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
                to="/pricing"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Tarifs & Nos services
              </Link>
              <Link
                to="/qui-sommes-nous"
                className="text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Qui sommes-nous
              </Link>

              <div className="border-t border-border pt-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Ressources</div>
                <div className="flex flex-col gap-3 pl-4">
                  <Link
                    to="/fonctionnalites"
                    className="text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Fonctionnalités
                  </Link>
                  <Link
                    to="/comment-ca-marche"
                    className="text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Comment ça marche
                  </Link>
                  <Link
                    to="/langues"
                    className="text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Langues
                  </Link>
                  <Link
                    to="/faq"
                    className="text-sm font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    FAQ
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
                </div>
              </div>

              <Link
                to="/portail"
                className="text-sm font-medium border-t border-border pt-4"
                onClick={() => setIsOpen(false)}
              >
                Espace client
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