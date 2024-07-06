import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/hero-bg.png';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';
import image4 from '../assets/images/image4.png';

const Hero = () => {
    const handleEnrollClick = () => {
      console.log('Enroll button clicked');
    };
  
    return (
      <div className="overflow-x-hidden">
        <motion.div
          className="relative bg-cover bg-center h-[80vh] w-full"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              className="text-white"
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', stiffness: 50, delay: 0.2 }}
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-2">WELCOME TO</h1>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">BENEDICTO COLLEGE</h2>
              <button
                onClick={handleEnrollClick}
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
              >
                Enroll Now
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  };

const AboutUs = () => {
    return (
      <motion.div
        className="bg-gray-100 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Us
          </motion.h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-lg  mb-4 font-semibold">
                Your path to <span className="text-blue-700">greatness and success</span> starts here.
              </p>
              <p className="text-lg">
                Benedicto College is a great school to hone your knowledge, skills, and sharpen your abilities.
                Become one of our students and together we can work to pave your way to your successful and brighter future.
              </p>
            </motion.div>
            <motion.div
              className="md:w-1/2 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#view-image1">
                <motion.img
                  src={image1}
                  alt="Description 1"
                  className="rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a href="#view-image2">
                <motion.img
                  src={image2}
                  alt="Description 2"
                  className="rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a href="#view-image3">
                <motion.img
                  src={image3}
                  alt="Description 3"
                  className="rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a href="#view-image4">
                <motion.img
                  src={image4}
                  alt="Description 4"
                  className="rounded-lg shadow-md"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
    </div>
  );
};

export default HomePage;