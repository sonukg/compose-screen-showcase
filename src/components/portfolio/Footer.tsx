
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Sonu Kumar</h3>
            <p className="text-gray-400 mb-4">
              Full-stack developer passionate about creating innovative solutions and exceptional user experiences.
            </p>
            <p className="text-sm text-gray-500">
              © 2025 Sonu Kumar. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Mobile App Development</span>
              </li>
              <li>
                <span className="text-gray-400">IOS App Development</span>
              </li>
              <li>
                <span className="text-gray-400">Flutter App Development</span>
              </li>
              <li>
                <span className="text-gray-400">KMP/CMP App Development</span>
              </li>
              <li>
                <span className="text-gray-400">Hybrid Mobile Development</span>
              </li>
              <li>
                <span className="text-gray-400">Multiplatform App Development</span>
              </li>
              <li>
                <span className="text-gray-400">Web Development</span>
              </li>
              <li>
                <span className="text-gray-400">Full Stack Solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
