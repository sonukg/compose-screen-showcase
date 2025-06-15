
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
            alt="Sonu Kumar"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Sonu Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 mb-6">
            Senior Android Developer
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Passionate Android developer with 6+ years of experience building scalable, 
            user-friendly mobile applications. Specialized in Kotlin, Jetpack Compose, 
            and modern Android architecture patterns.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:sonu@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
