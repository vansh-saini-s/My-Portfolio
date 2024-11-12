// src/Homepage.js
import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Homepage = () => {

  const taglines = [
    "I am a Software Developer",
    "I am a Full stack Web Developer",
    "I am a competitive programmer",
    "I am a Tech Enthusiast"
  ];

  const [currentTagline, cycleTagline] = useCycle(...taglines);

  // Animation variants for different sections
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, delay: 0.2 } }
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
  };

  return (
    <motion.div 
      className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden bg-tertiary"
      initial="hidden"
      animate="visible"
    >
      {/* Text Section */}
      <motion.div 
        className="flex-1 flex flex-col justify-center items-start md:items-end ml-4 md:ml-11 relative"
        variants={textVariant}
      >
        <h1 className="text-9xl md:text-[13rem] tracking-tighter px-4">Hello</h1>

        {/* Typing effect for taglines */}
        <motion.p
          className="mt-2 text-3xl md:text-2xl"
          key={currentTagline}
          animate={{ opacity: [0, 1], y: [-20, 0] }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => {
            setTimeout(cycleTagline, 2000); // Cycle tagline after 2 seconds
          }}
        >
          - {currentTagline}
        </motion.p>

        {/* Social Links Section */}
        <div className="absolute left-0 bottom-0 mb-4 flex items-center">
          {/* Vertical Line */}
          <div className="h-10 w-[2px] bg-gray-300 mr-4"></div>

          <motion.div className="flex flex-col space-y-2" variants={iconVariant}>
            <motion.a href="https://github.com/Rachit-31" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black" whileHover={{ scale: 1.1 }}>
              <FaGithub className="mr-2" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/rachit-jain-697914256/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black" whileHover={{ scale: 1.1 }}>
              <FaLinkedin className="mr-2" />
            </motion.a>
            <motion.a href="https://www.instagram.com/thisisrachitjain/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black" whileHover={{ scale: 1.1 }}>
              <FaInstagram className="mr-2" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-1 h-[50vh] md:h-full w-full overflow-hidden mt-8 md:mt-0"
        variants={imageVariant}
      >
        <motion.img
          src="/Rachit2.png"
          alt="Rachit Jain"
          className="object-cover w-full h-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
