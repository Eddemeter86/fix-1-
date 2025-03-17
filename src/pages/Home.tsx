import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Globe2, 
  MessageSquare, 
  BarChart3, 
  Database, 
  ChevronDown,
  Users,
  Target,
  Award,
  Sparkles,
  ArrowRight,
  Shield,
  X,
  Mail,
  MapPin
} from 'lucide-react';

function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('services-dropdown');
      const button = document.getElementById('dropdown-button');
      if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const services = [
    {
      name: 'Website Design',
      path: '/services/website-design',
      color: 'indigo',
      icon: Globe2,
      description: 'AI-powered responsive websites'
    },
    {
      name: 'AI Chat Agents',
      path: '/services/ai-chat-agents',
      color: 'emerald',
      icon: MessageSquare,
      description: '24/7 intelligent support'
    },
    {
      name: 'Lead Generation',
      path: '/services/lead-generation',
      color: 'amber',
      icon: Target,
      description: 'Smart lead capture systems'
    },
    {
      name: 'CRM Integration',
      path: '/services/crm-integration',
      color: 'rose',
      icon: Database,
      description: 'Seamless business integration'
    }
  ];

  const handleAboutClick = () => {
    setIsDropdownOpen(false);
    if (location.pathname !== '/') {
      window.location.href = '/#about';
    } else {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-[90vh]">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/image.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-6 pt-48 pb-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                Automate Your Business with{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-lg bg-white opacity-20"></span>
                  <span className="relative">AI</span>
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Transform your business operations with cutting-edge AI solutions. From website design to customer engagement, we're your partner in digital innovation.
            </p>
            <div className="flex justify-center">
              <div className="relative">
                <button 
                  id="dropdown-button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-semibold flex items-center group"
                >
                  Start Your AI Journey
                  <ChevronDown className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Modal */}
      {isDropdownOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Modal */}
          <div 
            id="services-dropdown"
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[600px] bg-black/95 border border-gray-800 rounded-2xl shadow-xl backdrop-blur-sm z-50"
          >
            <div className="p-4 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Choose a Service</h3>
              <button 
                onClick={() => setIsDropdownOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
              <nav className="divide-y divide-gray-800">
                {services.map((service) => (
                  <div key={service.name} className="flex items-stretch">
                    <Link
                      to={service.path}
                      className={`flex-grow flex items-center space-x-3 p-4 hover:bg-gray-800/50 transition-colors group`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <service.icon className={`w-5 h-5 text-${service.color}-400 group-hover:scale-110 transition-transform`} />
                      <div className="flex-grow">
                        <p className={`font-medium text-${service.color}-400`}>{service.name}</p>
                        <p className="text-sm text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                    <Link
                      to={service.path}
                      className={`px-4 flex items-center justify-center border-l border-gray-800 text-${service.color}-400 hover:bg-${service.color}-400/10 transition-colors group`}
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Contact Section */}
              <div className="p-4 border-t border-gray-800">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                  <p className="text-sm text-gray-400">Get in touch with our team for personalized solutions</p>
                </div>
                <div className="space-y-3">
                  <a 
                    href="mailto:info@nextechaisolution.com"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>info@nextechaisolution.com</span>
                  </a>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5" />
                    <span>Asheville, NC</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsDropdownOpen(false)}
                  className="mt-4 block w-full px-4 py-3 text-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 font-medium"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Link to="/services/website-design" className="feature-card group border-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
            <Globe2 className="w-10 h-10 text-indigo-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">Website Design</h3>
            <p className="text-gray-400">AI-powered websites that adapt and evolve with your business needs</p>
          </Link>
          <Link to="/services/ai-chat-agents" className="feature-card group border-emerald-500/20 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]">
            <MessageSquare className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">AI Chat Agents</h3>
            <p className="text-gray-400">24/7 intelligent customer support that learns and improves</p>
          </Link>
          <Link to="/services/lead-generation" className="feature-card group border-amber-500/20 hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
            <BarChart3 className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">Lead Generation</h3>
            <p className="text-gray-400">Smart lead capture and qualification systems</p>
          </Link>
          <Link to="/services/crm-integration" className="feature-card group border-rose-500/20 hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.1)]">
            <Database className="w-10 h-10 text-rose-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2 group-hover:text-rose-400 transition-colors">CRM Integration</h3>
            <p className="text-gray-400">Seamless connection with your existing business tools</p>
          </Link>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="container mx-auto px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">About NexTechAI</h2>
          <p className="text-xl text-gray-300">
            Pioneering the future of business automation through innovative AI solutions
          </p>
        </div>

        {/* Veteran Owned Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 via-red-500/10 to-blue-500/10 rounded-2xl p-8 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534465070296-36a63506cbb8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
                  Veteran Owned & Operated
                </h3>
                <p className="text-gray-300">
                  Bringing military precision and leadership to the tech industry. Our veteran-led team combines tactical expertise with cutting-edge AI solutions to deliver mission-critical results for your business.
                </p>
              </div>
              <div className="flex-shrink-0">
                <Shield className="w-16 h-16 text-blue-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
              <Users className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Growing Team</h3>
            <p className="text-gray-400">
              A dynamic startup team passionate about AI innovation, combining fresh perspectives with military discipline and precision.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
              <Award className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rising Innovators</h3>
            <p className="text-gray-400">
              Emerging as a fresh force in the AI industry, bringing new perspectives and innovative solutions to business automation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30">
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Innovation First</h3>
            <p className="text-gray-400">
              Constantly pushing the boundaries of what's possible with AI technology and business automation.
            </p>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To empower businesses with intelligent automation solutions that drive growth, enhance efficiency, and create exceptional customer experiences through the power of artificial intelligence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;