import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/personalInfo';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-secondary py-20 px-4 flex items-center">
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}dada
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-4">
            <span className="text-accent">06.</span> Get In Touch
          </h2>
          <div className="h-1 w-32 bg-accent mt-4 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-primary p-8 md:p-12 rounded-lg border border-accent/20"
        >
          <p className="text-textSecondary text-lg mb-8 max-w-2xl mx-auto">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-accent text-primary font-bold text-lg rounded hover:bg-opacity-80 transition-all duration-300"
          >
            <FaEnvelope /> Say Hello
          </motion.a>

          <p className="text-textSecondary text-sm mt-3 mb-12">
            {personalInfo.email}
          </p>

          <div className="flex justify-center gap-8 mb-8">
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors duration-300"
            >
              <FaGithub size={35} />
              <span className="text-sm font-medium">GitHub</span>
            </motion.a>
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors duration-300"
            >
              <FaLinkedin size={35} />
              <span className="text-sm font-medium">LinkedIn</span>
            </motion.a>
            <motion.a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 text-textSecondary hover:text-accent transition-colors duration-300"
            >
              <FaInstagram size={35} />
              <span className="text-sm font-medium">Instagram</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary py-8 px-4 border-t border-accent/20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-textSecondary flex items-center justify-center gap-2"
        >
          Built with <FaHeart className="text-accent" /> by {personalInfo.name}
        </motion.p>
        <motion.a
          href={`mailto:${personalInfo.email}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-accent hover:underline text-sm mt-2 inline-block"
        >
          {personalInfo.email}
        </motion.a>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-textSecondary text-sm mt-2"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export { Contact, Footer };
