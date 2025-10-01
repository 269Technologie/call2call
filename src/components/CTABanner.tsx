import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  primaryText: string;
  primaryLink: string;
  secondaryText?: string;
  secondaryLink?: string;
  variant?: "blue" | "red";
}

export const CTABanner = ({
  title,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
  variant = "blue",
}: CTABannerProps) => {
  const isRed = variant === "red";
  
  return (
    <section className={`section-y bg-gradient-to-br ${isRed ? 'from-red-500 to-red-600' : 'from-blue-500 to-blue-600'}`}>
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-lg text-white/90">
            {description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link 
              to={primaryLink} 
              className={`btn bg-white shadow-lg hover:shadow-xl ${
                isRed ? 'text-red-500 hover:bg-red-50' : 'text-blue-500 hover:bg-blue-50'
              }`}
            >
              {primaryText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            {secondaryText && secondaryLink && (
              <Link 
                to={secondaryLink} 
                className="btn border-2 border-white bg-transparent text-white hover:bg-white/10"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};