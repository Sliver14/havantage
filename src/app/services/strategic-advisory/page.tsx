'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function StrategicAdvisoryService() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md text-gray-800 shadow-lg' 
          : 'bg-transparent text-white'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo3.png"
                alt="Havantage Logo"
                width={32}
                height={32}
                className={`h-8 w-auto transition-opacity duration-300 ${
                  isScrolled ? 'opacity-100' : 'opacity-100'
                }`}
              />
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Havantage
              </h1>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="hover:text-blue-300 transition-colors duration-300 font-medium">Home</Link>
              <Link href="/about" className="hover:text-blue-300 transition-colors duration-300 font-medium">About</Link>
              <Link href="/services" className="hover:text-blue-300 transition-colors duration-300 font-medium">Services</Link>
              <Link href="/training" className="hover:text-blue-300 transition-colors duration-300 font-medium">Training</Link>
              <Link href="/contact" className="hover:text-blue-300 transition-colors duration-300 font-medium">Contact</Link>
              <Link href="/faq" className="hover:text-blue-300 transition-colors duration-300 font-medium">FAQ</Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden flex flex-col space-y-1">
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              }`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              }`}></span>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800' : 'bg-white'
              }`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-yellow-600 to-yellow-800">
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Strategic Advisory Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Hands-on support and expert insight for teams that want to improve how they work.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">What We Do</h2>
              <p className="text-lg text-gray-600 mb-8">
                We help leaders and teams make better decisions about how they build, lead, and deliver. Whether you&apos;re scaling, stuck, or just tired of guessing, we give you a clear outside perspective backed by experience.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Delivery and process audits
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  QA or PM setup and improvement
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Leadership coaching for new managers
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Support for team restructuring, workflow changes, or tool shifts
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">How We Work</h3>
              <p className="text-lg text-gray-600 mb-8">
                We don&apos;t just tell you what&apos;s wrong. We help you fix it. We work with your team, not around them. Our goal is to help you build something that works and lasts.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ideal For</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Founders or CTOs scaling delivery
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Managers looking to improve team performance
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Ops and HR leads setting up new departments
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Startups that need help structuring their workflows
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why It Matters</h3>
              <p className="text-lg text-gray-600 mb-8">
                Sometimes the hardest thing to see is what&apos;s right in front of you. A trusted outside view can save you time, money, and months of trial and error.
              </p>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Clear direction
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Fewer mistakes
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Stronger systems
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-3">✓</span>
                  Real accountability
                </li>
              </ul>

              <div className="text-center">
                <Link href="/contact" className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-300">
                  Let&apos;s talk about what&apos;s not working, working and what could work better.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}