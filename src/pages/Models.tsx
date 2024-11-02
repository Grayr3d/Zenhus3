import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, LayoutGrid } from 'lucide-react';
import { products } from '../data/products';
import { Newsletter } from '../components/Newsletter';

export function Models() {
  const [activeSize, setActiveSize] = useState(20);
  const [isGrid, setIsGrid] = useState(true);

  const filteredProducts = products.filter(product => product.size === activeSize);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[85vh] mb-24">
        <img 
          src="https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&q=80&w=2670"
          alt="Models Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold mb-6">Our Models</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our collection of thoughtfully designed prefabricated homes
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
          {filteredProducts.map((product) => (
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
        <div className="grid grid-cols-3 gap-12 py-24 border-t">
          {[
            {
              title: 'Sustainable Materials',
              description: 'Built with eco-friendly and durable materials for a better future'
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
            <div key={index} className="text-center">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </div>
  );
}