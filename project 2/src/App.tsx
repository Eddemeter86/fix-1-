import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageSquareMore } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import WebsiteDesign from './pages/services/WebsiteDesign';
import AIChatAgents from './pages/services/AIChatAgents';
import LeadGeneration from './pages/services/LeadGeneration';
import CRMIntegration from './pages/services/CRMIntegration';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Hide indicator after 90 seconds
    const timer = setTimeout(() => {
      setShowIndicator(false);
    }, 90000);

    // Preload critical images
    const preloadImages = async () => {
      const imagePaths = [
        '/images/image.jpg',
        '/images/automation-website-image-1.jpg',
        '/images/website-image-3.jpg',
        '/images/website-image-4.jpg',
        '/images/image-5.jpg',
        '/images/image-6.jpg'
      ];
      
      try {
        const imagePromises = imagePaths.map(path => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = path;
            img.onload = resolve;
            img.onerror = reject;
          });
        });
        
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Failed to preload images:', error);
        // Still set as loaded even if some images fail
        setImagesLoaded(true);
      }
    };

    preloadImages();

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-100 flex flex-col">
        <Navbar />
        <main className={`flex-grow ${!imagesLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/website-design" element={<WebsiteDesign />} />
            <Route path="/services/ai-chat-agents" element={<AIChatAgents />} />
            <Route path="/services/lead-generation" element={<LeadGeneration />} />
            <Route path="/services/crm-integration" element={<CRMIntegration />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Chat Indicator */}
        {showIndicator && (
          <div 
            className="chat-indicator"
            onClick={() => setShowIndicator(false)}
          >
            <MessageSquareMore className="w-4 h-4" />
            <span>AI Agent</span>
            <div className="pulse" />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;