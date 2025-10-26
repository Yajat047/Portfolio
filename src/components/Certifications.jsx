import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section id="certifications" className="min-h-screen bg-primary py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-2">
            <span className="text-accent">05.</span> Certifications
          </h2>
          <div className="h-1 w-32 bg-accent mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-secondary p-6 rounded-lg border border-accent/20 hover:border-accent/50 transition-all duration-0.7 hover:shadow-lg hover:shadow-accent/20"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <FaCertificate className="text-accent text-3xl mt-1" />
                </motion.div>

                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-textPrimary hover:text-accent transition-colors"
                      >
                        {cert.title}
                      </a>
                    ) : (
                      <h3 className="text-xl font-bold text-textPrimary">
                        {cert.title}
                      </h3>
                    )}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-textPrimary transition-colors flex-shrink-0 ml-2"
                      >
                        <FaExternalLinkAlt size={16} />
                      </a>
                    )}
                  </div>

                  <p className="text-accent text-sm mb-2">
                    {cert.issuer} • {cert.date}
                  </p>

                  <p className="text-textSecondary text-sm mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
