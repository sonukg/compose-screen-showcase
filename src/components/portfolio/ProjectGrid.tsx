
import React from 'react';
import ProjectCard from './ProjectCard';

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

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid = ({ projects }: ProjectGridProps) => (
  <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
);

export default ProjectGrid;
