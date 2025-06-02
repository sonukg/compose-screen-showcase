
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2015 - 2017",
      description: "Specialized in Mobile Computing and Human-Computer Interaction. Thesis on 'Optimizing User Experience in Cross-Platform Mobile Applications'.",
      achievements: [
        "GPA: 3.9/4.0",
        "Dean's List for 4 consecutive semesters",
        "Research Assistant in Mobile Computing Lab"
      ]
    },
    {
      degree: "Bachelor of Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2011 - 2015",
      description: "Comprehensive foundation in software engineering principles, algorithms, and data structures with focus on mobile development.",
      achievements: [
        "Magna Cum Laude (GPA: 3.8/4.0)",
        "President of Mobile Development Club",
        "Winner of UC Berkeley Hackathon 2014"
      ]
    }
  ];

  const certifications = [
    {
      title: "Google Associate Android Developer",
      issuer: "Google",
      date: "2023",
      credentialId: "ABC123456"
    },
    {
      title: "Kotlin Multiplatform Mobile Developer",
      issuer: "JetBrains",
      date: "2023",
      credentialId: "KMP789012"
    },
    {
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS345678"
    },
    {
      title: "Flutter Certified Developer",
      issuer: "Google",
      date: "2022",
      credentialId: "FLT901234"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education & Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic foundation and professional certifications that drive my expertise
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                      <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">{edu.institution}</h5>
                      <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                    </div>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                  <div>
                    <h6 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h6>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
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
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Issued: {cert.date}</span>
                    <span className="text-gray-500 dark:text-gray-500 text-xs">ID: {cert.credentialId}</span>
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
