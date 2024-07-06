import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/images/cimg1.png';
import image2 from '../assets/images/cimg2.png';
import image3 from '../assets/images/cimg3.png';
import image4 from '../assets/images/cimg4.png';
import dp1 from '../assets/images/ccs1.png';
import dp2 from '../assets/images/ccs2.png';
import dp3 from '../assets/images/ccs3.png';
import dp4 from '../assets/images/ccs4.png';
import cbmp1 from '../assets/images/cbm1.png';
import cbmp2 from '../assets/images/cbm2.png';
import cbmp3 from '../assets/images/cbm3.png';
import cbmp4 from '../assets/images/cbm4.png';
import ctem1 from '../assets/images/cte1.png';
import ctem2 from '../assets/images/cte2.png';
import ctem3 from '../assets/images/cte3.png';
import ctem4 from '../assets/images/cte4.png';
import OA1 from '../assets/images/coe1.png';
import OA2 from '../assets/images/coe2.png';
import OA3 from '../assets/images/coe3.png';
import OA4 from '../assets/images/coe4.png';

const courses = [
  { name: 'College of Computer Studies', code: 'CCS', src: image1 },
  { name: 'College of Business & Management', code: 'CBM', src: image2 },
  { name: 'College of Teacher Education', code: 'CTE', src: image3 },
  { name: 'College of Engineering', code: 'COE', src: image4 },
];

const courseDetails = [
  {
    name: 'College of Computer Studies',
    code: 'CCS',
    logo: image1,
    description: "The College of Computer Studies (CCS) is an academic institution focused on the study and advancement of computer science and information technology.",
    images: [dp1, dp2, dp3, dp4],
  },
  {
    name: 'College of Business & Management',
    code: 'CBM',
    logo: image2,
    description: "The College of Business & Management (CBM) focuses on providing education in various aspects of business administration and management principles.",
    images: [cbmp1, cbmp2, cbmp3, cbmp4],
  },
  {
    name: 'College of Teacher Education',
    code: 'CTE',
    logo: image3,
    description: "The College of Education is an academic institution dedicated to preparing students for careers in various educational fields.",
    images: [ctem1, ctem2, ctem3, ctem4],
  },
  {
    name: 'College of Engineering',
    code: 'COE',
    logo: image4,
    description: "The College of Engineering focuses on providing education in various engineering disciplines.",
    images: [OA1, OA2, OA3, OA4],
  },
];

const CoursesPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Courses</h2>
        <Slider {...settings}>
          {courses.map((course, index) => (
            <div key={index} className="px-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center mb-8"
              >
                <div className="flex-shrink-0 mb-4">
                  <motion.img
                    src={course.src}
                    alt={`${course.name} Logo`}
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{course.name}</h3>
              </motion.div>
            </div>
          ))}
        </Slider>
        {/* Course Details */}
        <div className="mt-16">
          {courseDetails.map((course, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start mb-16">
              {/* Images Section */}
              <div className="md:w-1/2 mx-auto md:mx-0 mb-4 md:mb-0">
                <div className="flex flex-col items-center md:items-start mb-4">
                  <motion.img
                    src={course.images[0]}
                    alt={`${course.name} Large`}
                    className="rounded-lg shadow-md w-3/4 h-auto mb-4 mx-auto md:mx-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex flex-row flex-wrap justify-center md:justify-start space-x-4">
                    {course.images.slice(1).map((image, idx) => (
                      <motion.img
                        key={idx}
                        src={image}
                        alt={`${course.name} Small ${idx + 1}`}
                        className="rounded-lg shadow-md w-1/3 md:w-auto h-auto mb-4 mx-auto md:mx-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Description Section */}
              <div className="md:w-1/2 md:pl-8 flex flex-col justify-center">
                <div className="flex items-center mb-2">
                  <img src={course.logo} alt={`${course.name} Logo`} className="w-16 h-16 mr-4" />
                  <div>
                    <p className="text-blue-700 text-6xl font-bold">{course.code}</p>
                    <h3 className="text-2xl font-bold">{course.name}</h3>
                  </div>
                </div>
                <p className="text-lg mb-4">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
