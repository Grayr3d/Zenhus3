import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';

export function Process() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 'walkthrough',
      title: 'House walkthrough video',
      description: 'Take a virtual tour of our finished houses',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2187'
    },
    {
      id: 'production',
      title: 'Production facility tour',
      description: 'See how we manufacture your future home',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80&w=2190'
    },
    {
      id: 'assembly',
      title: 'Assembly process',
      description: 'Watch how we assemble our houses on site',
      image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=2189'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsPlaying(false);
  };

  const steps = [
    {
      step: '01',
      title: '10% Reservation',
      description: 'Preparing architecture drawings for building permit'
    },
    {
      step: '02',
      title: '40% Payment',
      description: 'Signing contract & start production'
    },
    {
      step: '03',
      title: '40% Payment',
      description: 'Confirming shipping ordering transport'
    },
    {
      step: '04',
      title: '10% Final payment',
      description: 'Releasing shipment'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mt-8 mx-8">
        <div className="h-full rounded-2xl overflow-hidden relative group">
          <img 
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity" />
          
          {!isPlaying && (
            <button 
              onClick={() => setIsPlaying(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110 shadow-xl"
            >
              <Play className="w-10 h-10 ml-1" />
            </button>
          )}
        </div>

        <div className="absolute bottom-12 left-12 max-w-xl">
          <h1 className="text-4xl font-medium text-white mb-3">{slides[activeSlide].title}</h1>
          <p className="text-xl text-white/90">{slides[activeSlide].description}</p>
        </div>

        <div className="absolute bottom-12 right-12 flex items-center space-x-6">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveSlide(index);
                  setIsPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
          <div className="flex space-x-3">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white/10 backdrop-blur-sm text-white rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <div className="py-32">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-medium mb-8">Quality Assurance</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our commitment to quality is reflected in every aspect of our prefabricated homes. 
                We use premium materials and employ rigorous quality control measures throughout 
                the manufacturing process. Each component undergoes thorough inspection to ensure 
                it meets our exacting standards before assembly.
              </p>
              <div className="mt-12">
                <a href="#" className="inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors group">
                  Learn about our materials
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=2189"
                alt="Quality inspection"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Production Section */}
      <div className="py-32 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80&w=2190"
                alt="Production facility"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <h2 className="text-5xl font-medium mb-12">Production Process</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-16">
                Our state-of-the-art production facility combines advanced manufacturing 
                technology with traditional craftsmanship. Each house is built in controlled 
                conditions, ensuring consistent quality and efficient assembly.
              </p>
              <div className="space-y-12">
                {steps.map((step) => (
                  <div key={step.step} className="group cursor-default">
                    <div className="text-4xl font-medium mb-4 text-gray-300 group-hover:text-black transition-colors duration-300">
                      {step.step}
                    </div>
                    <div className="text-xl font-medium mb-2">{step.title}</div>
                    <div className="text-gray-600 text-lg">{step.description}</div>
                  </div>
                ))}
                <p className="text-sm text-gray-500 mt-8 border-t pt-8">
                  Note: Production will take 6-9 weeks to complete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}