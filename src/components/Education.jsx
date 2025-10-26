import { motion } from 'framer-motion';
import { education } from '../data/education';
import { FaGraduationCap, FaTrophy } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="min-h-screen bg-secondary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-2">
            <span className="text-accent">04.</span> Education
          </h2>
          <div className="h-1 w-32 bg-accent mt-4"></div>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary p-6 md:p-8 rounded-lg border border-accent/20 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="hidden md:block mt-2"
                >
                  <FaGraduationCap className="text-accent text-4xl" />
                </motion.div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-textPrimary mb-2">
                        {edu.institution}
                      </h3>
                      <h4 className="text-lg text-accent mb-1">{edu.degree}</h4>
                      <p className="text-textSecondary text-sm">{edu.grade}</p>
                    </div>
                    <div className="text-textSecondary text-sm md:text-right mt-2 md:mt-0">
                      <p className="font-semibold">{edu.duration}</p>
                      <p>{edu.location}</p>
                    </div>
                  </div>

                  <p className="text-textSecondary mb-4">{edu.description}</p>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <div className="flex items-center gap-2 mb-3">
                        <FaTrophy className="text-accent" />
                        <h5 className="text-textPrimary font-semibold">
                          Achievements
                        </h5>
                      </div>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-textSecondary flex items-start"
                          >
                            <span className="text-accent mr-3 mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
