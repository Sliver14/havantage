'use client';

import Footer from '../components/Footer';
import Link from 'next/link';

export default function Services() {

  return (
    <div className="min-h-screen">
      {/* <section className="bg-gray-50 py-10 border-b border-gray-200 mb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Our Services</h1>
          <p className="text-lg text-center text-gray-500">We support teams, train professionals, and deliver critical solutions that move businesses forward.</p>
        </div>
      </section> */}
      {/* Main content starts here, header and hero removed */}

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">
              Explore Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Every service is designed to solve real problems and drive lasting results.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Project Management as a Service */}
            <Link href="/services/project-management" className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 block hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">1. Project Management as a Service</h3>
              <p className="text-gray-600 mb-6">
                Leadership, structure, and delivery support when your team needs it most.
              </p>
              <span className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn More →
              </span>
            </Link>

            {/* Software Quality Assurance as a Service */}
            <Link href="/services/quality-assurance" className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 block hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">2. Software Quality Assurance as a Service</h3>
              <p className="text-gray-600 mb-6">
                Reliable testing that finds bugs before your users do.
              </p>
              <span className="text-green-600 hover:text-green-700 font-semibold">
                Learn More →
              </span>
            </Link>

            {/* Application and Web Security Testing */}
            <Link href="/services/security-testing" className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 block hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3. Application and Web Security Testing</h3>
              <p className="text-gray-600 mb-6">
                Expert-led security testing to protect your apps, users, and reputation.
              </p>
              <span className="text-red-600 hover:text-red-700 font-semibold">
                Learn More →
              </span>
            </Link>

            {/* Tech Talent Development */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">4. Tech Talent Development (10-week tracks)</h3>
              <p className="text-gray-600 mb-6">
                Premium, practical training programs that build real-world delivery skills.
              </p>
              <Link href="/training" className="text-purple-600 hover:text-purple-700 font-semibold">
                Learn More →
              </Link>
            </div>

            {/* Strategic Advisory Services */}
            <Link href="/services/strategic-advisory" className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 block hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">5. Strategic Advisory Services</h3>
              <p className="text-gray-600 mb-6">
                Hands-on support and expert insight for teams that want to improve how they work.
              </p>
              <span className="text-yellow-600 hover:text-yellow-700 font-semibold">
                Learn More →
              </span>
            </Link>

            {/* Talent Placement and Recruitment */}
            <Link href="/services/talent-placement" className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300 block hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">6. Talent Placement and Recruitment</h3>
              <p className="text-gray-600 mb-6">
                Pre-vetted talent that fits your culture, performs on day one, and grows with you.
              </p>
              <span className="text-indigo-600 hover:text-indigo-700 font-semibold">
                Learn More →
              </span>
            </Link>
          </div>
          
          {/* <div className="text-center mt-16">
            <a href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
              Explore All Services
            </a>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}