import React from 'react';
import { Smartphone, Cloud, Cpu, Brain, Settings, Shield } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Custom mobile and web applications built for your specific business needs.',
  },
  {
    icon: Cloud,
    title: 'IoT Solutions',
    description: 'End-to-end IoT implementation from strategy to hardware integration.',
  },
  {
    icon: Brain,
    title: 'IT Consulting',
    description: 'Expert guidance on digital transformation and technology adoption.',
  },
  {
    icon: Cpu,
    title: 'Enterprise Solutions',
    description: 'Scalable software solutions designed for complex business operations.',
  },
  {
    icon: Settings,
    title: 'System Integration',
    description: 'Seamless integration of new technologies with existing systems.',
  },
  {
    icon: Shield,
    title: 'Security Services',
    description: 'Comprehensive security solutions to protect your digital assets.',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to drive your business forward
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}