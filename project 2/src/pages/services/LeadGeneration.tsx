import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, Target, Users, Filter, X } from 'lucide-react';

function LeadGeneration() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleGetStarted = () => {
    navigate('/contact', { state: { service: 'Lead Generation' } });
  };

  const features = {
    'Targeted Campaigns': {
      title: 'AI-Powered Targeted Campaigns',
      description: 'Leverage advanced AI algorithms to identify and reach your ideal customers with precision.',
      details: [
        'Behavioral targeting',
        'Demographic analysis',
        'Lookalike audience creation',
        'Cross-channel campaign optimization',
        'Real-time bid adjustments',
        'Custom audience segmentation'
      ]
    },
    'Lead Qualification': {
      title: 'Intelligent Lead Qualification',
      description: 'Automatically score and qualify leads based on multiple data points and behaviors.',
      details: [
        'Lead scoring algorithms',
        'Behavior tracking',
        'Engagement analysis',
        'Purchase intent prediction',
        'Customer journey mapping',
        'Automated lead nurturing'
      ]
    },
    'Performance Analytics': {
      title: 'Advanced Performance Analytics',
      description: 'Comprehensive analytics and reporting to optimize your lead generation efforts.',
      details: [
        'Real-time performance tracking',
        'Conversion attribution',
        'ROI analysis',
        'A/B testing insights',
        'Campaign comparison',
        'Custom report generation'
      ]
    },
    'Audience Insights': {
      title: 'Deep Audience Insights',
      description: 'Gain valuable insights into your target market and customer behavior.',
      details: [
        'Market segmentation',
        'Buyer persona creation',
        'Interest analysis',
        'Purchase pattern recognition',
        'Competitive intelligence',
        'Trend forecasting'
      ]
    }
  };

  const openModal = (feature: string) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative min-h-[80vh] md:min-h-screen">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/website-image-4.jpg")',
            backgroundPosition: 'center 40%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative text-center text-white">
                Smart Lead Generation
              </h1>
              <p className="text-xl text-gray-200 mb-12 text-center max-w-2xl mx-auto">
                AI-powered lead generation systems that identify and qualify potential customers with precision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <button
                onClick={() => openModal('Targeted Campaigns')}
                className="bg-black/20 border border-amber-500/30 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Target className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Targeted Campaigns</h3>
                <p className="text-gray-200">Reach the right audience with precision targeting</p>
              </button>

              <button
                onClick={() => openModal('Lead Qualification')}
                className="bg-black/20 border border-amber-500/30 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Filter className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Lead Qualification</h3>
                <p className="text-gray-200">Automated scoring and qualification of leads</p>
              </button>

              <button
                onClick={() => openModal('Performance Analytics')}
                className="bg-black/20 border border-amber-500/30 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <BarChart3 className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Performance Analytics</h3>
                <p className="text-gray-200">Detailed insights into campaign performance</p>
              </button>

              <button
                onClick={() => openModal('Audience Insights')}
                className="bg-black/20 border border-amber-500/30 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Users className="w-8 h-8 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Audience Insights</h3>
                <p className="text-gray-200">Deep understanding of your target market</p>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={handleGetStarted}
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
              >
                Get Started with Lead Generation
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
          <div className="relative bg-black/90 border border-amber-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="sticky top-0 bg-black/90 border-b border-amber-500/30 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{features[selectedFeature].title}</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="bg-black/50 border border-amber-500/20 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition-colors">
                <p className="text-gray-300">{features[selectedFeature].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features[selectedFeature].details.map((detail, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
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
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 transition-all duration-300 font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
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

export default LeadGeneration;