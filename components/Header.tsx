"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-40">
        <div className="flex justify-between items-center h-40">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <img
              src="/logo.jpeg"
              alt="Electric Switchgear Solutions"
              className="h-40 md:h-40 w-auto object-contain -ml-4 md:-ml-6"
              style={{ transform: 'scale(2)', transformOrigin: 'left center' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-siemens-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="/"
              className="block text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-siemens-gray-700 hover:text-siemens-teal-500 font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
