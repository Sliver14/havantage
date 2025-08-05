'use client';

import Link from 'next/link';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* <section className="bg-gray-50 py-10 border-b border-gray-200 mb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">About Us</h1> */}
          {/* <p className="text-lg text-center text-gray-500">At Havantage Technologies, we believe readiness, not opportunity, is what separates potential from performance.</p> */}
        {/* </div>
      </section> */}
      {/* Main content starts here, header and hero removed */}

      {/* About Content */}
      <section className="py-20 bg-white">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">About Us</h1>
      
        <div className="container mx-auto px-4">
        
          <div className="max-w-4xl mx-auto">
          
            <div className="prose prose-lg mx-auto text-gray-600 mb-16">
              <p className="text-xl leading-relaxed mb-8">
                At Havantage Technologies, we believe readiness, not opportunity, is what separates potential from performance. That&apos;s why we focus on what truly moves people and businesses forward: skills, strategy, and trusted support.
              </p>
              <p className="text-xl leading-relaxed mb-8">
                We didn&apos;t start with a theory. We started with a challenge. Too many professionals had credentials but lacked confidence. Too many businesses had talent gaps and unclear standards for quality, security, and compliance. So we built Havantage to be the solution. A technology partner that develops capable people, strengthens tech teams, and raises the bar for governance and delivery.
              </p>
              <p className="text-xl leading-relaxed mb-8">
                From premium training programs to talent placement, AI governance, and quality assurance, we equip our clients with what they actually need to grow. Clarity, competence, and results. Whether you&apos;re preparing to lead, hiring for impact, or improving how your organization operates, we help you meet the moment with confidence.
              </p>
              <p className="text-xl leading-relaxed">
                We serve individuals ready to move beyond theory and organizations that expect more than just checkboxes. Our approach is high-touch, high-impact, and built for the pace of change in today&apos;s tech landscape.
              </p>
            </div>

            {/* What Makes Us Different */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                What Makes Us Different?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">We train for real-world readiness</h3>
                  <p className="text-gray-600">not just certificates.</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">We place talent that performs</h3>
                  <p className="text-gray-600">not just fills seats.</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">We guide organizations through complexity</h3>
                  <p className="text-gray-600">ensuring trust, compliance, and long-term success.</p>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To help professionals grow and businesses perform by delivering premium training, strategic advisory, and trusted talent in today&apos;s most critical tech domains.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the go-to partner for skills, systems, and strategies that drive lasting success in a fast-evolving digital world.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Core Values
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">H – Honesty</h3>
                  <p className="text-gray-600">We speak clearly, act transparently, and build lasting trust.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">A – Accountability</h3>
                  <p className="text-gray-600">We own outcomes, not just activity. What we promise, we deliver.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">V – Value Creation</h3>
                  <p className="text-gray-600">We solve problems that matter and focus on lasting results.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">A – Adaptability</h3>
                  <p className="text-gray-600">We embrace change and improve through every challenge.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">N – No Shortcuts</h3>
                  <p className="text-gray-600">We lead with quality because real progress takes real work.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">T – Team First</h3>
                  <p className="text-gray-600">We win together, support one another, and lead with respect.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">A – Action-Oriented</h3>
                  <p className="text-gray-600">We believe progress beats perfection. We move with purpose.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">G – Growth Mindset</h3>
                  <p className="text-gray-600">We learn, evolve, and keep raising the standard.</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-blue-600 mb-2">E – Excellence</h3>
                  <p className="text-gray-600">We don&apos;t settle for &quot;good enough.&quot; We aim for great.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Let&apos;s Move Forward Together
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you&apos;re stepping into leadership, scaling your team, or setting a new standard in your industry, Havantage is here to help you do it with clarity and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/training" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                Apply for Premium Training
              </Link>
              <Link href="/services" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Hire Trusted Tech Talent
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}