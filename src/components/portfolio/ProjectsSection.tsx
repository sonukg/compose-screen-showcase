
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "FitTracker Pro",
      description: "A comprehensive fitness tracking app with workout planning, progress tracking, and social features. Built with Jetpack Compose and Firebase.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Jetpack Compose", "Firebase", "Room", "Hilt"],
      downloads: "100K+ downloads",
      features: ["Real-time workout tracking", "Social challenges", "Progress analytics", "Offline support"]
    },
    {
      title: "EcoShop",
      description: "Sustainable shopping app that helps users find eco-friendly products and track their environmental impact.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "MVVM", "Retrofit", "Glide", "Material Design"],
      downloads: "50K+ downloads",
      features: ["Product sustainability scores", "Carbon footprint tracking", "Local store finder", "Wishlist management"]
    },
    {
      title: "CryptoWallet",
      description: "Secure cryptocurrency wallet with portfolio tracking, real-time prices, and transaction history.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Coroutines", "Biometric Auth", "Room", "Clean Architecture"],
      downloads: "25K+ downloads",
      features: ["Multi-currency support", "Biometric security", "Price alerts", "Portfolio analytics"]
    },
    {
      title: "TaskMaster",
      description: "Advanced task management app with team collaboration, time tracking, and productivity insights.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Clean Architecture", "Dagger", "Room", "WorkManager"],
      downloads: "75K+ downloads",
      features: ["Team collaboration", "Time tracking", "Gantt charts", "Push notifications"]
    },
    {
      title: "FoodieFind",
      description: "Restaurant discovery app with AR menu overlay, reviews, and reservation booking system.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "ARCore", "Google Maps", "Retrofit", "CameraX"],
      downloads: "40K+ downloads",
      features: ["AR menu scanner", "Table reservations", "Review system", "Location-based search"]
    },
    {
      title: "MediTrack",
      description: "Health monitoring app with medication reminders, symptom tracking, and doctor consultations.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Health Connect", "ML Kit", "Firebase", "HealthKit"],
      downloads: "60K+ downloads",
      features: ["Medication reminders", "Symptom logging", "Health reports", "Telemedicine integration"]
    },
    {
      title: "TravelGuide",
      description: "Smart travel companion with offline maps, itinerary planning, and local recommendations.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Mapbox", "Room", "WorkManager", "Location Services"],
      downloads: "90K+ downloads",
      features: ["Offline maps", "Smart itineraries", "Local insights", "Expense tracking"]
    },
    {
      title: "StudyBuddy",
      description: "Educational app with flashcards, spaced repetition learning, and study group features.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Room", "Machine Learning", "Speech Recognition", "Material You"],
      downloads: "35K+ downloads",
      features: ["Spaced repetition", "Voice notes", "Study groups", "Progress tracking"]
    },
    {
      title: "SmartHome",
      description: "IoT home automation app controlling lights, temperature, security, and energy consumption.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "MQTT", "Bluetooth LE", "WiFi Direct", "Custom Views"],
      downloads: "20K+ downloads",
      features: ["Device control", "Energy monitoring", "Security alerts", "Voice commands"]
    },
    {
      title: "PhotoVault",
      description: "Secure photo storage app with AI tagging, facial recognition, and encrypted cloud backup.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "ML Kit", "Encryption", "Cloud Storage", "CameraX"],
      downloads: "45K+ downloads",
      features: ["AI photo tagging", "Facial recognition", "Encrypted storage", "Smart albums"]
    },
    {
      title: "BudgetWise",
      description: "Personal finance app with expense tracking, budget planning, and investment portfolio management.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Chart Libraries", "Bank APIs", "Room", "Security"],
      downloads: "80K+ downloads",
      features: ["Expense categorization", "Budget alerts", "Investment tracking", "Financial insights"]
    },
    {
      title: "WeatherPro",
      description: "Advanced weather app with hourly forecasts, weather maps, and severe weather alerts.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Weather APIs", "MapView", "Push Notifications", "Widget"],
      downloads: "150K+ downloads",
      features: ["Radar maps", "Severe alerts", "Hourly forecasts", "Widget support"]
    },
    {
      title: "CodeSnippet",
      description: "Developer tool for code snippet management with syntax highlighting and team sharing.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
      technologies: ["Kotlin", "Syntax Highlighting", "GitHub API", "Room", "Search"],
      downloads: "15K+ downloads",
      features: ["Syntax highlighting", "Code search", "Team sharing", "Version control"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and the impact they've made
          </p>
        </div>

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
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
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
      </div>
    </section>
  );
};

export default ProjectsSection;
