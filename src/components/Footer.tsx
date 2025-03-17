import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, X, Mail, MapPin } from 'lucide-react';
import { useScrollToTop } from '../hooks/useScrollToTop';

function Footer() {
  useScrollToTop();
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { path: '/services/website-design', name: 'Website Design' },
    { path: '/services/ai-chat-agents', name: 'AI Chat Agents' },
    { path: '/services/lead-generation', name: 'Lead Generation' },
    { path: '/services/crm-integration', name: 'CRM Integration' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61573684949609',
      icon: Facebook,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nextech_ai_solution/',
      icon: Instagram,
      color: 'hover:text-pink-500',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/nextech-ai',
      icon: Linkedin,
      color: 'hover:text-blue-600',
    },
    {
      name: 'X',
      url: 'https://x.com/NexTech_AI',
      icon: X,
      color: 'hover:text-gray-100',
    },
  ];

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.us2.make.com/61xm83gl264y9dtu7j12mr6uv9uqddlz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: 'website_newsletter_subscription'
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Newsletter submission failed:', errorData);
        throw new Error(`Failed to submit newsletter: ${response.status} ${response.statusText}`);
      }

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="h-16 flex items-center">
              <img 
                src="/logos/no-bg-color.svg"
                alt="NexTechAI"
                className="h-full w-auto object-contain min-w-[200px]"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Transforming businesses through intelligent automation and AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@nextechaisolution.com"
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@nextechaisolution.com</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Asheville, NC</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest AI insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition-colors text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-sm text-emerald-400">
                  Thanks for subscribing!
                </p>
              )}
              
              {submitStatus === 'error' && (
                <p className="text-sm text-rose-400">
                  Failed to subscribe. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} NexTechAI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;