
import React from 'react';
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
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive expertise across mobile platforms and technologies
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
