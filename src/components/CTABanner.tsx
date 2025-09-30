import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  description: string;
  primaryText: string;
  primaryLink: string;
  secondaryText?: string;
  secondaryLink?: string;
}

export const CTABanner = ({
  title,
  description,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
}: CTABannerProps) => {
  return (
    <section className="section-y bg-gradient-to-br from-brand to-brand-600">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="mb-8 text-lg text-brand-50">
            {description}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to={primaryLink} className="btn bg-white text-brand shadow-lg hover:shadow-xl">
              {primaryText}
              <ArrowRight className="h-5 w-5" />
            </Link>
            {secondaryText && secondaryLink && (
              <Link to={secondaryLink} className="btn border-2 border-white bg-transparent text-white hover:bg-white/10">
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
