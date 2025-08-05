'use client';

import Footer from '../../components/Footer';
import Link from 'next/link';

export default function ProjectManagementService() {

  return (
    <div className="min-h-screen">
      

      {/* Hero Section */}
      <section className="relative  flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="relative z-20 text-center text-white px-4">
          <h3 className="text-5xl md:text-7xl font-bold mb-6">
            Project Management as a Service
          </h3>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Leadership, structure, and delivery support when your team needs it most.
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
                We help you run projects the way they&apos;re meant to be run — with clarity, accountability, and calm. Whether you&apos;re understaffed, overwhelmed, or scaling fast, we bring in the structure and leadership to get things done.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">What We Offer</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  End-to-end project oversight
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Agile and hybrid frameworks
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Timeline, risk, and budget management
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Stakeholder communication and reporting
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Delivery process design
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Ideal For</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Founders juggling too much
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Delivery teams with no PM
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Agencies who need better client coordination
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Fintech and product teams shipping fast
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why It Matters</h3>
              <ul className="text-lg text-gray-600 mb-8 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  On-time, on-budget delivery
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Fewer delays and bottlenecks
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Better team alignment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3">✓</span>
                  Stronger client and partner confidence
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Havantage</h3>
              <p className="text-lg text-gray-600 mb-8">
                We don&apos;t just manage projects. We lead them to success.
              </p>

              <div className="text-center">
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Book a Project Consultation
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