import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, link }: FeatureCardProps) => {
  const CardContent = () => (
    <>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
        <Icon className="h-7 w-7 text-blue-500" />
      </div>
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="mb-4 text-muted-foreground">{description}</p>
      {link && (
        <div className="flex items-center gap-2 text-sm font-medium text-blue-500">
          En savoir plus
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <Link to={link} className="card group hover-lift">
        <CardContent />
      </Link>
    );
  }

  return (
    <div className="card">
      <CardContent />
    </div>
  );
};