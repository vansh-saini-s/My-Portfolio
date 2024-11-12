import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); // Loading state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when form is submitted

    emailjs
      .send(
        'service_6hecu6p',
        'template_0rbavtj',
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        'gThWRRtokMwL2sGwr'
      )
      .then((response) => {
        toast.success('Email sent successfully!');
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setLoading(false); // Reset loading state
      })
      .catch((error) => {
        toast.error('Error sending email. Please try again.');
        console.error('Error sending email:', error);
        setLoading(false); // Reset loading state
      });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="max-w-2xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-8">
        <div className="inline-block px-4 py-1 rounded-full bg-gray-100 font-semibold text-sm mb-4">
          • Contact Me
        </div>
        <motion.h1
          className="text-3xl md:text-4xl font-medium mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Get in Touch with Rachit Jain
        </motion.h1>
        <motion.p
          className="text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I’d love to connect with you! Whether you have a project in mind, need development advice, or want to collaborate, feel free to reach out by filling out the form below.
        </motion.p>
      </div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div>
          <label htmlFor="firstName" className="block text-sm mb-2">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm mb-2">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="rachitjainjaipur@gmail.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Leave a message..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 px-6 rounded-full flex items-center justify-center gap-2 transition group ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black text-white hover:opacity-90'
          }`}
          disabled={loading}
        >
          {loading ? (
            <span className="loader"></span> // Replace this with a spinner if you have one
          ) : (
            <>
              Send Message
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
