import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-siemens-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 relative bg-siemens-teal-500 rounded-lg flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.svg"
                  alt="Electric Switchgear Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-siemens-teal-500">
                Electric Switchgear
              </h3>
            </div>
            <p className="text-siemens-gray-300 mb-4">
              Leading provider of innovative electric switchgear solutions for industrial and commercial applications.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-siemens-gray-300 hover:text-siemens-teal-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-siemens-gray-300 hover:text-siemens-teal-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-siemens-gray-300 hover:text-siemens-teal-500 transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-siemens-teal-500">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-siemens-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-siemens-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-siemens-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-siemens-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-siemens-teal-500">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products#low-voltage" className="text-siemens-gray-300 hover:text-white transition-colors">
                  Low Voltage Switchgear
                </Link>
              </li>
              <li>
                <Link href="/products#medium-voltage" className="text-siemens-gray-300 hover:text-white transition-colors">
                  Medium Voltage Switchgear
                </Link>
              </li>
              <li>
                <Link href="/products#high-voltage" className="text-siemens-gray-300 hover:text-white transition-colors">
                  High Voltage Switchgear
                </Link>
              </li>
              <li>
                <Link href="/products#distribution" className="text-siemens-gray-300 hover:text-white transition-colors">
                  Distribution Boards
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-siemens-teal-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-siemens-teal-500 mt-1" />
                <span className="text-siemens-gray-300">
                  123 Industrial Park, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-siemens-teal-500" />
                <span className="text-siemens-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-siemens-teal-500" />
                <span className="text-siemens-gray-300">info@electricswitchgear.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-siemens-gray-700 mt-8 pt-8 text-center">
          <p className="text-siemens-gray-400">
            &copy; {new Date().getFullYear()} Electric Switchgear Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
