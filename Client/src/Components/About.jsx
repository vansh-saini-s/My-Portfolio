import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { ArrowUpRight, Plus } from 'lucide-react';

// Animation variants for scroll-based animations
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
};

const AboutMe = () => {
  const techStack = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'C++', 'SQL', 
    'GraphQL', 'GitHub', 'MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS'
  ];  

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h1 className="text-4xl font-medium mb-6">About Me</h1>
              <p className="text-gray-600 leading-relaxed">
                My name is Rachit Jain. I am currently pursuing a Bachelor's degree in{" "}
                <span className="font-semibold text-primary">
                  Electronics and Communication Engineering
                </span>{" "}
                at <span className="font-semibold text-primary">IIIT Una</span>.
                Alongside my studies, I specialize in{" "}
                <span className="font-semibold text-primary">
                  Full Stack Web Development
                </span>
                , and I am a dedicated{" "}
                <span className="font-semibold text-primary">
                  Competitive Programmer
                </span>
                .
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 opacity-70 text-black px-4 py-2 rounded-lg"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hidden md:block opacity-10"
              variants={fadeIn}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724972.png"
                alt="arrow"
                className="w-[15rem] filter brightness-150"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            {/* Stats Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm"
              variants={fadeIn}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 6v12M6 12h12" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-5xl font-semibold mb-4">2+ Years</div>
                <p className="text-gray-600">
                  Experience in Web Development and Competitive Programming.
                </p>
              </div>

              {/* Profile Image */}
              <motion.div className="relative" variants={fadeIn}>
                <img
                  src="/Rachit2.png"
                  alt="Rachit Jain"
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            </motion.div>

            {/* Experience Points */}
            <motion.div className="space-y-6" variants={fadeIn}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-600">
                  Currently pursuing a degree in{" "}
                  <span className="font-semibold">
                    Electronics and Communication Engineering
                  </span>{" "}
                  at IIIT Una.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-600">
                  Experienced{" "}
                  <span className="font-semibold">
                    Full Stack Web Developer
                  </span>{" "}
                  with proficiency in building scalable web applications.
                </p>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <Plus className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-gray-600">
                  Passionate about{" "}
                  <span className="font-semibold">Competitive Programming</span>
                  , with a drive to solve complex algorithms and challenges.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
