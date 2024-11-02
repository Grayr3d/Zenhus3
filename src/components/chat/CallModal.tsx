import React from 'react';
import { X, Phone } from 'lucide-react';

interface CallModalProps {
  onClose: () => void;
}

export function CallModal({ onClose }: CallModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Start Voice Call</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600">
            Connect instantly with our AI assistant for a voice conversation about our houses.
          </p>
          <button className="w-full flex items-center justify-center space-x-2 bg-black text-white py-4 rounded-lg hover:bg-gray-900 transition-colors">
            <Phone className="w-5 h-5" />
            <span>Start Call</span>
          </button>
        </div>
      </div>
    </div>
  );
}