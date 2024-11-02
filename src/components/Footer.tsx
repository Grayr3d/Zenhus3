import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="py-8 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-16">
            <Link to="/" className="text-2xl font-medium tracking-wider">
              ZENHUS
            </Link>
            <div className="flex items-center space-x-8">
              <Link 
                to="/models" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Models
              </Link>
              <Link 
                to="/process" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Process
              </Link>
              <Link 
                to="/about" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                to="/sustainability" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Sustainability
              </Link>
            </div>
          </div>

          <div className="flex space-x-3">
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="py-4 flex items-center justify-between text-sm text-gray-400">
          <div className="flex space-x-8">
            <Link 
              to="/privacy" 
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms" 
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <a 
              href="mailto:info@zenhus.com" 
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="text-gray-500">
            © {new Date().getFullYear()} ZENHUS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}