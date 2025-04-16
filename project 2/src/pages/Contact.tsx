import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, X, Mail, MapPin } from 'lucide-react';
import { useLocation } from 'react-router-dom';

function Contact() {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    service: location.state?.service || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    "Website Design",
    "AI Chat Agents",
    "Lead Generation",
    "CRM Integration",
    "Other"
  ];

  useEffect(() => {
    if (location.state?.service) {
      setFormData(prev => ({
        ...prev,
        service: location.state.service
      }));
    }
  }, [location.state?.service]);

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
      name: 'X',
      url: 'https://x.com/NexTech_AI',
      icon: X,
      color: 'hover:text-gray-100',
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website_contact_form'
        }),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Form submission failed:', errorData);
        throw new Error(`Failed to submit form: ${response.status} ${response.statusText}`);
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        industry: '',
        service: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/image-6.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative text-center text-white">
                Let's Transform Your Business Together
              </h1>
              <p className="text-xl text-gray-200 mb-12 text-center max-w-2xl mx-auto">
                Book a free consultation call with our AI experts and discover how we can automate and scale your business operations.
              </p>
            </div>

            <div className="relative rounded-2xl backdrop-blur-sm bg-black/20 border border-gray-800 p-12">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <input 
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-6 py-4 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-6 py-4 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full px-6 py-4 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-300">
                    Industry
                  </label>
                  <input 
                    type="text"
                    id="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    placeholder="e.g. E-commerce, Healthcare, etc."
                    required
                    className="w-full px-6 py-4 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors placeholder:text-gray-600"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300">
                    Service Interest
                  </label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-lg bg-black/30 border border-gray-700 focus:border-cyan-500 focus:outline-none transition-colors text-gray-300"
                  >
                    <option value="" className="bg-gray-900">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-gray-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? 'Scheduling...' : 'Schedule Your Free Call'}
                  </button>
                  
                  {submitStatus === 'success' && (
                    <p className="mt-4 text-center text-emerald-400">
                      Thank you! We'll contact you shortly to schedule your consultation.
                    </p>
                  )}
                  
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-center text-rose-400">
                      There was an error submitting the form. Please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>

            {/* Social Media Section */}
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-semibold mb-8">Connect With Us</h2>
              <div className="flex justify-center items-center space-x-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors duration-300 ${social.color}`}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;