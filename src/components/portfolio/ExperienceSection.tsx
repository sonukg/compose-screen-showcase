
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Android Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description: "Lead Android development for flagship mobile app with 5M+ users. Architect and implement new features using Jetpack Compose and modern Android technologies.",
      achievements: [
        "Improved app performance by 40% through code optimization",
        "Led migration from XML to Jetpack Compose",
        "Mentored team of 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Hilt", "Coroutines", "Firebase"]
    },
    {
      title: "Android Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      location: "New York, NY",
      description: "Developed multiple Android applications from concept to production. Collaborated with cross-functional teams to deliver high-quality mobile experiences.",
      achievements: [
        "Built 3 successful apps with 500K+ combined downloads",
        "Implemented offline-first architecture",
        "Reduced crash rate by 85% through comprehensive testing",
        "Introduced code review practices and coding standards"
      ],
      technologies: ["Kotlin", "MVVM", "Room", "Retrofit", "RxJava"]
    },
    {
      title: "Mobile App Developer",
      company: "InnovateTech Solutions",
      period: "2017 - 2020",
      location: "Seattle, WA",
      description: "Full-stack mobile developer working on both Android and cross-platform solutions. Specialized in healthcare and fintech applications with strict security requirements.",
      achievements: [
        "Developed HIPAA-compliant healthcare apps serving 200K+ patients",
        "Implemented advanced security features including biometric authentication",
        "Led cross-platform development initiatives using React Native",
        "Achieved 99.9% uptime for critical financial applications"
      ],
      technologies: ["Kotlin", "Java", "React Native", "Security", "FHIR", "Encryption"]
    },
    {
      title: "Junior Android Developer",
      company: "Mobile Solutions Ltd.",
      period: "2016 - 2017",
      location: "Austin, TX",
      description: "Developed and maintained Android applications for various clients. Gained experience in different industries and app types.",
      achievements: [
        "Delivered 8 client projects on time and within budget",
        "Learned modern Android development best practices",
        "Contributed to open-source Android libraries",
        "Participated in Google I/O and Android conferences"
      ],
      technologies: ["Java", "Kotlin", "MVP", "Volley", "SQLite"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey in Android development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-blue-600">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600">
                      <span className="font-semibold text-blue-600">{exp.company}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="self-start mt-2 lg:mt-0">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-gray-600 mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Achievements:</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-blue-100 text-blue-800">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
