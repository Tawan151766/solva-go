'use client';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const people = [
    {
      name: 'Victoria Sterling',
      role: 'CEO of Prestige Enterprises',
      quote: 'SolvaGo delivered an extraordinary digital experience that perfectly embodies our luxury brand. Their attention to detail is unmatched.'
    },
    {
      name: 'Alexander Cross',
      role: 'Founder of Elite Ventures',
      quote: "The premium quality and sophisticated design exceeded our expectations. SolvaGo truly understands luxury digital craftsmanship."
    },
    {
      name: 'Isabella Blackwood',
      role: 'Director at Platinum Holdings',
      quote: 'Their white-glove service and exclusive support have elevated our digital presence to new heights of elegance and performance.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    if (typeof window !== 'undefined') {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    }
    
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', checkScreenSize);
      }
    };
  }, []);

  // Auto-rotate carousel (only on mobile)
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === people.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [people.length, isMobile]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? people.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === people.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="px-4 py-12 md:px-8 lg:px-16 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#f0c674] text-[22px] md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold pb-6 md:pb-8 lg:pb-12 text-center">
          Elite Client Testimonials
        </h2>
        
        <div className="relative">
          {/* Carousel Container */}
          <div className={`${isMobile ? 'overflow-hidden' : ''} rounded-lg`}>
            <div 
              className={`${
                isMobile 
                  ? 'flex transition-transform duration-500 ease-in-out' 
                  : 'grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8'
              }`}
              style={{ 
                transform: isMobile ? `translateX(-${currentIndex * 100}%)` : 'none'
              }}
            >
              {people.map((person, index) => (
                <div key={index} className={isMobile ? "min-w-full" : "min-w-0"}>
                  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 lg:p-8 mx-2 md:mx-0 h-full flex flex-col justify-between min-h-[200px] md:min-h-[240px] lg:min-h-[280px] hover:border-white/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#f0c674]/10">
                    <p className="text-[#f0c674] font-medium text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed flex-grow">
                      "{person.quote}"
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-[#f0c674] text-sm md:text-base lg:text-lg font-semibold">
                        {person.name}
                      </p>
                      <p className="text-[#f0c674]/70 text-xs md:text-sm lg:text-base mt-1">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Only show on mobile */}
          {isMobile && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-[#f0c674] text-[#0d1117] rounded-full flex items-center justify-center hover:bg-[#f0c674]/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-[#f0c674] text-[#0d1117] rounded-full flex items-center justify-center hover:bg-[#f0c674]/80 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots Indicator - Only show on mobile */}
          {isMobile && (
            <div className="flex justify-center space-x-3 mt-8">
              {people.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#f0c674] scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}