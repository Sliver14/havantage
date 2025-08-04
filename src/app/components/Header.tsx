"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span>info@havantage.com</span>
              <span>Call Now: +234 123 4567</span>
            </div>
            <div className="flex space-x-3">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 w-full z-50 transition-all duration-300 bg-blue-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-3">
              <img
                src="/logo3.png"
                alt="Havantage Logo"
                className={`h-8 transition-opacity duration-300 `}
              />
              <h1 className={`text-2xl font-bold transition-colors duration-300 `}>
                Havantage
              </h1>
            </a>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className={`hover:text-blue-300 transition-colors duration-300 font-medium ${pathname === '/' ? 'border-b-4 border-white pb-1' : ''}`}>Home</a>
              <span className="text-gray-400">|</span>
              <a href="/about" className={`hover:text-blue-300 transition-colors duration-300 font-medium ${pathname.startsWith('/about') ? 'border-b-4 border-white pb-1' : ''}`}>About</a>
              <span className="text-gray-400">|</span>
              <a href="/services" className={`hover:text-blue-300 transition-colors duration-300 font-medium ${pathname.startsWith('/services') ? 'border-b-4 border-white pb-1' : ''}`}>Services</a>
              <span className="text-gray-400">|</span>
              <a href="/training" className={`hover:text-blue-300 transition-colors duration-300 font-medium ${pathname.startsWith('/training') ? 'border-b-2 border-white pb-1' : ''}`}>Training</a>
              <span className="text-gray-400">|</span>
              <a href="/contact" className={`hover:text-blue-300 transition-colors duration-300 font-medium ${pathname.startsWith('/contact') ? 'border-b-4 border-white pb-1' : ''}`}>Contact</a>
              <span className="text-gray-400">|</span>
              <a href="/faq" className={`hover:text-blue-300 transition-colors duration-300 font-medium ${pathname.startsWith('/faq') ? 'border-b-4 border-white pb-1' : ''}`}>FAQ</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300 ml-4">
                Get Started
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col space-y-1"
            >
              <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"} ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"} ${isMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"} ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>
          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
            <div className="py-4 space-y-2">
              <a href="/" className="block py-2 hover:text-blue-300 transition-colors duration-300">Home</a>
              <a href="/about" className="block py-2 hover:text-blue-300 transition-colors duration-300">About</a>
              <a href="/services" className="block py-2 hover:text-blue-300 transition-colors duration-300">Services</a>
              <a href="/training" className="block py-2 hover:text-blue-300 transition-colors duration-300">Training</a>
              <a href="/contact" className="block py-2 hover:text-blue-300 transition-colors duration-300">Contact</a>
              <a href="/faq" className="block py-2 hover:text-blue-300 transition-colors duration-300">FAQ</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}