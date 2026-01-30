import React, { useState, useEffect, useCallback } from "react";

const AutoCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      title: "Experience Real-Time Supply Chain Visibility",
      subtitle: "See Everything. Act Confidently.",
      cta: "Learn More",
    },
    {
      title: "Transform Your Business Operations",
      subtitle: "Powered by Advanced Analytics.",
      cta: "Get Started",
    },
    {
      title: "Seamless Integration Across Platforms",
      subtitle: "Connect. Automate. Scale.",
      cta: "Explore Solutions",
    },
    {
      title: "Data-Driven Decision Making",
      subtitle: "Insights That Drive Growth.",
      cta: "Discover More",
    },
  ];

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  }, [isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : index < currentSlide
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            {/* Content */}
            <h1 className="text-4xl md:text-6xl font-light text-white text-center max-w-5xl mb-6 transition-all duration-700 delay-100">
              {slide.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 text-center mb-10 transition-all duration-700 delay-200">
              {slide.subtitle}
            </p>
            
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium">
              {slide.cta}
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-gray-500 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default AutoCarousel;