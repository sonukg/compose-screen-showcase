
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Kotlin", "Java", "Dart", "Swift", "Python", "JavaScript", "TypeScript", "C++"]
    },
    {
      title: "Android Development",
      skills: ["Jetpack Compose", "XML Layouts", "Material Design", "Android SDK", "Gradle", "Activities & Fragments", "Services", "Broadcast Receivers", "Content Providers", "Notifications", "Camera API", "Location Services", "Permissions", "Data Binding", "View Binding", "Navigation Component", "Work Manager", "App Widgets", "Custom Views", "Animation"]
    },
    {
      title: "Architecture & Patterns",
      skills: ["MVVM", "MVP", "MVI", "Clean Architecture", "Repository Pattern", "Dependency Injection", "SOLID Principles", "Observer Pattern", "Singleton Pattern", "Factory Pattern"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Retrofit", "Room", "Dagger/Hilt", "RxJava", "Coroutines", "Glide", "Picasso", "OkHttp", "Gson", "Moshi", "Timber", "LeakCanary", "Stetho", "Lottie", "ExoPlayer", "CameraX"]
    },
    {
      title: "KMP/CMP (Kotlin Multiplatform)",
      skills: ["Kotlin Multiplatform Mobile", "Compose Multiplatform", "Shared Business Logic", "Platform-Specific APIs", "Ktor Client", "SQLDelight", "Multiplatform Resources", "Expect/Actual Declarations", "Native Interop", "CocoaPods Integration", "Gradle Multiplatform Plugin"]
    },
    {
      title: "Flutter Development",
      skills: ["Flutter SDK", "Dart Language", "Widgets", "State Management (Bloc, Provider, Riverpod)", "Flutter Navigation", "Animations", "Custom Paintings", "Platform Channels", "Flutter Web", "Flutter Desktop", "Pub.dev Packages", "Firebase Flutter", "Dio HTTP Client", "Hive Database", "GetX"]
    },
    {
      title: "iOS Development",
      skills: ["Swift", "Objective-C", "UIKit", "SwiftUI", "Core Data", "Core Animation", "Auto Layout", "Storyboards", "XIBs", "URLSession", "Grand Central Dispatch", "Core Location", "Push Notifications", "App Store Connect", "Xcode", "CocoaPods", "Swift Package Manager"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Android Studio", "Xcode", "VS Code", "IntelliJ IDEA", "Git", "Firebase", "Google Play Console", "App Store Connect", "CI/CD", "Fastlane", "Bitrise", "GitHub Actions", "Jenkins"]
    },
    {
      title: "Testing",
      skills: ["JUnit", "Espresso", "Mockito", "Robolectric", "UI Testing", "Unit Testing", "Integration Testing", "Test-Driven Development", "Behaviour-Driven Development", "XCTest", "Flutter Test"]
    },
    {
      title: "Backend & Cloud",
      skills: ["Firebase", "AWS", "Google Cloud", "REST APIs", "GraphQL", "WebSockets", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Redis", "Docker"]
    },
    {
      title: "AI Skills",
      skills: ["Machine Learning", "TensorFlow", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision", "Deep Learning", "Neural Networks", "OpenAI API", "Langchain", "Vector Databases", "Prompt Engineering", "AI Model Integration", "MLOps", "Data Science", "Pandas", "NumPy"]
    },
    {
      title: "Vibe Coding Tools",
      skills: ["GitHub Copilot", "ChatGPT", "Claude AI", "Cursor IDE", "Tabnine", "Lovable", "Replit", "CodePen", "Figma", "Linear", "Notion", "Obsidian", "Arc Browser", "Raycast", "iTerm2", "Oh My Zsh"]
    }
  ];

  return (
    <motion.section 
      id="skills" 
      className="py-20 bg-muted/30 dark:bg-primary/10"
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across mobile platforms and technologies
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-lg text-center text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="bg-accent/20 text-accent-foreground hover:bg-accent/30 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;
