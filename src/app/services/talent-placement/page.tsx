'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';

export default function TalentPlacementService() {
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
            <a href="/" className="flex items-center space-x-3">
              <img
                src="/logo3.png"
                alt="Havantage Logo"
                className={`h-8 transition-opacity duration-300 ${
                  isScrolled ? 'opacity-100' : 'opacity-100'
                }`}
              />
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}>
                Havantage
              </h1>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="/" className="hover:text-blue-300 transition-colors duration-300 font-medium">Home</a>
              <a href="/about" className="hover:text-blue-300 transition-colors duration-300 font-medium">About</a>
              <a href="/services" className="hover:text-blue-300 transition-colors duration-300 font-medium">Services</a>
              <a href="/training" className="hover:text-blue-300 transition-colors duration-300 font-medium">Training</a>
              <a href="/contact" className="hover:text-blue-300 transition-colors duration-300 font-medium">Contact</a>
              <a href="/faq" className="hover:text-blue-300 transition-colors duration-300 font-medium">FAQ</a>
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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Talent Placement and Recruitment
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Pre-vetted talent that fits your culture, performs on day one, and grows with you.
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
                We connect high-performing professionals with companies that value delivery, work-culture, and growth.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  Pre-vetted talent in QA, PM, Security, and Tech Support
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  Role alignment and team fit checks
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  Candidates trained in real-world tools and workflows
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  A partner who understands both sides, company and candidate
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-3">✓</span>
                  Ongoing placement support
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">How We Work</h3>
              <p className="text-lg text-gray-600 mb-8">
                We train. We vet. We recommend. We only send candidates we trust because your team is your delivery engine.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">For Companies</h3>
              <p className="text-lg text-gray-600 mb-8">
                You get people who are skilled, ready, and serious about the work. No long lists. Just good fits.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">For Candidates</h3>
              <p className="text-lg text-gray-600 mb-8">
                You get placed where your skills are needed, your work is valued, and your growth matters.
              </p>

              <div className="text-center space-y-4">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Submit Hiring Needs
                  </a>
                  <a href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300">
                    Join the Talent Network
                  </a>
                </div>
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