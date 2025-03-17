import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Brain, Clock, Zap, Mic, MessageCircle, X } from 'lucide-react';

function AIChatAgents() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleGetStarted = () => {
    navigate('/contact', { state: { service: 'AI Chat Agents' } });
  };

  const features = {
    'Text Chat Support': {
      title: 'Advanced Text Chat Support',
      description: 'Our AI-powered text chat support system provides intelligent, context-aware responses to customer inquiries.',
      details: [
        'Natural Language Processing for accurate understanding',
        'Context retention across conversations',
        'Multi-language support',
        'Sentiment analysis',
        'Automated ticket creation and routing',
        'Integration with knowledge bases'
      ]
    },
    'Voice Interaction': {
      title: 'Intelligent Voice Interaction',
      description: 'State-of-the-art voice recognition and synthesis for natural conversations with customers.',
      details: [
        'Advanced speech recognition',
        'Natural voice synthesis',
        'Real-time voice processing',
        'Accent and dialect recognition',
        'Voice biometrics',
        'Multi-language voice support'
      ]
    },
    'Smart Learning': {
      title: 'Continuous Smart Learning',
      description: 'Our AI agents continuously learn and improve from every interaction to provide better service.',
      details: [
        'Pattern recognition in customer queries',
        'Automated response optimization',
        'Behavior analysis and adaptation',
        'Performance analytics',
        'Continuous model training',
        'Feedback incorporation'
      ]
    },
    '24/7 Availability': {
      title: 'Round-the-Clock Support',
      description: 'Ensure your customers receive immediate assistance at any time, any day.',
      details: [
        'Instant response capabilities',
        'Time zone adaptation',
        'Load balancing',
        'Backup systems',
        'Holiday coverage',
        'Peak hour handling'
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
      <div className="relative min-h-[80vh] md:min-h-screen w-full">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: 'url("/images/website-image-3.jpg")',
            backgroundPosition: 'center 30%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative text-center text-white">
                AI Chat & Voice Agents
              </h1>
              <p className="text-xl text-gray-200 mb-12 text-center max-w-2xl mx-auto">
                Intelligent conversational agents that provide 24/7 support through both text and voice interactions, enhancing customer experience across all channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-16">
              <button
                onClick={() => openModal('Text Chat Support')}
                className="bg-black/20 border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <MessageCircle className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Text Chat Support</h3>
                <p className="text-gray-200">Instant messaging support with natural language understanding and contextual responses</p>
              </button>

              <button
                onClick={() => openModal('Voice Interaction')}
                className="bg-black/20 border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Mic className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Voice Interaction</h3>
                <p className="text-gray-200">Natural voice conversations with advanced speech recognition and synthesis</p>
              </button>

              <button
                onClick={() => openModal('Smart Learning')}
                className="bg-black/20 border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Brain className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Smart Learning</h3>
                <p className="text-gray-200">Continuously learns from interactions to improve responses</p>
              </button>

              <button
                onClick={() => openModal('24/7 Availability')}
                className="bg-black/20 border border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Clock className="w-8 h-8 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">24/7 Availability</h3>
                <p className="text-gray-200">Round-the-clock customer support through preferred channels</p>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={handleGetStarted}
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
              >
                Get Started with AI Chat & Voice Agents
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
          <div className="relative bg-black/90 border border-emerald-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="sticky top-0 bg-black/90 border-b border-emerald-500/30 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{features[selectedFeature].title}</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="bg-black/50 border border-emerald-500/20 rounded-xl p-6 space-y-4 hover:border-emerald-500/40 transition-colors">
                <p className="text-gray-300">{features[selectedFeature].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features[selectedFeature].details.map((detail, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
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
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50"
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

export default AIChatAgents;