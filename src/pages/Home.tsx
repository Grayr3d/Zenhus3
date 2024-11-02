import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Newsletter } from '../components/Newsletter';
import { Grid, LayoutGrid } from 'lucide-react';

export function Home() {
  const [activeSize, setActiveSize] = useState(20);
  const [isGrid, setIsGrid] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mb-24">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2670"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Modern Living Spaces</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our collection of premium prefabricated homes designed for contemporary lifestyles
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6">
        {/* Filters */}
        <div className="flex items-center space-x-4 mb-16">
          <div className="flex bg-gray-100 rounded-full p-1">
            {[20, 40, 60, 80, 120].map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                  size === activeSize 
                    ? 'bg-black text-white shadow-lg' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {size}m²
              </button>
            ))}
          </div>
          <div className="ml-auto flex space-x-2 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsGrid(true)}
              className={`p-2 rounded-full ${isGrid ? 'bg-black text-white' : 'text-gray-500'}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsGrid(false)}
              className={`p-2 rounded-full ${!isGrid ? 'bg-black text-white' : 'text-gray-500'}`}
            >
              <LayoutGrid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid ${isGrid ? 'grid-cols-2' : 'grid-cols-1'} gap-16 mb-24`}>
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="group"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-medium">
                      {product.startingPrice.toLocaleString()} €
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.size}m²
                    </span>
                  </div>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black text-white px-6 py-3 rounded-full font-medium">
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Features Section */}
        <div className="py-24 mb-24">
          <div className="grid grid-cols-3 gap-12">
            {[
              {
                title: 'Premium Materials',
                description: 'Built with eco-friendly and durable materials for a better future and EMF protection for bedrooms'
              },
              {
                title: 'Quick Assembly',
                description: 'Professional installation in just 6-8 weeks from order to completion'
              },
              {
                title: 'Smart Design',
                description: 'Optimized living spaces with modern amenities and efficient layouts'
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl space-y-4">
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}