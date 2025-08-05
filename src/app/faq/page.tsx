'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the training beginner-friendly?",
      answer: "Yes. You don't need prior tech experience. We guide you through each step."
    },
    {
      question: "Are sessions online or in person?",
      answer: "All sessions are online and live. You'll join interactive classes and real-world projects."
    },
    {
      question: "How long is the training?",
      answer: "Each program runs for 10 weeks."
    },
    {
      question: "What tools will I learn in QA or PM training?",
      answer: "You'll use tools like JIRA, TestRail, Postman, Trello, and more — all real-world."
    },
    {
      question: "Do you help with internships or job placement?",
      answer: "Yes. Top participants are connected to internships and job opportunities through our network."
    },
    {
      question: "Can we outsource our QA or PM work to Havantage?",
      answer: "Absolutely. We provide both short-term and ongoing support for companies."
    },
    {
      question: "How are you different from other bootcamps?",
      answer: "We focus on real experience, not just content. You'll work on real projects, receive mentorship, and build true confidence."
    },
    {
      question: "Do you offer corporate training?",
      answer: "Yes. We customize training for companies based on skill gaps, tools, and delivery goals."
    },
    {
      question: "Do you offer custom advisory for teams?",
      answer: "Yes. From process setup to leadership coaching, we support your team at every level."
    },
    {
      question: "How do I get started?",
      answer: "Use the contact form or apply to the training cohort. We'll respond quickly."
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gray-50 py-10 border-b border-gray-200 mb-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Frequently Asked Questions</h1>
          <p className="text-lg text-center text-gray-500">Find answers to common questions about our services and how we can help your business.</p>
        </div>
      </section>
      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
              Common Questions
            </h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                        openFaq === index ? 'rotate-180' : ''
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </button>
                  
                  <div className={`transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-8">
                Can&apos;t find what you&apos;re looking for? Our team is here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Learn More
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