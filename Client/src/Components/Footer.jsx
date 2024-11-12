import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import { Link } from 'react-scroll'; 

const Footer = () => {
  const navLinks = [
    { name: 'Home', to: 'home' }, 
    { name: 'About Me', to: 'aboutme' },
    { name: 'Experience', to: 'experience' },
    { name: 'Portfolio', to: 'projects' }, 
    { name: 'Contact Me', to: 'contact' }
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/vansh', ariaLabel: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/vansh-697914256/', ariaLabel: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/vansh/', ariaLabel: 'Instagram' },
  ];

  return (
    <footer className="bg-[#161616] text-white min-h-[80px] border-t border-[#252525] py-4 md:py-6 lg:py-8">
      <div className="max-w-[1800px] mx-auto px-6 md:px-8 lg:px-10 h-full flex flex-col md:flex-row items-center justify-between">
        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-70} 
              className="cursor-pointer text-[#999999] hover:text-white transition-colors duration-200 text-sm"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          {socialLinks.map(({ icon, href, ariaLabel }) => (
            <a
              key={ariaLabel}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999999] hover:text-white transition-colors duration-200 text-xl"
              aria-label={ariaLabel}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Email */}
        <a
          href="mailto:rachitjainjaipur@gmail.com"
          className="text-white hover:text-[#999999] transition-colors duration-200 text-base md:text-[28px] font-extralight tracking-normal mt-2 md:mt-0"
        >
          rachitjainjaipur@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
