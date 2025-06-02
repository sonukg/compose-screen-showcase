
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "FitTracker Pro",
      description: "A comprehensive fitness tracking app with workout planning, progress tracking, and social features. Built with Jetpack Compose and Firebase.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Hilt"],
      downloads: "100K+ downloads",
      features: ["Real-time workout tracking", "Social challenges", "Progress analytics", "Offline support"],
      category: "Android"
    },
    {
      title: "EcoShop",
      description: "Sustainable shopping app that helps users find eco-friendly products and track their environmental impact.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "MVVM", "Retrofit", "Glide", "Material Design"],
      downloads: "50K+ downloads",
      features: ["Product sustainability scores", "Carbon footprint tracking", "Local store finder", "Wishlist management"],
      category: "Android"
    },
    {
      title: "CryptoWallet",
      description: "Secure cryptocurrency wallet with portfolio tracking, real-time prices, and transaction history.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Coroutines", "Biometric Auth", "Room", "Clean Architecture"],
      downloads: "25K+ downloads",
      features: ["Multi-currency support", "Biometric security", "Price alerts", "Portfolio analytics"],
      category: "Android"
    },
    {
      title: "TaskMaster",
      description: "Advanced task management app with team collaboration, time tracking, and productivity insights.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Clean Architecture", "Dagger", "Room", "WorkManager"],
      downloads: "75K+ downloads",
      features: ["Team collaboration", "Time tracking", "Gantt charts", "Push notifications"],
      category: "Android"
    },
    {
      title: "FoodieFind",
      description: "Restaurant discovery app with AR menu overlay, reviews, and reservation booking system.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "ARCore", "Google Maps", "Retrofit", "CameraX"],
      downloads: "40K+ downloads",
      features: ["AR menu scanner", "Table reservations", "Review system", "Location-based search"],
      category: "Android"
    },
    {
      title: "MediTrack",
      description: "Health monitoring app with medication reminders, symptom tracking, and doctor consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Health Connect", "ML Kit", "Firebase", "HealthKit"],
      downloads: "60K+ downloads",
      features: ["Medication reminders", "Symptom logging", "Health reports", "Telemedicine integration"],
      category: "Android"
    },
    {
      title: "TravelGuide",
      description: "Smart travel companion with offline maps, itinerary planning, and local recommendations.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Mapbox", "Room", "WorkManager", "Location Services"],
      downloads: "90K+ downloads",
      features: ["Offline maps", "Smart itineraries", "Local insights", "Expense tracking"],
      category: "Android"
    },
    {
      title: "StudyBuddy",
      description: "Educational app with flashcards, spaced repetition learning, and study group features.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Room", "Machine Learning", "Speech Recognition", "Material You"],
      downloads: "35K+ downloads",
      features: ["Spaced repetition", "Voice notes", "Study groups", "Progress tracking"],
      category: "Android"
    },
    {
      title: "SmartHome",
      description: "IoT home automation app controlling lights, temperature, security, and energy consumption.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "MQTT", "Bluetooth LE", "WiFi Direct", "Custom Views"],
      downloads: "20K+ downloads",
      features: ["Device control", "Energy monitoring", "Security alerts", "Voice commands"],
      category: "Android"
    },
    {
      title: "PhotoVault",
      description: "Secure photo storage app with AI tagging, facial recognition, and encrypted cloud backup.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "ML Kit", "Encryption", "Cloud Storage", "CameraX"],
      downloads: "45K+ downloads",
      features: ["AI photo tagging", "Facial recognition", "Encrypted storage", "Smart albums"],
      category: "Android"
    },
    {
      title: "BudgetWise",
      description: "Personal finance app with expense tracking, budget planning, and investment portfolio management.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Chart Libraries", "Bank APIs", "Room", "Security"],
      downloads: "80K+ downloads",
      features: ["Expense categorization", "Budget alerts", "Investment tracking", "Financial insights"],
      category: "Android"
    },
    {
      title: "WeatherPro",
      description: "Advanced weather app with hourly forecasts, weather maps, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Weather APIs", "MapView", "Push Notifications", "Widget"],
      downloads: "150K+ downloads",
      features: ["Radar maps", "Severe alerts", "Hourly forecasts", "Widget support"],
      category: "Android"
    },
    {
      title: "CodeSnippet",
      description: "Developer tool for code snippet management with syntax highlighting and team sharing.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Syntax Highlighting", "GitHub API", "Room", "Search"],
      downloads: "15K+ downloads",
      features: ["Syntax highlighting", "Code search", "Team sharing", "Version control"],
      category: "Android"
    },
    // iOS Projects
    {
      title: "HealthTracker iOS",
      description: "Comprehensive health monitoring app with HealthKit integration and Apple Watch support.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      technologies: ["Swift", "SwiftUI", "HealthKit", "WatchKit", "Core Data"],
      downloads: "120K+ downloads",
      features: ["HealthKit sync", "Apple Watch", "Heart rate monitoring", "Workout tracking"],
      category: "iOS"
    },
    {
      title: "ShopSmart iOS",
      description: "Smart shopping assistant with AR product scanning and price comparison.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      technologies: ["Swift", "ARKit", "Vision", "Core ML", "StoreKit"],
      downloads: "85K+ downloads",
      features: ["AR scanning", "Price comparison", "Barcode reader", "Wishlist sync"],
      category: "iOS"
    },
    {
      title: "MindfulMoments",
      description: "Meditation and mindfulness app with guided sessions and progress tracking.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      technologies: ["Swift", "AVFoundation", "CloudKit", "WidgetKit", "SiriKit"],
      downloads: "200K+ downloads",
      features: ["Guided meditation", "Siri shortcuts", "Widgets", "Cloud sync"],
      category: "iOS"
    },
    // KMP/CMP Projects
    {
      title: "CrossPlatform Banking",
      description: "Secure banking app built with Kotlin Multiplatform sharing business logic across platforms.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&h=300&fit=crop",
      technologies: ["Kotlin Multiplatform", "Ktor", "SQLDelight", "Compose Multiplatform"],
      downloads: "300K+ downloads",
      features: ["Cross-platform", "Secure transactions", "Biometric auth", "Real-time updates"],
      category: "KMP/CMP"
    },
    {
      title: "MultiOS Chat",
      description: "Real-time messaging app using Compose Multiplatform for consistent UI across platforms.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      technologies: ["Compose Multiplatform", "Ktor", "WebSocket", "SQLDelight"],
      downloads: "150K+ downloads",
      features: ["Real-time messaging", "File sharing", "Group chats", "End-to-end encryption"],
      category: "KMP/CMP"
    },
    // Flutter Projects
    {
      title: "FlutterCommerce",
      description: "E-commerce app with beautiful animations and smooth user experience built with Flutter.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe", "GetX"],
      downloads: "250K+ downloads",
      features: ["Custom animations", "Payment gateway", "Push notifications", "Offline support"],
      category: "Flutter"
    },
    {
      title: "FlutterFitness",
      description: "Comprehensive fitness tracking app with custom workout plans and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      technologies: ["Flutter", "Provider", "SQLite", "Camera", "Charts"],
      downloads: "180K+ downloads",
      features: ["Workout plans", "Progress photos", "Social sharing", "Custom charts"],
      category: "Flutter"
    },
    // React Native Projects
    {
      title: "RNSocialMedia",
      description: "Social media app with real-time features and cross-platform compatibility.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop",
      technologies: ["React Native", "Redux", "Socket.io", "AsyncStorage", "React Navigation"],
      downloads: "400K+ downloads",
      features: ["Real-time feed", "Stories", "Direct messaging", "Photo filters"],
      category: "React Native"
    },
    {
      title: "RNDelivery",
      description: "Food delivery app with live tracking and payment integration.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop",
      technologies: ["React Native", "Maps", "Payment SDK", "Push Notifications", "Geolocation"],
      downloads: "320K+ downloads",
      features: ["Live tracking", "Multiple payments", "Restaurant search", "Order history"],
      category: "React Native"
    },
    // Frontend Projects
    {
      title: "DashboardPro",
      description: "Modern admin dashboard with advanced analytics and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Recharts", "Tailwind CSS", "Zustand"],
      downloads: "50K+ users",
      features: ["Real-time analytics", "Custom charts", "Dark mode", "Responsive design"],
      category: "Frontend"
    },
    {
      title: "PortfolioBuilder",
      description: "Portfolio website builder with drag-and-drop interface and template library.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
      technologies: ["Vue.js", "Nuxt", "SCSS", "Vuetify", "Pinia"],
      downloads: "75K+ users",
      features: ["Drag & drop", "Template library", "SEO optimized", "Mobile responsive"],
      category: "Frontend"
    },
    // Backend Projects
    {
      title: "APIGateway",
      description: "Scalable API gateway with authentication, rate limiting, and monitoring.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express", "Redis", "MongoDB", "JWT"],
      downloads: "30K+ deployments",
      features: ["Rate limiting", "API monitoring", "Authentication", "Load balancing"],
      category: "Backend"
    },
    {
      title: "MicroservicesKit",
      description: "Microservices architecture template with Docker containers and service discovery.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop",
      technologies: ["Spring Boot", "Docker", "Kubernetes", "PostgreSQL", "RabbitMQ"],
      downloads: "25K+ deployments",
      features: ["Service discovery", "Container orchestration", "Message queuing", "Health checks"],
      category: "Backend"
    },
    // Fullstack Projects
    {
      title: "SaaS Platform",
      description: "Complete SaaS platform with subscription management, analytics, and multi-tenancy.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      technologies: ["Next.js", "Prisma", "Stripe", "Vercel", "PostgreSQL"],
      downloads: "100K+ users",
      features: ["Subscription billing", "Multi-tenancy", "Analytics dashboard", "API management"],
      category: "Fullstack"
    },
    {
      title: "E-Learning Platform",
      description: "Comprehensive online learning platform with video streaming and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      technologies: ["MERN Stack", "AWS S3", "Socket.io", "Stripe", "CloudFront"],
      downloads: "200K+ users",
      features: ["Video streaming", "Progress tracking", "Live chat", "Certificate generation"],
      category: "Fullstack"
    }
  ];

  const categories = ["All", "Android", "iOS", "KMP/CMP", "Flutter", "React Native", "Frontend", "Backend", "Fullstack"];

  const getFilteredProjects = (category: string) => {
    if (category === "All") return projects;
    return projects.filter(project => project.category === category);
  };

  const getCategoryCount = (category: string) => {
    if (category === "All") return projects.length;
    return projects.filter(project => project.category === category).length;
  };

  const ProjectGrid = ({ projects }: { projects: typeof projects }) => (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-600 text-white">
                {project.downloads}
              </Badge>
            </div>
            <div className="absolute top-4 left-4">
              <Badge variant="outline" className="bg-white/90">
                {project.category}
              </Badge>
            </div>
          </div>
          
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">{project.title}</CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <Badge key={techIndex} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-gray-900 dark:text-white">Key Features:</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                View Details
              </Button>
              <Button size="sm" variant="outline">
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work across different platforms and technologies
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid grid-cols-9 w-full mb-8 bg-gray-100 dark:bg-gray-800">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="text-sm data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category} ({getCategoryCount(category)})
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <ProjectGrid projects={getFilteredProjects(category)} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
