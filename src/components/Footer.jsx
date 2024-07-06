import React from 'react';
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { IoMailOpen } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Follow us on:</h3>
          <ul className="ml-0">
            <li className="flex items-center">
              <FaFacebook className="h-4 w-4 mr-2" />
              <a
                href="https://www.facebook.com/benedictocollegeofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Campuses:</h3>
          <ul>
            <li>Mandaue Campus</li>
            <li>Techvoc</li>
            <li>Cebu Campus</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Contact Us:</h3>
          <ul>
            <li className="flex items-center">
              <IoMailOpen className="h-4 w-4 mr-2" />
              <a href="mailto:eo@benedictocollege.edu.ph" className="hover:text-orange-500">
                eo@benedictocollege.edu.ph
              </a>
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="h-4 w-4 mr-2" />
              <a href="tel:09088998600" className="hover:text-orange-500">
                0908 899 8600
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4">
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Benedicto College. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
