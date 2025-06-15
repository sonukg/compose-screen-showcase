
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, User, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "6+ Years Experience",
      description: "Extensive experience in Android development with modern technologies"
    },
    {
      icon: User,
      title: "15+ Apps Published",
      description: "Successfully delivered apps with millions of downloads"
    },
    {
      icon: Briefcase,
      title: "Team Leadership",
      description: "Led development teams and mentored junior developers"
    }
  ];

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-background dark:bg-primary/5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Android developer who loves creating beautiful, functional, 
            and user-friendly mobile applications that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6">
              Started my Android development journey in 2018, I've had the privilege of working 
              with startups and Fortune 500 companies, building applications that have impacted 
              millions of users worldwide.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in modern Android development using Kotlin, Jetpack Compose, 
              MVVM architecture, and clean code principles. I'm passionate about creating 
              intuitive user experiences and writing maintainable, scalable code.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me contributing to open-source projects, 
              mentoring aspiring developers, or exploring the latest Android technologies.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="border-l-4 border-l-accent">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="bg-accent/20 p-3 rounded-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-6 h-6 text-accent" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
