import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Link } from "react-scroll";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [".sidebar", { transform: "translateX(0%)" }, { duration: 0.6 }],
          ["li", { transform: "scale(1)", opacity: 1 }, { delay: stagger(0.05), at: "-0.1" }],
          [".backdrop", { opacity: 0.5 }, { duration: 0.5 }],
        ]
      : [
          ["li", { transform: "scale(0.5)", opacity: 0 }, { delay: stagger(0.05, { from: "last" }), at: "<" }],
          [".sidebar", { transform: "translateX(100%)" }, { at: "-0.1" }],
          [".backdrop", { opacity: 0 }, { at: "<" }],
        ];

    animate(menuAnimations);
  }, [isOpen, animate]);

  return scope;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const scope = useMenuAnimation(isOpen);

  // Add event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={scope} className="relative">
      <div
        className={`w-full fixed top-0 z-50 transition-all duration-300 ${
          isBlurred
            ? "bg-white/80 backdrop-blur-md shadow-lg"
            : "bg-tertiary"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Links */}
            <div className="flex items-center space-x-4 gap-14">
              <div className="flex-shrink-0">
                <a href="#" className="text-black text-xl font-bold">
                  <img src="/Jaguar.png" alt="logo" className="w-12" />
                </a>
              </div>
              <div className="hidden md:flex space-x-3">
                <Link
                  to="aboutme"
                  smooth={true}
                  duration={500}
                  className="text-black px-2 py-2 rounded-md text-sm font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  About Me
                </Link>
                <Link
                  to="experience"
                  smooth={true}
                  duration={500}
                  className="text-black px-2 py-2 rounded-md text-sm font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="text-black px-2 py-2 rounded-md text-sm font-medium cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
              </div>
            </div>

            {/* Contact and Mobile Menu Button */}
            <div className="hidden md:block">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
              >
                Contact Me
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop fixed inset-0 bg-black transition-opacity ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
        style={{ opacity: isOpen ? 0.5 : 0 }} // Adjust backdrop opacity based on menu state
      ></div>

      {/* Sidebar Menu */}
      <nav
        className={`sidebar fixed right-0 top-0 w-64 h-full bg-gray-900 transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ zIndex: 100 }} // Ensure sidebar is above the navbar
      >
        <ul className="space-y-4 p-4">
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="aboutme"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}