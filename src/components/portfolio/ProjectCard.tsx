
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, Smartphone, Globe, Apple } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  downloads: string;
  features: string[];
  category: string;
  links: {
    playstore: string | null;
    appstore: string | null;
    webapp: string;
  };
  overview?: string;
  developmentProcess?: string;
  challengesAndSolutions?: string;
  duration?: {
    start: string;
    end: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const navigate = useNavigate();

  const getProjectLinks = (project: Project) => {
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

  const handleViewDetails = (project: Project) => {
    navigate(`/project/${encodeURIComponent(project.title.toLowerCase().replace(/\s+/g, '-'))}`, { 
      state: { project } 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-accent text-accent-foreground">
            {project.downloads}
          </Badge>
        </div>
        <div className="absolute top-4 left-4">
          <Badge variant="outline" className="bg-background/90 text-foreground">
            {project.category}
          </Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge key={techIndex} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-foreground">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="sm" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => handleViewDetails(project)}
            >
              View Details
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="sm" variant="outline">
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </motion.div>
          {getProjectLinks(project).map((link, linkIndex) => {
            const IconComponent = link.icon;
            return (
              <motion.div
                key={linkIndex}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="sm" variant="outline">
                  <IconComponent className="w-4 h-4 mr-2" />
                  {link.label}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </CardContent>
    </Card>
    </motion.div>
  );
};

export default ProjectCard;
