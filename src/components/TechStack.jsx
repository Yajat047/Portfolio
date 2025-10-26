import { motion } from 'framer-motion';
import { techStack } from '../data/skills';
import * as SimpleIcons from 'react-icons/si';
import * as FontAwesome from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';

const TechStack = () => {
  const iconLibraries = {
    si: SimpleIcons,
    fa: FontAwesome,
    vsc: VscIcons,
  };

  const categories = [
    { title: 'Languages', data: techStack.languages },
    { title: 'Frontend', data: techStack.frontend },
    { title: 'Backend', data: techStack.backend },
    { title: 'Database', data: techStack.database },
    { title: 'Tools & DevOps', data: techStack.tools },
    { title: 'ML & Data Science (Basic)', data: techStack.ml },
  ];

  return (
    <section id="skills" className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-2">
            <span className="text-accent">01.</span> Tech Stack
          </h2>
          <div className="h-1 w-32 bg-accent mt-4"></div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-accent mb-6">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.data.map((tech, index) => {
                  const library = iconLibraries[tech.library || 'si'];
                  const IconComponent = library ? library[tech.icon] : null;
                  
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.7 } }}
                      className="bg-secondary p-6 rounded-lg border border-accent/20 hover:border-accent/50 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
                    >
                      {IconComponent ? (
                        <IconComponent
                          size={40}
                          style={{ color: tech.color }}
                        />
                      ) : (
                        <div className="w-10 h-10 flex items-center justify-center text-2xl" style={{ color: tech.color }}>
                          ⚡
                        </div>
                      )}
                      <span className="text-textPrimary text-sm font-medium text-center">
                        {tech.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Floating Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="text-center p-8 bg-secondary/50 rounded-lg border border-accent/20 max-w-2xl">
            <p className="text-textSecondary text-lg mb-4">
              Always learning and exploring new technologies to build better solutions
            </p>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-accent text-3xl"
            >
              🚀
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
