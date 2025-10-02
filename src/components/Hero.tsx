import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import botImg from "@/assets/bot.png";
import helpImg from "@/assets/help.png";
import talkImg from "@/assets/talk.png";
import affairesImg from "@/assets/affaires.png";
import clientImg from "@/assets/client.png";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const statsData = [
    { value: 500, label: "Entreprises", suffix: "+" },
    { value: 50000, label: "Appels", suffix: "+" },
    { value: 99.5, label: "Satisfaction", suffix: "%" }
  ];

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
      badge: false,
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
      badge: false,
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

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

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
      className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-red-50/30 min-h-screen flex items-center justify-center"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background avec motif rouge subtil */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="red-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="#dc2626" />
              <circle cx="20" cy="20" r="1" fill="#dc2626" />
              <circle cx="80" cy="80" r="1" fill="#dc2626" />
              <line x1="50" y1="50" x2="100" y2="50" stroke="#dc2626" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="80" y2="100" stroke="#dc2626" strokeWidth="0.5" opacity="0.3" />
              <line x1="50" y1="50" x2="20" y2="0" stroke="#dc2626" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#red-grid)" />
        </svg>
      </div>

      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-red-300/10 rounded-full blur-2xl"></div>

      <div className="container-px relative w-full max-w-7xl mx-auto">
        <div className="relative">
          {/* Contenu principal compact */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className={`flex ${!isDragging && isTransitioning ? 'transition-transform duration-500 ease-out' : ''}`}
              style={{ 
                transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`,
                cursor: isDragging ? 'grabbing' : 'grab'
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="grid items-center gap-6 lg:gap-8 xl:gap-12 lg:grid-cols-2">
                    {/* Content Column */}
                    <div className="space-y-4 lg:space-y-6 order-1 lg:order-1">
                      {/* Titre et sous-titre */}
                      <div className="space-y-4">
                        <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl xl:text-6xl">
                          {slide.title}
                        </h1>
                        
                        {slide.subtitle && (
                          <p className="text-lg text-gray-600 lg:text-xl xl:text-2xl leading-relaxed">
                            {slide.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Image - Mobile */}
                      <div className="lg:hidden relative flex justify-center my-4">
                        <div className="max-w-xs w-full">
                          <img 
                            src={slide.image} 
                            alt={slide.title} 
                            className="w-full h-auto max-h-56 object-contain select-none pointer-events-none"
                            draggable="false"
                          />
                        </div>
                        
                        {slide.badge && (
                          <div className="absolute -right-2 top-4 rounded-xl border border-red-200 bg-white/90 backdrop-blur-sm p-3 shadow-lg">
                            <div className="flex items-center gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                <CheckCircle2 className="h-4 w-4 text-red-600" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">Appel traité</div>
                                <div className="text-xs text-gray-500">RDV automatique</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Link 
                          to={slide.ctaLink} 
                          className="btn-primary bg-red-600 hover:bg-red-700 border-red-600 text-white transform transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-center py-3 px-6 rounded-lg font-semibold"
                        >
                          {slide.cta}
                        </Link>
                        
                      </div>
                    </div>

                    {/* Image - Desktop */}
                    <div className="hidden lg:flex relative justify-center items-center order-2 lg:order-4">
                      <div className="max-w-md xl:max-w-lg w-full relative">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="w-full h-auto max-h-72 xl:max-h-80 object-contain select-none pointer-events-none"
                          draggable="false"
                        />
                        
                        {slide.badge && (
                          <div className="absolute -right-4 xl:-right-6 top-8 rounded-xl border border-red-200 bg-white/90 backdrop-blur-sm p-4 shadow-xl">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                                <CheckCircle2 className="h-5 w-5 text-red-600" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-gray-900">Appel traité</div>
                                <div className="text-xs text-gray-500">RDV automatique</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section FIXE - Ne change pas entre les slides */}
          <div className="flex items-center justify-between gap-2 pt-6 border-t border-red-200/50 mt-6">
            {statsData.map((stat, index) => (
              <div key={stat.label} className="text-center flex-1">
                <div className="text-xl md:text-2xl font-bold text-red-600 mb-1">
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation et indicateurs - Positionnés en bas */}
          <div className="flex items-center justify-between mt-6 lg:mt-8 px-2">
            {/* Indicateur de slide actuel */}
            <div className="text-sm text-gray-500 min-w-[60px]">
              <span className="font-medium">{getActiveDotIndex() + 1}</span>
              <span className="mx-1">/</span>
              <span>{slidesData.length}</span>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-1 lg:gap-2">
              {slidesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 w-6 lg:h-2 lg:w-8 rounded-full transition-all duration-300 ${
                    index === getActiveDotIndex() 
                      ? "bg-red-600 scale-110" 
                      : "bg-red-200 hover:bg-red-300"
                  }`}
                />
              ))}
            </div>

            {/* Contrôles de navigation - Icônes plus petites */}
            <div className="flex items-center gap-1 min-w-[100px] justify-end">
              <button
                onClick={toggleAutoPlay}
                className="p-1.5 rounded-full border border-red-200 bg-white hover:bg-red-50 transition-all shadow-sm hover:shadow-md"
              >
                {isAutoPlaying ? (
                  <Pause className="h-3 w-3 text-red-600" />
                ) : (
                  <Play className="h-3 w-3 text-red-600" />
                )}
              </button>
              
              <button
                onClick={prevSlide}
                className="p-1.5 rounded-full border border-red-200 bg-white hover:bg-red-50 transition-all shadow-sm hover:shadow-md"
              >
                <ChevronLeft className="h-3 w-3 text-red-600" />
              </button>

              <button
                onClick={nextSlide}
                className="p-1.5 rounded-full border border-red-200 bg-white hover:bg-red-50 transition-all shadow-sm hover:shadow-md"
              >
                <ChevronRight className="h-3 w-3 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; 
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration / frameRate);
  const increment = value / totalFrames;
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current) {
      let currentCount = 0;
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        currentCount += increment;
        
        if (frame >= totalFrames) {
          setCount(value);
          clearInterval(counter);
          hasAnimated.current = true;
        } else {
          setCount(Math.floor(currentCount));
        }
      }, frameRate);

      return () => clearInterval(counter);
    } else {
      setCount(value);
    }
  }, [value, increment, totalFrames, frameRate]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    if (num % 1 !== 0) {
      return `${num.toFixed(1)}`;
    }
    return `${num}`;
  };

  return <span>{formatNumber(count)}</span>;
};