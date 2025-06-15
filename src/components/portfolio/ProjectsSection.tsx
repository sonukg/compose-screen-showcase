
import React from 'react';
import { motion } from 'framer-motion';
import ProjectTabs from './ProjectTabs';
import { projects, categories } from '@/data/projects';

const ProjectsSection = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20 bg-background dark:bg-primary/5"
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work across different platforms and technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <ProjectTabs projects={projects} categories={categories} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
