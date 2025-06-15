
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Consultant (Android)",
      company: "KRG Technologies",
      period: "June 2023 - July 2024",
      location: "Chennai",
      description: "Worked as Software Engineer for Mobile Banking Application to build a robust payment system within a banking mobile app, focusing on the seamless integration of UPI and UPI Lite technologies to enhance transaction efficiency.",
      achievements: [
        "Ensured intuitive and user-friendly interface for payment system, prioritizing smooth and secure experience for app users",
        "Implemented state-of-the-art security measures within payment system, adhering to industry standards and regulations",
        "Collaborated seamlessly with cross-functional teams including backend developers, QA engineers, and product managers",
        "Contributed to seamless integration of payment system with other app features for cohesive mobile banking experience"
      ],
      technologies: ["Android", "Kotlin", "UPI", "UPI Lite", "Payment Systems", "Banking"]
    },
    {
      title: "Solution Developer (Android)",
      company: "Tata Technologies",
      period: "December 2021 - May 2023",
      location: "Pune, Maharashtra",
      description: "Developed Cummins Saathi App with five different personas for different types of Cummins users. All-in-one app for Cummins users to perform work through this app, available in 11 native languages of India.",
      achievements: [
        "Built app with rich features such as customized maps and easy-to-understand training videos",
        "Implemented leadership board showing national & regional level ranks",
        "Integrated MITWA's reward points system",
        "Delivered technologically advanced and user-friendly platform aligning with Cummins' mission"
      ],
      technologies: ["Android", "Kotlin", "Maps Integration", "Multilingual Support", "Reward Systems"]
    },
    {
      title: "Senior Android Developer",
      company: "Rdiobutton",
      period: "April 2021 - December 2021",
      location: "Pune, Maharashtra",
      description: "Developed different apps including Storex App in Android to automate process of receiving and delivering chemical-related products for different sites located at different locations.",
      achievements: [
        "Developed Storex App for chemical products automation across multiple locations",
        "Built Coolberg Team App - a social networking app for product branding in Flutter",
        "Engineered and deployed scalable Android application architecture leveraging Kotlin and MVVM",
        "Enhanced app stability through modern architecture patterns"
      ],
      technologies: ["Android", "Kotlin", "Flutter", "MVVM", "Social Networking", "Process Automation"]
    },
    {
      title: "Android Developer",
      company: "Etonius IT Solutions",
      period: "December 2018 - April 2021",
      location: "Pune, Maharashtra",
      description: "Developed several apps including Yash Attendance Management, SCGT (Saturday Club Global Trust), Shreeji Vending Service, and Shreenath Diary Management App, all published on Play Store.",
      achievements: [
        "Published multiple successful apps on Google Play Store",
        "Developed projects such as Tingtongue app, Crazyburger app, Yogiraj YCT App, Bizsol App",
        "Integrated notification management system for Android applications",
        "Achieved 30% increase in user engagement and retention across four major apps"
      ],
      technologies: ["Android", "Java", "Kotlin", "Flutter", "Firebase", "Notification Systems"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30 dark:bg-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in Android development and mobile technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-l-4 border-l-accent">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground">
                      <span className="font-semibold text-accent">{exp.company}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge variant="outline" className="self-start mt-2 lg:mt-0">
                    {exp.period}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="grid md:grid-cols-1 gap-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start text-muted-foreground">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-accent/20 text-accent-foreground">
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
