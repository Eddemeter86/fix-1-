import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe2, Laptop, Sparkles, Database, X } from 'lucide-react';

function WebsiteDesign() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleGetStarted = () => {
    navigate('/contact', { state: { service: 'Website Design' } });
  };

  const features = {
    'Responsive Design': {
      title: 'Advanced Responsive Design',
      description: 'Create websites that look and function beautifully across all devices and screen sizes.',
      details: [
        'Mobile-first approach',
        'Fluid grid layouts',
        'Adaptive images and media',
        'Touch-friendly interfaces',
        'Cross-browser compatibility',
        'Performance optimization'
      ]
    },
    'User Experience': {
      title: 'Intuitive User Experience',
      description: 'Design interfaces that delight users and drive engagement through thoughtful UX design.',
      details: [
        'User journey mapping',
        'Intuitive navigation',
        'Performance optimization',
        'Accessibility compliance',
        'Interactive elements',
        'Visual hierarchy'
      ]
    },
    'SEO Optimization': {
      title: 'Advanced SEO Optimization',
      description: "Implement cutting-edge SEO strategies to improve your website's visibility and ranking.",
      details: [
        'Technical SEO setup',
        'Content optimization',
        'Schema markup',
        'Performance metrics',
        'Mobile optimization',
        'Analytics integration'
      ]
    },
    'CRM Integration': {
      title: 'Seamless CRM Integration',
      description: 'Connect your website with powerful CRM systems to streamline your business operations.',
      details: [
        'Popular CRM connectors',
        'Data synchronization',
        'Custom API integration',
        'Automated workflows',
        'Lead tracking',
        'Analytics dashboard'
      ]
    }
  };

  const openModal = (feature: string) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[80vh] md:min-h-screen">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/automation-website-image-1.jpg")',
            backgroundPosition: 'center 25%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative text-center text-white">
                AI-Powered Website Design
              </h1>
              <p className="text-xl text-gray-200 mb-12 text-center max-w-2xl mx-auto">
                Create stunning, intelligent websites that adapt to your users' needs and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <button
                onClick={() => openModal('Responsive Design')}
                className="bg-black/20 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Laptop className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Responsive Design</h3>
                <p className="text-gray-200">Enhance your online presence with Responsive Design. Our adaptive layouts ensure a modern, efficient experience for your audience across all devices.</p>
              </button>

              <button
                onClick={() => openModal('User Experience')}
                className="bg-black/20 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Sparkles className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">User Experience (UX)</h3>
                <p className="text-gray-200">Enhance your online presence with User Experience (UX). Our intuitive navigation ensures a modern, efficient experience for your audience.</p>
              </button>

              <button
                onClick={() => openModal('SEO Optimization')}
                className="bg-black/20 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Globe2 className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">SEO Optimization</h3>
                <p className="text-gray-200">Enhance your online presence with SEO Optimization. Our keyword strategies ensure a modern, efficient experience for your audience.</p>
              </button>

              <button
                onClick={() => openModal('CRM Integration')}
                className="bg-black/20 border border-indigo-500/30 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Database className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">CRM Integration</h3>
                <p className="text-gray-200">Seamlessly integrate CRM solutions to enhance efficiency. Click to learn more about our supported integrations.</p>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={handleGetStarted}
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
              >
                Get Started with Website Design
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Modal */}
      {isModalOpen && selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-black/90 border border-indigo-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="sticky top-0 bg-black/90 border-b border-indigo-500/30 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{features[selectedFeature].title}</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="bg-black/50 border border-indigo-500/20 rounded-xl p-6 space-y-4 hover:border-indigo-500/40 transition-colors">
                <p className="text-gray-300">{features[selectedFeature].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features[selectedFeature].details.map((detail, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    handleGetStarted();
                  }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
                >
                  Get Started with {selectedFeature}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WebsiteDesign;