import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Experience } from '../types';

interface TimelineProps {
  experiences: Experience[];
}

const Timeline: React.FC<TimelineProps> = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className="w-1/2 px-8">
              <div className={`bg-white p-6 rounded-lg shadow-lg ${
                index % 2 === 0 ? 'text-right' : 'text-left'
              }`}>
                <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm mb-3">
                  {experience.period}
                </span>
                <h3 className="text-xl font-bold mb-2">{experience.role}</h3>
                <h4 className="text-lg text-gray-600 mb-3">{experience.company}</h4>
                <p className="text-gray-700 mb-4">{experience.description}</p>
                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800"
                  >
                    Learn more <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Timeline Point */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-4 h-4 bg-indigo-600 rounded-full absolute left-1/2 transform -translate-x-1/2"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;