import { FooterBlock } from "../BhoomiLandingPage/sections/FooterBlock";
import Navbar from "../BhoomiLandingPage/sections/Navbar/Navbar";
import React, { useState, useRef } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const EventsPage = () => {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Refs for scrollable containers
  const hackathonsRef = useRef(null);
  const networkEventsRef = useRef(null);
  
  // Mock data for carousel
  const carouselItems = [
    { id: 1, image: '/api/placeholder/1200/300', alt: "Mother's Day Carnival" },
    { id: 2, image: '/api/placeholder/1200/300', alt: "Tech Conference" },
    { id: 3, image: '/api/placeholder/1200/300', alt: "Music Festival" },
  ];
  
  // Mock data for the events
  const hackathonEvents = [
    { id: 1, title: 'Byte Battle', image: '/api/placeholder/250/350' },
    { id: 2, title: 'Byte Battle', image: '/api/placeholder/250/350' },
    { id: 3, title: 'Byte Battle', image: '/api/placeholder/250/350' },
    { id: 4, title: 'Byte Battle', image: '/api/placeholder/250/350' },
    { id: 5, title: 'Byte Battle', image: '/api/placeholder/250/350' },
    { id: 6, title: 'Byte Battle', image: '/api/placeholder/250/350' }
  ];
  
  const networkEvents = [
    { id: 1, title: 'Hackathon Devfolio', image: '/api/placeholder/250/350' },
    { id: 2, title: 'Hackathon Devfolio', image: '/api/placeholder/250/350' },
    { id: 3, title: 'Hackathon Devfolio', image: '/api/placeholder/250/350' },
    { id: 4, title: 'Hackathon Devfolio', image: '/api/placeholder/250/350' },
    { id: 5, title: 'Hackathon Devfolio', image: '/api/placeholder/250/350' },
    { id: 6, title: 'Hackathon Devfolio', image: '/api/placeholder/250/350' }
  ];
  
  const eventCategories = [
    { id: 1, title: 'COMEDY SHOWS', count: '160+ Events', color: 'bg-purple-500', image: '/api/placeholder/200/200' },
    { id: 2, title: 'THEATRE SHOWS', count: '170+ Events', color: 'bg-blue-500', image: '/api/placeholder/200/200' },
    { id: 3, title: 'WORKSHOPS & MORE', count: '320+ Events', color: 'bg-red-400', image: '/api/placeholder/200/200' },
    { id: 4, title: 'UPSKILL & TRAINING', count: '50+ Events', color: 'bg-orange-400', image: '/api/placeholder/200/200' }
  ];

  // Carousel navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };
  
  // Scroll functions for event cards
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Navbar placeholder - will be provided externally */}
      <Navbar/>
      
      {/* Host Event Button */}
      <div className="absolute top-6 right-4 z-10 mt-12">
        <button className="bg-green-100 text-green-800 font-medium rounded-lg px-4 py-2 flex items-center border border-green-200">
          Host Event
          <span className="ml-2 border border-green-300 p-1 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </span>
        </button>
      </div>
      
      {/* Hero Carousel */}
      <div className="relative w-full h-64 overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {carouselItems.map((item) => (
            <div key={item.id} className="min-w-full">
              <img src={item.image} alt={item.alt} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
        
        {/* Carousel Navigation */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-1"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 rounded-full p-1"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-white' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Curved separator */}
      <div className="relative">
        <svg viewBox="0 0 1440 100" className="w-full">
          <path 
            d="M0,0 C240,95 480,125 720,95 C960,65 1200,95 1440,0 L1440,100 L0,100 Z" 
            fill="white"
          />
        </svg>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4">
        {/* Recommended Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold">Recommended</h2>
            <button className="text-sm text-gray-600 flex items-center">
              See more <ChevronRight size={16} />
            </button>
          </div>
        </div>
        
        {/* Hackathons Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Hackathons</h2>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => scrollLeft(hackathonsRef)} 
                className="p-1 rounded-full bg-gray-100"
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button className="text-sm text-gray-600 flex items-center">
                See more <ChevronRight size={16} />
              </button>
              <button 
                onClick={() => scrollRight(hackathonsRef)} 
                className="p-1 rounded-full bg-gray-100"
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div 
            ref={hackathonsRef}
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {hackathonEvents.map(event => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-64 transition-transform duration-300 hover:scale-105"
              >
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex justify-end mt-2">
                    <button className="text-sm text-gray-600 flex items-center">
                      See details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Network Events Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Network Events</h2>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => scrollLeft(networkEventsRef)} 
                className="p-1 rounded-full bg-gray-100"
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button className="text-sm text-gray-600 flex items-center">
                See more <ChevronRight size={16} />
              </button>
              <button 
                onClick={() => scrollRight(networkEventsRef)} 
                className="p-1 rounded-full bg-gray-100"
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          
          <div 
            ref={networkEventsRef}
            className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          >
            {networkEvents.map(event => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 w-64 transition-transform duration-300 hover:scale-105"
              >
                <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex justify-end mt-2">
                    <button className="text-sm text-gray-600 flex items-center">
                      See details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* The best of live events */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-6">The best of live events</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {eventCategories.map(category => (
              <div 
                key={category.id} 
                className="rounded-lg overflow-hidden relative h-48 transition-transform duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 ${category.color} opacity-80`}></div>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover mix-blend-overlay" 
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl font-bold text-center mb-1">{category.title}</h3>
                  <p className="text-sm">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer placeholder - will be provided externally */}
      <FooterBlock/>
    </div>
  );
};

export default EventsPage;