
import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ProjectGrid from './ProjectGrid';

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

interface ProjectTabsProps {
  projects: Project[];
  categories: string[];
}

const ProjectTabs = ({ projects, categories }: ProjectTabsProps) => {
  const getFilteredProjects = (category: string) => {
    if (category === "All") return projects;
    return projects.filter(project => project.category === category);
  };

  const getCategoryCount = (category: string) => {
    if (category === "All") return projects.length;
    return projects.filter(project => project.category === category).length;
  };

  return (
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
  );
};

export default ProjectTabs;
