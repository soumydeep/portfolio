import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code, Briefcase, User, Send, Import } from 'lucide-react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import Contact from './components/Contact';
import Logo from "../assets/profile.jpg";
import Resume from "../assets/Resume.pdf";

function App() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-orange-500"></div>
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Decorative elements */}
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-400/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-violet-400/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Soumyadeep Banik
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-xl md:text-2xl mb-4 text-white/90">Frontend Developer</p>
            <p className="text-lg md:text-xl mb-6 text-white/80 max-w-2xl mx-auto">
              Crafting beautiful, scalable web applications with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">React</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Javascript</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">Java</span>
              <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">SQL</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center space-x-6"
          >
            <a href="https://github.com/soumydeep" className="hover:text-blue-300 transition-colors transform hover:scale-110 duration-200">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/soumyadeep-banik-142553186/" className="hover:text-blue-300 transition-colors transform hover:scale-110 duration-200">
              <Linkedin size={28} />
            </a>
            {/* <a href="#" className="hover:text-blue-300 transition-colors transform hover:scale-110 duration-200">
              <Mail size={28} />
            </a> */}
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-2">
              <User className="text-indigo-600" size={32} />
              About Me
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${Logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
                width :'400px',
                left:"20%",
                padding:"70px",
                position:"relative"
              }}
            />
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Frontend Developer with expertise in JavaScript, React.js, HTML, and CSS, along with some experience in Spring and Node.js. Passionate about building scalable, high-performance web applications.
                I’ve collaborated with cross-functional teams to optimize websites serving customers across multiple regions. Always eager to learn new technologies and stay ahead of industry trends.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                When I'm not coding, you can find me enjoying cooking and traveling.
              </p>
              <motion.a
  href={Resume}  // Replace with the actual path to your resume file
  download="Resume.pdf"  // The name that the downloaded file will have
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
>
  Download Resume
</motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-2">
              <Code className="text-indigo-600" size={32} />
              Featured Projects
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-2">
              <Briefcase className="text-indigo-600" size={32} />
              Experience
            </h2>
          </motion.div>
          <Timeline experiences={experiences} />
        </div>
      </section>

      {/* Contact Section */}
     
      <Contact></Contact>
{/* {contact form} */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>Thanks for visiting</p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject!}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;