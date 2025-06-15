
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-peach-50 to-secondary px-4 dark:from-primary dark:to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
            alt="Sonu Kumar"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-background shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Sonu Kumar
          </h1>
          <h2 className="text-2xl md:text-3xl text-accent-foreground mb-6">
            Senior Android Developer
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate Android developer with 6+ years of experience building scalable, 
            user-friendly mobile applications. 15+ Apps Published. Specialized in Kotlin, Jetpack Compose, 
            and modern Android architecture patterns.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-accent text-accent hover:bg-accent/10 px-8 py-3 text-lg"
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/sonukg" className="text-muted-foreground hover:text-accent transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/sonukumar97" className="text-muted-foreground hover:text-accent transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:sonukg97@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-accent hover:text-accent/80 transition-colors"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
