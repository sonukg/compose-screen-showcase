
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, Smartphone, Globe, Apple, Calendar, Code, Lightbulb, Target, Wrench, User } from 'lucide-react';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')}>Go back to home</Button>
        </div>
      </div>
    );
  }

  const getProjectLinks = () => {
    const { category, links } = project;
    
    switch (category) {
      case "Android":
        return links.playstore ? [{ type: "playstore", url: links.playstore, icon: Smartphone, label: "Play Store" }] : [];
      case "iOS":
        return links.appstore ? [{ type: "appstore", url: links.appstore, icon: Apple, label: "App Store" }] : [];
      case "Frontend":
      case "Fullstack":
        return [{ type: "webapp", url: links.webapp, icon: Globe, label: "Web App" }];
      case "KMP/CMP":
      case "Flutter":
      case "React Native":
        const linkList = [];
        if (links.playstore) linkList.push({ type: "playstore", url: links.playstore, icon: Smartphone, label: "Play Store" });
        if (links.appstore) linkList.push({ type: "appstore", url: links.appstore, icon: Apple, label: "App Store" });
        return linkList;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            {project.duration?.start || "Jan 2023"} - {project.duration?.end || "Jun 2023"}
          </p>
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline" className="text-base px-4 py-2">
              {project.category}
            </Badge>
            <Badge className="bg-green-600 text-white text-base px-4 py-2">
              {project.downloads}
            </Badge>
          </div>
        </div>

        <div className="space-y-8">
          {/* Project Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.overview || project.description}
              </p>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="text-gray-700 dark:text-gray-300">
                    • {tech}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Development Process */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Development Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.developmentProcess || "Followed industry best practices with agile methodology, implementing features iteratively with continuous testing and code reviews. Utilized modern development tools and frameworks to ensure scalable and maintainable code architecture."}
              </p>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Challenges & Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {project.challengesAndSolutions || (
                  <div className="space-y-4">
                    <div>
                      <p><strong>Challenge:</strong> Implementing complex user interface requirements while maintaining performance.</p>
                      <p><strong>Solution:</strong> Utilized component-based architecture and implemented lazy loading to optimize performance and user experience.</p>
                    </div>
                    <div>
                      <p><strong>Challenge:</strong> Ensuring cross-platform compatibility and consistent user experience.</p>
                      <p><strong>Solution:</strong> Implemented responsive design principles and thorough testing across multiple devices and platforms.</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-gray-900 dark:text-white">
                Project Links
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View Code
                </Button>
                {getProjectLinks().map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button key={index} variant="outline" className="flex items-center gap-2">
                      <IconComponent className="w-4 h-4" />
                      {link.label}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
