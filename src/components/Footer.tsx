import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/logo-call2call.png";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-px section-y">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 inline-block">
              <img src={logo} alt="Call2Call" className="h-10 w-auto" />
            </Link>
            <p className="mb-6 text-sm text-muted-foreground">
              Votre réceptionniste IA, 24/7, branché à votre téléphonie.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Produit */}
          <div>
            <h3 className="mb-4 font-semibold">Produit</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/fonctionnalites" className="text-muted-foreground transition-colors hover:text-primary">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground transition-colors hover:text-primary">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/comment-ca-marche" className="text-muted-foreground transition-colors hover:text-primary">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link to="/portail" className="text-muted-foreground transition-colors hover:text-primary">
                  Portail client
                </Link>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h3 className="mb-4 font-semibold">Entreprise</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/support" className="text-muted-foreground transition-colors hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/securite-rgpd" className="text-muted-foreground transition-colors hover:text-primary">
                  Sécurité & RGPD
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Juridique */}
          <div>
            <h3 className="mb-4 font-semibold">Juridique</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/legal/mentions" className="text-muted-foreground transition-colors hover:text-primary">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/legal/confidentialite" className="text-muted-foreground transition-colors hover:text-primary">
                  Confidentialité
                </Link>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  CGV
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  CGU
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© 2025 Call2Call. Tous droits réservés.</p>
            <p>
              Téléphonie & enregistrements fournis par Ringover ou partenaire équivalent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
