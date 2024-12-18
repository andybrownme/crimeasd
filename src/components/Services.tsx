import React from 'react';
import { Shield, Camera, Bell, Lock, UserCheck, Wifi } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Camera,
      title: 'Video Surveillance',
      description: 'HD cameras with night vision and motion detection',
    },
    {
      icon: Bell,
      title: 'Alarm Systems',
      description: 'Professional monitoring and instant notifications',
    },
    {
      icon: Lock,
      title: 'Access Control',
      description: 'Smart locks and biometric security solutions',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced protection against digital threats',
    },
    {
      icon: Wifi,
      title: 'Smart Integration',
      description: 'Seamless connection with your smart home devices',
    },
    {
      icon: UserCheck,
      title: 'Consultation',
      description: 'Expert security assessment and planning',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive security solutions tailored to your needs
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}