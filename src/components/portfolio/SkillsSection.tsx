
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Kotlin", "Java", "Dart", "Python", "JavaScript"]
    },
    {
      title: "Android Development",
      skills: ["Jetpack Compose", "XML Layouts", "Material Design", "Android SDK", "Gradle"]
    },
    {
      title: "Architecture & Patterns",
      skills: ["MVVM", "MVP", "Clean Architecture", "Repository Pattern", "Dependency Injection"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Retrofit", "Room", "Dagger/Hilt", "RxJava", "Coroutines", "Glide"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Android Studio", "Git", "Firebase", "Google Play Console", "CI/CD"]
    },
    {
      title: "Testing",
      skills: ["JUnit", "Espresso", "Mockito", "UI Testing", "Unit Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building exceptional Android applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-center text-gray-900">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 hover:bg-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
