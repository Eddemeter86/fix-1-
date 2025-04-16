import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Database, Link as LinkIcon, RefreshCw, Shield, X } from 'lucide-react';

function CRMIntegration() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const handleGetStarted = () => {
    navigate('/contact', { state: { service: 'CRM Integration' } });
  };

  const features = {
    'Easy Integration': {
      title: 'Seamless CRM Integration',
      description: 'Connect your existing CRM systems with our AI solutions effortlessly.',
      details: [
        'One-click integration setup',
        'Pre-built connectors for popular CRMs',
        'Custom API integration support',
        'Data mapping automation',
        'Integration health monitoring',
        'Automated error handling'
      ]
    },
    'Real-time Sync': {
      title: 'Real-time Data Synchronization',
      description: 'Keep your data synchronized across all platforms in real-time.',
      details: [
        'Bi-directional sync',
        'Conflict resolution',
        'Change tracking',
        'Offline data handling',
        'Batch synchronization',
        'Custom sync rules'
      ]
    },
    'Data Management': {
      title: 'Intelligent Data Management',
      description: 'Centralize and manage your customer data efficiently.',
      details: [
        'Data deduplication',
        'Automated data cleaning',
        'Custom field mapping',
        'Data enrichment',
        'Version control',
        'Audit logging'
      ]
    },
    'Secure Integration': {
      title: 'Enterprise-Grade Security',
      description: 'Protect your data with advanced security measures.',
      details: [
        'End-to-end encryption',
        'Role-based access control',
        'Data compliance tools',
        'Security monitoring',
        'Audit trails',
        'Backup and recovery'
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
            backgroundImage: 'url("/images/image-5.jpg")',
            backgroundPosition: 'center 35%'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 relative text-center text-white">
                CRM Integration
              </h1>
              <p className="text-xl text-gray-200 mb-12 text-center max-w-2xl mx-auto">
                Seamlessly connect your business tools and automate your workflow with intelligent CRM integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <button
                onClick={() => openModal('Easy Integration')}
                className="bg-black/20 border border-rose-500/30 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <LinkIcon className="w-8 h-8 text-rose-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Easy Integration</h3>
                <p className="text-gray-200">Connect with popular CRM platforms effortlessly</p>
              </button>

              <button
                onClick={() => openModal('Real-time Sync')}
                className="bg-black/20 border border-rose-500/30 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <RefreshCw className="w-8 h-8 text-rose-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Real-time Sync</h3>
                <p className="text-gray-200">Automatic data synchronization across platforms</p>
              </button>

              <button
                onClick={() => openModal('Data Management')}
                className="bg-black/20 border border-rose-500/30 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Database className="w-8 h-8 text-rose-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Data Management</h3>
                <p className="text-gray-200">Centralized customer data management</p>
              </button>

              <button
                onClick={() => openModal('Secure Integration')}
                className="bg-black/20 border border-rose-500/30 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] rounded-xl p-6 text-left transition-all duration-300 cursor-pointer w-full"
              >
                <Shield className="w-8 h-8 text-rose-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Secure Integration</h3>
                <p className="text-gray-200">Enterprise-grade security for your data</p>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={handleGetStarted}
                className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50"
              >
                Get Started with CRM Integration
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
          <div className="relative bg-black/90 border border-rose-500/30 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="sticky top-0 bg-black/90 border-b border-rose-500/30 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{features[selectedFeature].title}</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div className="bg-black/50 border border-rose-500/20 rounded-xl p-6 space-y-4 hover:border-rose-500/40 transition-colors">
                <p className="text-gray-300">{features[selectedFeature].description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features[selectedFeature].details.map((detail, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-2 text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
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
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 transition-all duration-300 font-semibold shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50"
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

export default CRMIntegration;