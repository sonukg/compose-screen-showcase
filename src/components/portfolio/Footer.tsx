
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-br from-peach-50 to-secondary dark:from-primary dark:to-accent text-foreground py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">Sonu Kumar</h3>
            <p className="text-muted-foreground mb-4">
              Full-stack developer passionate about creating innovative solutions and exceptional user experiences.
            </p>
            <p className="text-sm text-muted-foreground/80">
              © 2025 Sonu Kumar. All rights reserved.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-primary-foreground">Services</h4>
            <ul className="space-y-2">
              {[
                'Mobile App Development',
                'IOS App Development', 
                'Flutter App Development',
                'KMP/CMP App Development',
                'Hybrid Mobile Development',
                'Multiplatform App Development',
                'Web Development',
                'Full Stack Solutions'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-muted-foreground">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
