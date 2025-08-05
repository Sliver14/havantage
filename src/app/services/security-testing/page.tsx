'use client';

import { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';

export default function SecurityTestingService() {
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
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-red-600 to-red-800">
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Application and Web Security Testing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert-led security testing to protect your apps, users, and reputation.
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
                We help protect your digital assets with expert-led vulnerability testing. We test your applications for real-world risks; the kind that hurt users, damage brands, and cost businesses more than just money.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Website and web app penetration testing
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Mobile app security testing
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  OWASP standards and risk reports with real explanations
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Actionable steps to fix what we find
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  A team that talks to your developers, not just sends PDFs
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">How We Work</h3>
              <p className="text-lg text-gray-600 mb-8">
                We simulate real attacks. We look for what others miss. And we give you context — not just red flags, but what they actually mean for your product and your business.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ideal For</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Platforms that handle sensitive user data
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Companies preparing for compliance or audits
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Teams that want to reduce risk before launch
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Founders who care about trust and safety
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why It Matters</h3>
              <p className="text-lg text-gray-600 mb-8">
                Security isn&apos;t a checklist. It&apos;s protection for everything you&apos;ve built. One breach can set you back months. We help you stay ahead.
              </p>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Find and fix vulnerabilities
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Improve security posture
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Meet compliance requirements
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3">✓</span>
                  Reduce business risk
                </li>
              </ul>

              <div className="text-center">
                <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                  Schedule a Security Assessment
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