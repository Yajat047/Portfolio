import { motion } from 'framer-motion';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-2">
            <span className="text-accent">02.</span> Where I've Worked
          </h2>
          <div className="h-1 w-32 bg-accent mt-4"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary p-6 md:p-8 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-textPrimary mb-2">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl text-accent mb-2">{exp.company}</h4>
                </div>
                <div className="text-textSecondary text-sm md:text-right">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-textSecondary flex items-start">
                    <span className="text-accent mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about adding more experiences */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-secondary/50 rounded-lg border border-accent/20 text-center"
        >
          <p className="text-textSecondary">
            💡 <span className="text-accent">Tip:</span> You can easily add more experiences by editing the{' '}
            <code className="bg-primary px-2 py-1 rounded text-accent">src/data/experience.js</code> file
          </p>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Experience;
