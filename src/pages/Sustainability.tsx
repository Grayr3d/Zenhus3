import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Newsletter } from '../components/Newsletter';

export function Sustainability() {
  const features = [
    {
      title: 'Premium Materials',
      description: "We use only the highest quality materials, including responsibly sourced timber, premium insulation, and durable finishes. Each component is carefully selected to ensure longevity and performance.",
    },
    {
      title: 'EMF Protection',
      description: 'Your wellbeing is our priority. We incorporate specialized EMF shielding in bedroom walls using mineral-based paints and protective membranes, ensuring a natural and healthy sleep environment.',
    },
    {
      title: 'Eco-Friendly',
      description: 'Our homes feature natural, sustainable materials including wood fiber insulation, low-VOC paints, and recycled components, creating a healthy living environment while minimizing environmental impact.',
    },
    {
      title: 'Precision Engineering',
      description: 'Every component is manufactured with precision in our state-of-the-art facility, ensuring perfect fit and superior quality control throughout the production process.',
    },
  ];

  const materials = [
    {
      title: 'Premium Wood',
      description: 'High-grade timber treated with natural oils and waxes for exceptional durability and aesthetics.',
    },
    {
      title: 'Natural Finishes',
      description: 'Zero-VOC paints and treatments ensure healthy indoor air quality and beautiful surfaces.',
    },
    {
      title: 'Advanced Insulation',
      description: 'Premium wood fiber materials provide superior thermal and acoustic performance.',
    },
    {
      title: 'EMF Protection',
      description: 'Specialized shielding in bedroom walls creates a natural sleep environment by reducing electromagnetic radiation.',
    },
  ];

  const stats = [
    { value: '10+', label: 'Years warranty on structural elements' },
    { value: '100%', label: 'Quality control throughout production' },
    { value: '99%', label: 'Customer satisfaction rate' },
    { value: '1000+', label: 'Houses delivered' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mt-8 mx-8 rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80&w=2189"
          alt="Quality Craftsmanship"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center">
          <div className="max-w-[1440px] mx-auto px-6 w-full">
            <div className="max-w-2xl">
              <h1 className="text-6xl font-bold text-white mb-6">
                Uncompromising Quality
              </h1>
              <p className="text-xl text-white/90">
                Every ZENHUS home is built with meticulous attention to detail, 
                premium materials, and innovative technologies to ensure lasting 
                quality and comfort.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <h2 className="text-4xl font-medium mb-16">Quality Features</h2>
          <div className="grid grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl space-y-4">
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Materials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-medium mb-8">Premium Materials</h2>
              <div className="space-y-8">
                {materials.map((material, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-xl font-medium">{material.title}</h3>
                    <p className="text-gray-600">{material.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=2560"
                alt="Premium Materials"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="text-5xl font-bold mb-4 text-black">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Production Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-24 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&q=80&w=2190"
                alt="Quality Production"
                className="w-full h-[600px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-medium mb-8">Quality Control</h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Our state-of-the-art production facility combines advanced manufacturing 
                  technology with traditional craftsmanship. Each component undergoes 
                  rigorous quality control checks throughout the production process.
                </p>
                <p>
                  We maintain strict quality standards at every stage, from material 
                  selection to final assembly. Our comprehensive testing ensures that 
                  every home meets our exacting specifications for durability, 
                  comfort, and performance.
                </p>
              </div>
              <div className="mt-12">
                <a href="#" className="inline-flex items-center text-lg font-medium hover:text-gray-600 transition-colors group">
                  Learn about our production process
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}