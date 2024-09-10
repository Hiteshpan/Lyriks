import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-400 py-8 mt-10 px-6">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h2 className="text-white text-sm font-semibold mb-4">Company</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Jobs
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                For the Record
              </a>
            </li>
          </ul>
        </div>

        {/* Communities */}
        <div>
          <h2 className="text-white text-sm font-semibold mb-4">Communities</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                For Artists
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Developers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Advertising
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Investors
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Vendors
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-white text-sm font-semibold mb-4">
            Useful Links
          </h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Web Player
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white">
                Free Mobile App
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex justify-start md:justify-end items-start space-x-4">
          <a href="#" className="hover:text-white">
            <FaInstagram size={27} />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter size={27} />
          </a>
          <a href="#" className="hover:text-white">
            <FaFacebook size={27} />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-500 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Lyriks AB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
