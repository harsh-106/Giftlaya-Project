import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const banners = [
    {
      id: 1,
      title: "Book a Magical Candlelight Dinner Tonight",
      subtitle: "Romantic setups starting ₹1499 | Available in 100+ cities",
      buttonText: "BOOK NOW",
      btnClass: "bg-[#E91E63] hover:bg-[#C2185B]",
      image: "https://images.unsplash.com/photo-1516131367224-ca87274094a9?q=80&w=800",
      theme: "dark",
      hasLeftArrow: true
    },
    {
      id: 2,
      title: "There's Still Time for Christmas Gift Delivery",
      subtitle: "Send warm wishes, surprises & festive joy today",
      buttonText: "BOOK NOW",
      btnClass: "bg-[#D81B60] hover:bg-[#AD1457]",
      image: "https://images.unsplash.com/photo-1543258103-a62bdc069871?q=80&w=800",
      theme: "dark",
      isCenter: true
    },
    {
      id: 3,
      title: "Fresh Christmas Cakes, Delivered Today",
      subtitle: "Celebrate the season with freshly baked Christmas treats",
      buttonText: "BOOK NOW",
      btnClass: "bg-black hover:bg-gray-800",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
      theme: "light",
      hasRightArrow: true
    },
    {
      id: 4,
      title: "New Year's Eve Party Planning",
      subtitle: "Complete celebrations starting at ₹2999 per person",
      buttonText: "BOOK NOW",
      btnClass: "bg-[#9C27B0] hover:bg-[#7B1FA2]",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
      theme: "dark"
    },
    {
      id: 5,
      title: "Weekend Getaway Packages",
      subtitle: "Exclusive hotel stays with 40% discount",
      buttonText: "BOOK NOW",
      btnClass: "bg-[#2196F3] hover:bg-[#1976D2]",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800",
      theme: "light"
    },
    {
      id: 6,
      title: "Personalized Gift Hampers",
      subtitle: "Curated gifts for every occasion | Free delivery",
      buttonText: "BOOK NOW",
      btnClass: "bg-[#4CAF50] hover:bg-[#388E3C]",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800",
      theme: "light"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const getVisibleBanners = () => {
    const itemsToShow = isMobile ? 1 : isTablet ? 2 : 3;
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      visible.push(banners[(currentIndex + i) % banners.length]);
    }
    return visible;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

   
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]); 

  const visibleBanners = getVisibleBanners();

  return (
    <div className="w-full bg-white py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="relative">
          
          {(isMobile || isTablet) && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm cursor-pointer transition-all z-20"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm cursor-pointer transition-all z-20"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Container for the Layout */}
          <div className={`flex ${isMobile ? 'justify-center' : isTablet ? 'justify-center gap-4' : 'flex-row items-center justify-between gap-4'}`}>
            {visibleBanners.map((banner, index) => (
              <div
                key={`${banner.id}-${index}`}
                className={`relative ${isMobile ? 'w-full' : 'flex-1'} md:h-[320px] lg:h-[300px] rounded-[2.5rem] overflow-hidden shadow-sm group transition-all duration-300
                  ${!isMobile && !isTablet && index === 1 ? 'md:flex-[1.2]' : 'md:flex-1'} 
                  ${isMobile || isTablet ? 'mb-4 last:mb-0' : ''}`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${banner.image})` }}
                />

                <div className={`absolute inset-0 ${banner.theme === 'dark' ? 'bg-black/30' : 'bg-black/5'}`} />

                <div className="relative h-full flex flex-col justify-center px-8 md:px-10 py-10">
                  <h2 className={`text-xl md:text-2xl lg:text-xl font-bold mb-3 leading-tight max-w-[280px]
                    ${banner.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {banner.title.includes('Candlelight Dinner') ? (
                      <>Book a Magical <span className="text-[#E91E63]">Candlelight Dinner</span> Tonight</>
                    ) : banner.title}
                  </h2>
                  
                  <p className={`text-xs md:text-sm mb-6 font-medium max-w-[240px] leading-relaxed opacity-90
                    ${banner.theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    {banner.subtitle}
                  </p>

                  <button className={`${banner.btnClass} text-white text-[10px] md:text-xs font-light px-4 py-2 rounded-md w-fit transition-transform active:scale-95 shadow-lg`}>
                    {banner.buttonText}
                  </button>
                </div>

                {/* Mobile & Tablet Pagination Dots INSIDE image */}
{(isMobile || isTablet) && index === 0 && (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
    {banners.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentIndex(idx)}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          idx === currentIndex
            ? 'w-6 bg-red-800'
            : 'w-1.5 bg-white/50'
        }`}
      />
    ))}
  </div>
)}
                {!isMobile && !isTablet && index === 0 && (
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full backdrop-blur-sm cursor-pointer transition-all z-20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {!isMobile && !isTablet && index === 2 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-400/30 hover:bg-gray-400/50 text-white p-2 rounded-full backdrop-blur-sm cursor-pointer transition-all z-20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                
                {!isMobile && !isTablet && index === 1 && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    {banners.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentIndex ? 'w-6 bg-[#8B2313]' : 'w-1.5 bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;