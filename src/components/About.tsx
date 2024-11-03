import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Driving Digital Innovation Through
              <span className="text-blue-500"> Technology Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              At OmTech, we combine cutting-edge technology with industry expertise to deliver transformative IT solutions that help businesses thrive in the digital age.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  description: 'To empower businesses through innovative technology solutions.',
                },
                {
                  icon: Users,
                  title: 'Client-Centric',
                  description: 'We put our clients first, ensuring solutions that match their unique needs.',
                },
                {
                  icon: Zap,
                  title: 'Innovation',
                  description: 'Constantly evolving and adopting new technologies to stay ahead.',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}