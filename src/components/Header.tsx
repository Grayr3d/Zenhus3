import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageSquare, Phone } from 'lucide-react';
import { products } from '../data/products';

export function Header() {
  const [isModelsOpen, setIsModelsOpen] = useState(false);

  return (
    <header className="py-6 px-6 border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-3xl font-medium tracking-wider">
          ZENHUS
        </Link>
        <div className="flex items-center space-x-12">
          <nav className="flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-base hover:text-gray-600 transition-colors"
                onClick={() => setIsModelsOpen(!isModelsOpen)}
                onMouseEnter={() => setIsModelsOpen(true)}
              >
                <span>Models</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isModelsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[900px] -translate-x-1/4 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                  onMouseLeave={() => setIsModelsOpen(false)}
                >
                  <div className="p-6 bg-gray-50 border-b border-gray-100">
                    <Link 
                      to="/models" 
                      className="text-lg font-medium hover:text-gray-600 transition-colors"
                      onClick={() => setIsModelsOpen(false)}
                    >
                      View All Models
                    </Link>
                  </div>
                  <div className="flex space-x-6 p-6">
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="flex-1 group"
                        onClick={() => setIsModelsOpen(false)}
                      >
                        <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <div className="text-xl font-medium mb-2">{product.name}</div>
                          <div className="text-base text-gray-500 mb-1">From {product.startingPrice.toLocaleString()}€</div>
                          <div className="text-base text-gray-500">{product.size}m²</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link to="/process" className="text-base hover:text-gray-600 transition-colors">Process</Link>
            <Link to="/quality" className="text-base hover:text-gray-600 transition-colors">Quality</Link>
            <Link to="/about" className="text-base hover:text-gray-600 transition-colors">About</Link>
            <Link 
              to="/assistant"
              className="flex items-center space-x-3 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors"
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <Phone className="w-4 h-4" />
              </div>
              <span>Assistant</span>
            </Link>
          </nav>
          <div>
            <select className="text-base bg-transparent border-none focus:ring-0">
              <option>EN</option>
              <option>DE</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}