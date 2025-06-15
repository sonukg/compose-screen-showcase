
import React from 'react';
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
      title: "12+ Apps Published",
      description: "Successfully delivered apps with millions of downloads"
    },
    {
      icon: Briefcase,
      title: "Team Leadership",
      description: "Led development teams and mentored junior developers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Android developer who loves creating beautiful, functional, 
            and user-friendly mobile applications that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Started my Android development journey in 2016, I've had the privilege of working 
              with startups and Fortune 500 companies, building applications that have impacted 
              millions of users worldwide.
            </p>
            <p className="text-gray-600 mb-6">
              I specialize in modern Android development using Kotlin, Jetpack Compose, 
              MVVM architecture, and clean code principles. I'm passionate about creating 
              intuitive user experiences and writing maintainable, scalable code.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me contributing to open-source projects, 
              mentoring aspiring developers, or exploring the latest Android technologies.
            </p>
          </div>
          
          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
