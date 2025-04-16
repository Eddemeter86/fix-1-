import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

function PrivacyPolicy() {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-black">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Link 
            to="/"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12"
          >
            <Home className="w-5 h-5" />
            <span>Back to Homepage</span>
          </Link>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Privacy Policy</h1>

          {/* Last Updated */}
          <p className="text-gray-400 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

          {/* Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p className="text-gray-300">
                This Privacy Policy describes how NexTechAI ("we," "our," or "us") collects, uses, and shares your information when you use our services. This policy applies to all users of our website and AI-powered business automation solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-gray-300">We collect and process the following information:</p>
              <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information (company name, industry)</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences</li>
                <li>Service interaction data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-gray-300">We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our services</li>
                <li>Process your requests and transactions</li>
                <li>Personalize your experience</li>
                <li>Analyze and improve our website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-gray-300">Under applicable data protection laws, you have the right to:</p>
              <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Restrict or object to processing</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-300">
                If you have any questions about this Privacy Policy or our practices, please contact us at:{' '}
                <a 
                  href="mailto:info@nextechaisolution.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  info@nextechaisolution.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;