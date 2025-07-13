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

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === people.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [people.length]);

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
    <section className="px-4 py-10">
      <h2 className="text-[#f0c674] text-[22px] font-bold pb-3">Elite Client Testimonials</h2>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {people.map((person, index) => (
              <div key={index} className="min-w-full">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-lg p-6 mx-2">
                  <p className="text-[#f0c674] font-medium text-lg mb-4">"{person.quote}"</p>
                  <p className="text-[#f0c674] text-sm">{person.name}, {person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-[#f0c674] text-[#0d1117] rounded-full flex items-center justify-center hover:bg-[#f0c674]/80 transition-colors shadow-lg"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-[#f0c674] text-[#0d1117] rounded-full flex items-center justify-center hover:bg-[#f0c674]/80 transition-colors shadow-lg"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {people.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#f0c674]' : 'bg-white/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}