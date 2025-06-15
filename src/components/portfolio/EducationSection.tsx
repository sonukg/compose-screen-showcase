
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Application (MCA)",
      institution: "Dr Baba Saheb Ambedkar Marathwada University",
      location: "Aurangabad, Maharashtra",
      period: "2018",
      description: "Master's degree in Computer Application with comprehensive foundation in software development, programming languages, and computer science principles.",
      achievements: [
        "CGPA: 6.8/10",
        "Specialized in software development and mobile technologies",
        "Strong foundation in programming and system design"
      ]
    }
  ];

  const certifications = [
    {
      title: "Certificate in Android Application Development",
      issuer: "BitCode Technologies Pvt. Ltd.",
      date: "2018",
      location: "Pune, Maharashtra"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background dark:bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation and professional certifications that drive my expertise in mobile development
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h4>
                      <h5 className="text-lg font-semibold text-accent mb-1">{edu.institution}</h5>
                      <p className="text-muted-foreground">{edu.location}</p>
                    </div>
                    <span className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{edu.description}</p>
                  <div>
                    <h6 className="font-semibold text-foreground mb-2">Key Achievements:</h6>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-muted-foreground">
                          <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-foreground mb-2">{cert.title}</h4>
                  <p className="text-accent font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground text-sm">Issued: {cert.date}</span>
                    <span className="text-muted-foreground text-xs">{cert.location}</span>
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

export default EducationSection;
