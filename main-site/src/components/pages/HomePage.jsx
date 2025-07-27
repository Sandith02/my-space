import React, { useState } from 'react';
import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const HomePage = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);


  const personas = [
    {
      id: 'developer',
      title: 'Building Digital Experiences',
      subtitle: 'The Developer In Me',
      hashtag: '#TheDeveloperInMe',
      description: 'Full-stack development creating responsive web applications with modern technologies and user-friendly interfaces.',
      icon: '/code.svg',
      link: 'https://portfolio-v1-u4vs.vercel.app/',
      color: 'bg-[#a0b4cc]',
      number: '01.'
    },
    {
      id: 'designer',
      title: 'Crafting Visual Stories',
      subtitle: 'The Designer In Me',
      hashtag: '#TheDesignerInMe',
      description: 'Creative Designer, brand strategist, UI/UX enthusiast crafting digital experiences through research-driven design.',
      icon: '/chart-bubble.svg',
      link: 'https://designer-portfolio-black.vercel.app/',
      color: 'bg-white',
      number: '02.'
    },
    {
      id: 'strategist',
      title: 'Architecting Smart Solutions',
      subtitle: 'The Strategist In Me',
      hashtag: '#TheStrategistInMe',
      description: 'Solving complex problems by bridging technical execution with strategic thinking and user-centered design approaches.',
      icon: '/presentation-analytics.svg',
      link: 'https://analyst-portfolio-alpha.vercel.app/',
      color: 'bg-[#394a43]',
      number: '03.'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sandith02',
      icon: Github
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sandith02/',
      icon: Linkedin
    },
    {
      name: 'Email',
      url: 'mailto:lhthenuwara@gmail.com',
      icon: Mail
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="relative">
        
        {/* Navigation */}
        <nav className="px-6 md:px-12 py-6 flex justify-between items-center relative">
  <div className="text-xl font-semibold z-20">Sandith Sithmaka Thenuwara</div>

  {/* Mobile Menu Button */}
  <div className="md:hidden z-20">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-gray-400 hover:text-white focus:outline-none"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {menuOpen ? (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        )}
      </svg>
    </button>
  </div>

  {/* Desktop Nav */}
  <div className="hidden md:flex items-center space-x-6">
    <div className="flex items-center space-x-2 text-sm text-gray-400">
      <span>+94 76 692 6418</span>
      <span>•</span>
      <span>lhthenuwara@gmail.com</span>
    </div>
    <div className="flex space-x-2">
      {socialLinks.map(({ name, url, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
        >
          <Icon size={16} />
        </a>
      ))}
    </div>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-black border-t border-gray-800 py-6 px-6 flex flex-col space-y-4 z-10 md:hidden">
      <div className="text-sm text-gray-400">
        <p>+94 76 692 6418</p>
        <p>lhthenuwara@gmail.com</p>
      </div>
      <div className="flex space-x-4">
        {socialLinks.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  )}
</nav>


        {/* Main Content */}
        <div className="px-6 md:px-12 py-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Hero Section */}
            <div className="mb-16 md:mb-24">
              <h1 className="text-4xl  md:text-7xl font-bold leading-tight mb-8">
                Welcome to
                <br />
                <span className="">#mySpace 😎</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-400 max-w-4xl mb-8 leading-relaxed">
                I'm Sandith - a multi-faceted professional who bridges technology, design, and strategy.
              </p>

              <p className="text-base text-gray-500 max-w-3xl mb-12 leading-relaxed">
                To truly understand who I am and how I work, explore all three dimensions of my professional identity. 
                Each card reveals a different aspect of my approach to solving complex problems.
              </p>

              <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 mb-16">
                <div className="flex items-center space-x-3 mb-3">
                  {/* <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div> */}
                  <span className="text-sm font-medium text-gray-300">🔥 Interactive Journey</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Click through all three cards below to get the complete picture of my capabilities. 
                  Each persona represents a core part of how I approach projects and solve challenges.
                </p>
              </div>
            </div>

            {/* Personas Cards */}
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {personas.map((persona, index) => (
                <a
                  key={persona.id}
                  href={persona.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(persona.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`${persona.color} rounded-3xl p-8 md:p-10 h-80 md:h-96 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]`}>
                    
                    {/* Icon */}
                    <div className="mb-6">
                      <img 
                        src={persona.icon} 
                        alt={persona.title}
                        className="w-12 h-12 object-contain opacity-80"
                        style={{ 
                          filter: persona.id === 'designer' 
                            ? 'brightness(0) saturate(100%)' 
                            : 'brightness(0) saturate(100%) invert(100%)'
                        }}
                      />
                    </div>

                    {/* Number */}
                    <div className={`text-lg font-medium mb-4 ${
                      persona.id === 'designer' ? 'text-black/80' : 'text-white/90'
                    }`}>
                      {persona.number}
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 leading-tight ${
                      persona.id === 'designer' ? 'text-black' : 'text-white'
                    }`}>
                      {persona.subtitle}
                    </h3>

                    {/* Description */}
                    <p className={`text-sm leading-relaxed mb-6 ${
                      persona.id === 'designer' ? 'text-black/70' : 'text-white/80'
                    }`}>
                      {persona.description}
                    </p>

                    {/* Arrow */}
                    <div className="absolute bottom-8 right-8">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        persona.id === 'designer' 
                          ? `bg-black/10 ${hoveredCard === persona.id ? 'bg-black/20 scale-110' : ''}` 
                          : `bg-white/10 ${hoveredCard === persona.id ? 'bg-white/20 scale-110' : ''}`
                      }`}>
                        <ExternalLink size={18} className={persona.id === 'designer' ? 'text-black' : 'text-white'} />
                      </div>
                    </div>

                    {/* Hashtag */}
                    <div className="absolute bottom-8 left-8">
                      <p className={`text-xs font-mono ${
                        persona.id === 'designer' ? 'text-black/60' : 'text-white/70'
                      }`}>
                        {persona.hashtag}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Section */}
            <div className="mt-20 md:mt-32 pt-12 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Did you explore all three?
                  </h2>
                  <p className="text-gray-400 mb-6 md:mb-0">
                    Each dimension reveals a different part of my professional identity. Ready to work together?
                  </p>
                </div>
                <a 
                  href="mailto:lhthenuwara@gmail.com"
                  className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200 transition-colors duration-300"
                >
                  Let's collaborate
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-gray-900">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                <p>© 2025 Sandith Sithmaka Thenuwara. All rights reserved.</p>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <MapPin size={14} />
                  <span>Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;