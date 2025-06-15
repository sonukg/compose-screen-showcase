
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-primary/90 text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Sonu Kumar</h3>
            <p className="text-muted-foreground mb-4">
              Full-stack developer passionate about creating innovative solutions and exceptional user experiences.
            </p>
            <p className="text-sm text-muted-foreground/80">
              © 2025 Sonu Kumar. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-muted-foreground">Mobile App Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">IOS App Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">Flutter App Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">KMP/CMP App Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">Hybrid Mobile Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">Multiplatform App Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">Web Development</span>
              </li>
              <li>
                <span className="text-muted-foreground">Full Stack Solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
