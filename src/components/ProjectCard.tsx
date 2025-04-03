import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
        <p className="text-sm text-indigo-600">Click to view details →</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;