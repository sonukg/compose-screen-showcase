
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Github, Smartphone, Globe, Apple, Calendar, Code, Lightbulb, Target, Wrench } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Button>

        {/* Project Header */}
        <div className="relative mb-8">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4">
            <Badge className="bg-green-600 text-white text-lg px-3 py-1">
              {project.downloads}
            </Badge>
          </div>
          <div className="absolute top-4 left-4">
            <Badge variant="outline" className="bg-white/90 text-lg px-3 py-1">
              {project.category}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                {project.description}
              </p>
            </div>

            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.overview || "A comprehensive project designed to solve real-world problems with modern technology solutions."}
                </p>
              </CardContent>
            </Card>

            {/* Development Process */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600" />
                  Development Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.developmentProcess || "Developed using industry best practices with focus on scalability, performance, and user experience."}
                </p>
              </CardContent>
            </Card>

            {/* Challenges and Solutions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Challenges and Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.challengesAndSolutions || "Overcame various technical challenges through innovative solutions and careful planning."}
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="w-5 h-5 text-purple-600" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Duration */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div>
                    <span className="text-sm text-gray-500">Start Date:</span>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {project.duration?.start || "Jan 2023"}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">End Date:</span>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {project.duration?.end || "Jun 2023"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technologies Used */}
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Links */}
            <Card>
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
                {getProjectLinks().map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <Button key={index} variant="outline" className="w-full justify-start">
                      <IconComponent className="w-4 h-4 mr-2" />
                      {link.label}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
