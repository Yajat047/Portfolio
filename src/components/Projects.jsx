import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/projects';
import { useState } from 'react';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleTechnologies = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Group projects by category
  const freelanceProjects = projects.filter(p => p.category === 'freelance');
  const personalProjects = projects.filter(p => p.category === 'personal');

  const renderProjectCard = (project, index) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.7 } }}
      className="group bg-primary rounded-lg overflow-hidden border border-accent/20 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 flex flex-col"
    >
      {/* Project Image */}
      <div className="h-48 bg-secondary/50 flex items-center justify-center overflow-hidden relative">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = `<div class="text-accent text-6xl">💻</div>`;
            }}
          />
        ) : (
          <div className="text-accent text-6xl">💻</div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-textPrimary mb-3">
          {project.title}
        </h3>
        
        <p className="text-textSecondary text-sm mb-4 flex-grow">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(expandedProjects[project.id] ? project.technologies : project.technologies.slice(0, 4)).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/30"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <button
              onClick={() => toggleTechnologies(project.id)}
              className="text-xs px-2 py-1 text-textSecondary hover:text-accent transition-colors cursor-pointer"
            >
              {expandedProjects[project.id] 
                ? 'Show less' 
                : `+${project.technologies.length - 4} more`}
            </button>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
              title="View Source Code"
            >
              <FaGithub size={20} />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transition-colors duration-300 flex items-center gap-2"
              title={project.category === 'freelance' ? "Visit Website" : "View Live Demo"}
            >
              <FaExternalLinkAlt size={18} />
              <span className="text-sm">{project.category === 'freelance' ? 'Website' : 'Live Demo'}</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="min-h-screen bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-2">
            <span className="text-accent">03.</span> Things I've Built
          </h2>
          <div className="h-1 w-32 bg-accent mt-4"></div>
        </motion.div>

        {/* Freelance Projects Section */}
        {freelanceProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                Professional Projects
              </h3>
              <p className="text-textSecondary text-sm">
                Work delivered for clients and businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {freelanceProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </>
        )}

        {/* Personal Projects Section */}
        {personalProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">
                Personal Projects
              </h3>
              <p className="text-textSecondary text-sm">
                College, Side projects and experiments
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </>
        )}

        {/* Show all projects if no categories */}
        {freelanceProjects.length === 0 && personalProjects.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => renderProjectCard(project, index))}
          </div>
        )}

        {/* Note about adding more projects */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-primary rounded-lg border border-accent/20 text-center"
        >
          <p className="text-textSecondary">
            💡 <span className="text-accent">Tip:</span> Add project images to{' '}
            <code className="bg-secondary px-2 py-1 rounded text-accent">public/projects/</code> and update{' '}
            <code className="bg-secondary px-2 py-1 rounded text-accent">src/data/projects.js</code>
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Projects;
