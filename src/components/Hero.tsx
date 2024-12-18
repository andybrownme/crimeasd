import React from 'react';
import { Shield, Lock, UserCheck } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Protecting What Matters Most
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced security solutions for businesses and individuals. Stay protected in an increasingly digital world.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition text-lg">
              Get Protected
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition text-lg">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Advanced Protection',
              description: 'State-of-the-art security systems to keep you safe',
            },
            {
              icon: Lock,
              title: 'Secure Access',
              description: 'Control who has access to your property and data',
            },
            {
              icon: UserCheck,
              title: 'Expert Support',
              description: '24/7 professional monitoring and assistance',
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}