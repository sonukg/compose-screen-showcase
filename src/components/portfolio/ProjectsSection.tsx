
import React from 'react';
import ProjectTabs from './ProjectTabs';
import { projects, categories } from '@/data/projects';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work across different platforms and technologies
          </p>
        </div>

        <ProjectTabs projects={projects} categories={categories} />
      </div>
    </section>
  );
};

export default ProjectsSection;
