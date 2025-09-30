import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Phone, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";
import botImg from "@/assets/bot.png";
import helpImg from "@/assets/help.png";
import talkImg from "@/assets/talk.png";
import affairesImg from "@/assets/affaires.jpg";
import clientImg from "@/assets/client.jpg";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);

  const slidesData = [
    {
      title: "Débordé d'appels ?",
      subtitle: "Je prends la suite 10h/jour… et plus si tu veux 😉",
      cta: "Testez-moi gratuitement",
      ctaLink: "/ecommerce",
      badge: false,
      image: botImg
    },
    {
      title: "Votre standard intelligent",
      subtitle: "Je décroche, j'oriente, j'informe, je note… pendant que vous respirez enfin.",
      cta: "Découvrir mes formules",
      ctaLink: "/portail",
      badge: true,
      image: helpImg
    },
    {
      title: "Moins de stress, plus de clients heureux",
      subtitle: "Et vous, plus de temps… pour ce qui vous fait vibrer.",
      cta: "Testez-moi gratuitement",
      ctaLink: "/ecommerce",
      badge: false,
      image: talkImg
    },
    {
      title: "Toujours dispo, jamais jaloux, et 100% discret",
      subtitle: "Partenaire téléphonie • RGPD • Sécurité",
      cta: "Découvrir mes formules",
      ctaLink: "/portail",
      badge: true,
      image: affairesImg
    },
    {
      title: "Laissez vos appels… entre de bonnes mains",
      subtitle: "",
      cta: "Testez-moi gratuitement",
      ctaLink: "/ecommerce",
      badge: false,
      image: clientImg
    }
  ];

  const slides = [
    slidesData[slidesData.length - 1],
    ...slidesData,
    slidesData[0]
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => prev - 1);
  }, [isTransitioning]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index + 1);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentSlide === 0) {
      setCurrentSlide(slidesData.length);
    } else if (currentSlide === slides.length - 1) {
      setCurrentSlide(1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (isDragging) return;
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      if (e.deltaX > 0) {
        nextSlide();
      } else if (e.deltaX < 0) {
        prevSlide();
      }
    }
  };

  const getActiveDotIndex = () => {
    if (currentSlide === 0) return slidesData.length - 1;
    if (currentSlide === slides.length - 1) return 0;
    return currentSlide - 1;
  };

  return (
    <section 
      className="relative overflow-hidden bg-gradient-to-b from-brand-50/30 to-white section-y select-none"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
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
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className={`flex ${!isDragging && isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ 
                transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
                    <div className="space-y-6">
                      <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-50 px-4 py-2">
                        <Phone className="h-4 w-4 text-brand" />
                        <span className="text-sm font-medium text-brand">IA téléphonique</span>
                      </div>
                      
                      <div>
                        <h1 className="mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl">
                          {slide.title}
                        </h1>
                        
                        {slide.subtitle && (
                          <p className="text-lg text-muted-foreground">
                            {slide.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Link 
                          to={slide.ctaLink} 
                          className="btn-primary transform transition-transform hover:scale-105 active:scale-95"
                        >
                          {slide.cta}
                        </Link>
                      </div>

                      <div className="flex items-center gap-6">
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

                    <div className="relative">
                      <img 
                        src={slide.image} 
                        alt="Interface Call2Call avec IA conversationnelle" 
                        className="w-full select-none pointer-events-none"
                        draggable="false"
                      />
                      
                      {slide.badge && (
                        <div className="absolute -right-4 top-10 rounded-xl border border-border bg-white p-3 shadow-lg">
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
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-border hover:bg-brand-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            
            <div className="flex justify-center gap-2">
              {slidesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full transition-all duration-300 ${
                    index === getActiveDotIndex() ? "bg-brand scale-125" : "bg-border hover:bg-brand/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-border hover:bg-brand-50 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};