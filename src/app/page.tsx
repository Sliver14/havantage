'use client';

import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import { ArrowRight, Award, Users, Target, TrendingUp } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const programs = [
    {
      title: "Software Quality Assurance",
      description: "Master testing methodologies and quality control processes with industry-leading practices and tools.",
      icon: <Award className="w-12 h-12" />,
      featured: true
    },
    {
      title: "Project Management",
      description: "Learn comprehensive project planning, execution, and delivery strategies for successful outcomes.",
      icon: <Target className="w-8 h-8" />,
      featured: false
    },
    {
      title: "Scrum Master",
      description: "Become an agile leader with expertise in Scrum framework and team facilitation techniques.",
      icon: <Users className="w-8 h-8" />,
      featured: false
    },
    {
      title: "Management Readiness, Stepping Into Leadership",
      description: "Develop essential leadership skills and strategic thinking for management roles.",
      icon: <TrendingUp className="w-8 h-8" />,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section now starts here, header is in layout */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image Background */}
        <img 
          src="/hero-background.jpg" 
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-blue-900/60 z-10"></div>
        
        {/* Decorative Circle */}
        <div className="absolute left-10 top-1/4 w-64 h-64 bg-blue-400/20 rounded-full z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powering Growth with Premium Technology Services and High-Impact Skills
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Your advantage starts here. Opportunity isn't the problem, readiness is. We empower people and businesses with the right skills, talent, and technology solutions to excel in a fast-evolving world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => {
              window.location.href = '/training-form';
            }} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg cursor-pointer font-semibold transition-colors duration-300">
              Apply for Premium Training
            </button>
            <button onClick={() => {
              window.location.href = '/contact';
            }} className="border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3 cursor-pointer rounded-lg font-semibold transition-colors duration-300">
              Hire Trusted Tech Talent
            </button>
          </div>
        </div>

        {/* Appointment Form Card */}
        {/* <div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 max-w-sm z-20 hidden lg:block">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Make Appointment</h3>
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="email" placeholder="Email Address" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <input type="tel" placeholder="Phone Number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Service Type</option>
              <option>Training</option>
              <option>Consulting</option>
              <option>Talent Placement</option>
            </select>
            <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            <textarea placeholder="Message" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300">
              Book Appointment
            </button>
          </div>
        </div> */}
      </section>

      {/* Clear Value Proposition */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              What Makes Havantage Unique?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We Empower Individuals with Premium Training and Career Support, while helping businesses build High-Impact Teams through Trusted Talent Placement, AI and IT governance, security, quality assurance, and strategic advisory. Our integrated approach prepares you and your organization to perform, innovate, and lead confidently in today's fast-evolving tech landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Core Offerings Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Core Offerings
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tech Talent Development</h3>
              <p className="text-gray-600">Building skills and capabilities that empower individuals and teams to excel.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Talent Placement Support</h3>
              <p className="text-gray-600">Connecting businesses with trusted, high-impact tech professionals.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">AI Governance</h3>
              <p className="text-gray-600">Expert governance services and training to ensure responsible and compliant AI adoption.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">IT Governance, Risk, and Compliance</h3>
              <p className="text-gray-600">Frameworks to manage IT risks, ensure compliance, and align IT strategy with business goals.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Web and App Security Testing</h3>
              <p className="text-gray-600">Identifying vulnerabilities and strengthening defenses to protect your digital assets.</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Assurance as a Service</h3>
              <p className="text-gray-600">Scalable, on-demand quality assurance expertise ensuring software reliability.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/services" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Havantage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Why Choose Havantage
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Built on real results</h3>
                <p className="text-gray-600">and trusted partnerships.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Designed for people</h3>
                <p className="text-gray-600">who demand clarity and confidence.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Proven systems</h3>
                <p className="text-gray-600">unlocking better delivery, stronger teams, and lasting value.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              OUR LATEST PROGRAMS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What kind of Programs
              <br />
              We are Offering
            </h2>
          </div>

          {/* Programs Grid with Bottom Navigation */}
          <div className="mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white hover:bg-blue-600 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 relative overflow-hidden min-h-[350px] flex flex-col justify-between">
                  {/* Background Pattern - Only visible on hover */}
                  <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                      <path d="M0 40C13.3 40 26.7 35 40 40C53.3 45 66.7 35 80 40C93.3 45 106.7 35 120 40V80H0V40Z" fill="currentColor"/>
                      <path d="M0 20C13.3 20 26.7 25 40 20C53.3 15 66.7 25 80 20C93.3 15 106.7 25 120 20V60H0V20Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-blue-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300">
                      <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                        {program.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-blue-100 mb-6 leading-relaxed transition-colors duration-300">
                      {program.description}
                    </p>
                  </div>
                  <button className="text-blue-600 group-hover:text-white font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Read more <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            {/* Navigation - horizontal, centered */}
            {/* <div className="flex flex-row gap-4 justify-center items-center mt-10">
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm">
                <ArrowRight className="w-4 h-4 rotate-180" /> Prev
              </button>
              <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-sm">
                Next <ArrowRight className="w-4 h-4" />
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Client Highlights & Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Client Highlights & Testimonials
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">Trusted by:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
              {/* Placeholder for client logos */}
              <div className="h-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Client Logo</span>
              </div>
              <div className="h-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Client Logo</span>
              </div>
              <div className="h-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Client Logo</span>
              </div>
              <div className="h-16 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 font-semibold">Client Logo</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "Havantage's training and placement support changed my career trajectory."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">JD</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Jane D.</p>
                  <p className="text-gray-600">QA Engineer</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-gray-600 mb-4 italic">
                "Their AI Governance program helped us navigate complex compliance challenges."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-semibold">JS</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">John S.</p>
                  <p className="text-gray-600">CTO</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="text-center mt-8">
            <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold">
              Read more Success Stories
            </a>
          </div> */}
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            How to Get Started
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Explore our full range of services.</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Enroll or schedule a free consultation.</h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Start advancing your career or business.</h3>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Get Your Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Contact & Support
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Questions? Reach out, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Contact Us
              </a>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Live Chat
              </button>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Newsletter Signup
              </h3>
              <p className="text-gray-600 mb-6">
                Stay ahead with exclusive insights, training news, and job openings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Subscribe Now
                </button>
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
