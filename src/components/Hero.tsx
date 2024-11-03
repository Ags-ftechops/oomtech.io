import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <Cpu className="w-16 h-16 text-blue-400 mb-8 animate-pulse" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Personalized IT Solutions for
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> Modern Businesses</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl">
          Transform your business with cutting-edge IoT solutions and custom software development tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-white/20 hover:border-white/40 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
            View Our Work
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
}