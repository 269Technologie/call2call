import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: number;
  calls: number;
  languages: number;
  popular?: boolean;
}

export const PricingCard = ({ name, price, calls, languages, popular }: PricingCardProps) => {
  return (
    <div className={`card relative hover-lift ${popular ? "border-brand/50 ring-2 ring-brand/20" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="badge-brand shadow-md">Le plus populaire</span>
        </div>
      )}
      
      <div className="mb-6 pt-2">
        <h3 className="text-2xl font-bold text-foreground mb-3">{name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold text-primary">{price}€</span>
          <span className="text-muted-foreground">/mois HT</span>
        </div>
      </div>

      <div className="mb-6 space-y-2">
        <div className="chip">
          <span className="font-semibold text-foreground">{calls}</span>
          <span className="text-muted-foreground">
            appel{calls > 1 ? "s" : ""} simultané{calls > 1 ? "s" : ""}
          </span>
        </div>
        <div className="chip">
          <span className="font-semibold text-foreground">{languages}</span>
          <span className="text-muted-foreground">
            langue{languages > 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <ul className="mb-6 space-y-3 py-4 border-t border-border">
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
            <Check className="h-3 w-3 text-brand" />
          </div>
          <span className="text-sm text-foreground">Essai gratuit 14 jours</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
            <Check className="h-3 w-3 text-brand" />
          </div>
          <span className="text-sm text-foreground">Support par ticket</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
            <Check className="h-3 w-3 text-brand" />
          </div>
          <span className="text-sm text-foreground">Montée en charge simple</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center mt-0.5">
            <Check className="h-3 w-3 text-brand" />
          </div>
          <span className="text-sm text-foreground">Annulation en 1 clic</span>
        </li>
      </ul>

      <Link
        to="/ecommerce"
        className={`block text-center ${popular ? "btn-primary w-full" : "btn-outline w-full"}`}
      >
        Choisir {name}
      </Link>
    </div>
  );
};