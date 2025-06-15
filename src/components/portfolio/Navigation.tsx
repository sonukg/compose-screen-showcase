
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // If on home page, just scroll
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      scrollToSection('contact');
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 dark:bg-primary/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-foreground">
            Sonu Kumar
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {['About', 'Skills', 'Projects', 'Experience', 'Education'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:text-accent transition-colors"
              >
                {item}
              </button>
            ))}
            <Link
              to="/resume"
              className="text-foreground hover:text-accent transition-colors"
            >
              Resume
            </Link>
            <Link
              to="/blog"
              className="text-foreground hover:text-accent transition-colors"
            >
              Blog
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-muted-foreground" />
              ) : (
                <Sun className="h-5 w-5 text-muted-foreground" />
              )}
            </button>
          </div>
          <Button 
            onClick={handleContactClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
