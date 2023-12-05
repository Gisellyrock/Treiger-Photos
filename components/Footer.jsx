import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a
            href="https://twitter.com/AdrianTreiger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.facebook.com/adrian.treiger"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/treiger_photos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm">© 2024 s2 Giselly Rocha - Newstech.</p>
      </div>
    </footer>
  );
};

export default Footer;
