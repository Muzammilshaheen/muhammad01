'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTiktok, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-gray-400 py-12 bottom-0 left-0 w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem nisi iste impedit odio quae sequi at error iusto. Recusandae sunt odit fuga consequuntur laborum quasi porro labore ullam. Officiis, iure.</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Links</h3>
          <ul>
            <li>
              <Link href="/" className="hover:text-red-500">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-red-500">About</Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-red-500">Courses</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
          <ul>
            <li className="flex items-center space-x-2">
              <FaFacebook className="text-lg text-white hover:text-red-500 transition duration-200" />
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-2 mt-2">
              <FaTiktok className="text-lg text-white hover:text-red-500 transition duration-200" />
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                TikTok
              </a>
            </li>
            <li className="flex items-center space-x-2 mt-2">
              <FaWhatsapp className="text-lg text-white hover:text-red-500 transition duration-200" />
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
          <p className="flex items-center space-x-2">
            <FaEnvelope className="text-lg text-white hover:text-red-500 transition duration-200" />
            <a
              href="mailto:muzammilshaheen77@gmail.com"
              className="hover:text-red-500"
            >
              muzammilshaheen77@gmail.com
            </a>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <FaPhone className="text-lg text-white hover:text-red-500 transition duration-200" />
            <span className="hover:text-red-500">03033105085</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center p-4 bg-gray-800 text-white">
      <p className="text-sm mt-4">
        &copy; {new Date().getFullYear()} Muzammil Shaheen. All rights reserved.
      </p>
      <div className="flex space-x-4 mt-2 mr-9">
  <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-500">
    <FaGithub size={20} />
  </a>
  <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-500">
    <FaTwitter size={20} />
  </a>
  <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-500">
    <FaLinkedin size={20} />
  </a>
  <a href="https://instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-500">
    <FaInstagram size={20} />
  </a>
</div>
</div>
    </footer>
  );
};

export default Footer;
