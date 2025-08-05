'use client';

import Footer from '../../components/Footer';
import Link from 'next/link';

export default function QualityAssuranceService() {

  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <section className="relative flex items-center justify-center bg-gradient-to-br from-green-600 to-green-800">
        <div className="relative z-20 text-center text-white px-4">
          <h3 className="text-5xl md:text-7xl font-bold mb-6">
            Software Quality Assurance as a Service
          </h3>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Reliable testing that finds bugs before your users do.
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
                We help you deliver better products by catching issues before your users do. Our QA support is hands-on, structured, and focused on what matters; making sure your product actually works the way it should.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Functional, regression, and exploratory testing
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Test planning and documentation
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Bug tracking, triage, and detailed reporting
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Cross-platform and device testing
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Manual and automated QA workflows
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ideal For</h3>
              <p className="text-lg text-gray-600 mb-8">
                Startups, agencies, platforms, and product teams that need confidence before release
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why It Matters</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Faster release cycles
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Fewer bugs in production
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Happier customers
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-3">✓</span>
                  Lower support costs
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Havantage</h3>
              <p className="text-lg text-gray-600 mb-8">
                We think like users and test like professionals. Every test adds value, and delivers real results.
              </p>

              <div className="text-center">
                <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300">
                  Request a Free QA Review
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