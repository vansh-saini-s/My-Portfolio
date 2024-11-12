import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants for the portfolio cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const PortfolioCard = ({ image, title, websiteLink, githubLink }) => (
  <motion.div 
    className="relative group cursor-pointer"
    variants={cardVariants} // Apply animation to each card
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="rounded-2xl overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-[280px] object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        <ul className="flex flex-col gap-1 text-sm text-gray-600">
          {websiteLink && (
            <li>
              <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                Website
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </li>
          )}
          {githubLink && (
            <li>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center">
                GitHub
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </motion.div>
);

const LatestWorks = () => {
  const [visibleWorks, setVisibleWorks] = useState(3); 

  const works = [
    {
      image: "/Portfolio/IIIT_Una.png",
      title: "IIIT Una",
      websiteLink: "https://iiitu.ac.in/",
      githubLink: ""
    },
    {
      image: "/Portfolio/Portfolio.png",
      title: "Portfolio Website",
      websiteLink: "https://rachitjain-ashen.vercel.app/",
      githubLink: ""
    },
    {
      image: "/Portfolio/Code.png",
      title: "AI Summarizer",
      websiteLink: "",
      githubLink: "https://github.com/Rachit-31/AI_Summarizer"
    },
    {
      image: "/Portfolio/Gym.png",
      title: "Evogym",
      websiteLink: "",
      githubLink: "https://github.com/Rachit-31/FitJourney"
    }
  ];

  const handleShowMore = () => {
    setVisibleWorks(works.length); 
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-tertiary rounded-t-2xl">
      <div className="flex items-center justify-between mb-12">
        <div>
          <span className="text-sm mb-2  inline-block px-4 py-1 rounded-full bg-gray-100 font-semibold">• Portfolio</span>
          <h2 className="text-4xl font-medium">Latest Works</h2>
        </div>
      </div>

      {/* Grid with motion container */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2, 
            },
          },
        }}
      >
        {works.slice(0, visibleWorks).map((work, index) => (
          <a href={work.websiteLink || work.githubLink} key={index} target="_blank" rel="noopener noreferrer">
            <PortfolioCard
              image={work.image}
              title={work.title}
              websiteLink={work.websiteLink}
              githubLink={work.githubLink}
            />
          </a>
        ))}
      </motion.div>

      {visibleWorks < works.length && (
        <div className="mt-12 text-center">
          <motion.div
            className="inline-flex items-center gap-2 cursor-pointer group"
            onClick={handleShowMore} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          >
            <span className="font-medium">Check out More</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default LatestWorks;
