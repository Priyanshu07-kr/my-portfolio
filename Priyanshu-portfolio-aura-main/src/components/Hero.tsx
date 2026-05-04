import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Download, Sparkles, Mail, Palette, Code, Layout, Globe } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const [typedText, setTypedText] = useState('');
  const fullText = 'UX/UI Designer';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) clearInterval(timer);
    }, 60);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* === MESH GRADIENT BACKGROUND === */}
      <div className="absolute inset-0 hero-mesh-bg" />
      
      {/* Dark overlay for dark mode */}
      <div className="absolute inset-0 bg-black opacity-0 dark:opacity-80 transition-opacity duration-300" />

      {/* === ANIMATED GRID === */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.04)_1px,transparent_1px),linear_gradient(90deg,rgba(6,182,212,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* === FLOATING GRADIENT ORBS === */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 dark:from-cyan-500/15 dark:to-blue-500/15 rounded-full blur-3xl animate-float-3d" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-gradient-to-br from-blue-400/15 to-teal-400/15 dark:from-blue-500/10 dark:to-teal-500/10 rounded-full blur-3xl animate-float-3d-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-300/10 to-sky-300/10 dark:from-cyan-400/5 dark:to-sky-400/5 rounded-full blur-3xl animate-float-3d-slow" />

      {/* === INTERACTIVE CURSOR GLOW === */}
      <div 
        className="absolute w-40 h-40 bg-gradient-radial from-cyan-400/20 via-cyan-400/5 to-transparent rounded-full blur-2xl transition-all duration-150 pointer-events-none hidden sm:block"
        style={{
          left: mousePosition.x - 80,
          top: mousePosition.y - 80,
          opacity: isVisible ? 0.8 : 0
        }}
      />

      {/* === MAIN CONTENT: SPLIT LAYOUT === */}
      <div className={`max-w-7xl w-full mx-auto py-20 sm:py-24 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* === LEFT: TEXT CONTENT === */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-100/80 dark:bg-cyan-900/30 border border-cyan-200/50 dark:border-cyan-700/40 backdrop-blur-sm animate-fade-in">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">Welcome to my portfolio</span>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in delay-200 leading-[1.1]" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
              <span className="block text-gray-900 dark:text-white">
                Hi, I'm
              </span>
              <span className="block bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                Priyanshu Kumar Singh
              </span>
            </h1>

            {/* Typed subtitle */}
            <div className="mb-8 h-10 animate-fade-in delay-500">
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
                {typedText}
                <span className="animate-cursor ml-0.5 text-cyan-500">|</span>
              </p>
            </div>

            {/* Short bio */}
            <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-lg mb-10 animate-fade-in delay-700 mx-auto lg:mx-0 leading-relaxed">
              Crafting intuitive digital experiences with Figma, HTML, CSS & JavaScript — turning user insights into pixel-perfect designs.
            </p>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-8 animate-fade-in delay-700">
              <a 
                href="https://www.linkedin.com/in/priyanshu-kumar-singh-3bb328290?"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-cyan-200/30 dark:border-cyan-700/30 hover:border-cyan-400/60"
              >
                <Linkedin size={20} className="text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://github.com/Priyanshu07-kr"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200/30 dark:border-gray-700/30 hover:border-gray-400/60"
              >
                <Github size={20} className="text-gray-700 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="mailto:kumarsinghpriyanshu508@gmail.com"
                className="group p-3.5 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-blue-200/30 dark:border-blue-700/30 hover:border-blue-400/60"
              >
                <Mail size={20} className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-fade-in delay-900">
              <a 
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/25 text-center overflow-hidden"
              >
                <span className="relative z-10">See Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a 
                href="Priyanshu Resume.pdf" 
                download
                className="group px-8 py-4 bg-white/80 dark:bg-gray-800/60 backdrop-blur-sm border-2 border-cyan-400 text-cyan-600 dark:text-cyan-400 font-semibold text-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-cyan-600 hover:text-white dark:hover:text-white hover:border-cyan-600 shadow-lg text-center flex items-center justify-center gap-2"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* === RIGHT: 3D CUBE + GLASSMORPHISM CARDS === */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 animate-fade-in delay-300">
            
            {/* 3D Rotating Cube */}
            <div className="cube-scene w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <div className="cube">
                <div className="cube-face cube-front">
                  <Palette className="w-12 h-12 sm:w-16 sm:h-16 text-white/90" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium mt-2">UX/UI</span>
                </div>
                <div className="cube-face cube-back">
                  <Code className="w-12 h-12 sm:w-16 sm:h-16 text-white/90" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium mt-2">Web Dev</span>
                </div>
                <div className="cube-face cube-right">
                  <Layout className="w-12 h-12 sm:w-16 sm:h-16 text-white/90" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium mt-2">Design</span>
                </div>
                <div className="cube-face cube-left">
                  <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-white/90" />
                  <span className="text-white/80 text-xs sm:text-sm font-medium mt-2">Frontend</span>
                </div>
                <div className="cube-face cube-top">
                  <span className="text-white/90 text-2xl sm:text-3xl font-bold" style={{ fontFamily: 'Outfit, sans-serif' }}>PS</span>
                </div>
                <div className="cube-face cube-bottom">
                  <span className="text-white/90 text-lg sm:text-xl font-semibold" style={{ fontFamily: 'Outfit, sans-serif' }}>Figma</span>
                </div>
              </div>
            </div>

            {/* === FLOATING GLASSMORPHISM STAT CARDS === */}
            <div className="absolute -top-2 -left-4 sm:top-2 sm:left-0 glass-card px-4 py-3 rounded-xl animate-float shadow-xl">
              <div className="text-cyan-600 dark:text-cyan-400 font-bold text-lg">3+</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">Projects Built</div>
            </div>

            <div className="absolute -bottom-2 -right-4 sm:bottom-4 sm:right-0 glass-card px-4 py-3 rounded-xl animate-float shadow-xl" style={{ animationDelay: '1.5s' }}>
              <div className="text-blue-600 dark:text-blue-400 font-bold text-lg">UX/UI</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">Specialization</div>
            </div>

            <div className="absolute top-1/2 -right-6 sm:right-[-2rem] glass-card px-4 py-3 rounded-xl animate-float shadow-xl hidden sm:block" style={{ animationDelay: '3s' }}>
              <div className="text-teal-600 dark:text-teal-400 font-bold text-lg">Figma</div>
              <div className="text-gray-600 dark:text-gray-400 text-xs font-medium">Primary Tool</div>
            </div>

            {/* Decorative sparkles around cube */}
            <div className="absolute top-8 right-8 animate-sparkle hidden sm:block">
              <Sparkles className="text-cyan-400/60 w-5 h-5" />
            </div>
            <div className="absolute bottom-12 left-8 animate-sparkle-delayed hidden sm:block">
              <Sparkles className="text-blue-400/60 w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-1000">
          <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-2 animate-pulse text-center">Explore My Work</p>
          <div className="relative flex justify-center">
            <ArrowDown size={20} className="text-cyan-600 dark:text-cyan-400 animate-bounce" />
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-8 h-8 bg-cyan-400/20 rounded-full animate-ping" />
            </div>
          </div>
        </div>
      </div>

      {/* === HERO-SPECIFIC STYLES === */}
      <style>{`
        .hero-mesh-bg {
          background: 
            radial-gradient(at 20% 30%, rgba(34, 211, 238, 0.15) 0%, transparent 50%),
            radial-gradient(at 80% 20%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
            radial-gradient(at 50% 80%, rgba(6, 182, 212, 0.10) 0%, transparent 50%),
            radial-gradient(at 90% 70%, rgba(20, 184, 166, 0.08) 0%, transparent 50%),
            linear-gradient(to bottom right, #ecfeff, #f0f9ff, #f0fdfa, #ffffff);
        }
        
        .dark .hero-mesh-bg {
          background: 
            radial-gradient(at 20% 30%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
            radial-gradient(at 80% 20%, rgba(34, 211, 238, 0.08) 0%, transparent 50%),
            radial-gradient(at 50% 80%, rgba(8, 145, 178, 0.10) 0%, transparent 50%),
            linear-gradient(to bottom right, #050508, #050508, #050508);
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(34, 211, 238, 0.2);
        }
        .dark .glass-card {
          background: rgba(30, 30, 50, 0.6);
          border: 1px solid rgba(34, 211, 238, 0.15);
        }

        /* === 3D CUBE === */
        .cube-scene {
          perspective: 800px;
          perspective-origin: 50% 50%;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: cube-rotate 12s ease-in-out infinite;
        }
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          backface-visibility: visible;
        }
        .cube-front  { 
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.8), rgba(34, 211, 238, 0.6));
          backdrop-filter: blur(8px);
          transform: translateZ(calc(var(--cube-size) / 2)); 
        }
        .cube-back   { 
          background: linear-gradient(135deg, rgba(8, 145, 178, 0.8), rgba(103, 232, 249, 0.6));
          backdrop-filter: blur(8px);
          transform: rotateY(180deg) translateZ(calc(var(--cube-size) / 2)); 
        }
        .cube-right  { 
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(96, 165, 250, 0.6));
          backdrop-filter: blur(8px);
          transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2)); 
        }
        .cube-left   { 
          background: linear-gradient(135deg, rgba(20, 184, 166, 0.8), rgba(94, 234, 212, 0.6));
          backdrop-filter: blur(8px);
          transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2)); 
        }
        .cube-top    { 
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.8), rgba(56, 189, 248, 0.6));
          backdrop-filter: blur(8px);
          transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2)); 
        }
        .cube-bottom { 
          background: linear-gradient(135deg, rgba(14, 116, 144, 0.8), rgba(6, 182, 212, 0.6));
          backdrop-filter: blur(8px);
          transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2)); 
        }

        .cube-scene {
          --cube-size: 12rem;
        }
        @media (min-width: 640px) {
          .cube-scene { --cube-size: 16rem; }
        }
        @media (min-width: 768px) {
          .cube-scene { --cube-size: 18rem; }
        }

        @keyframes cube-rotate {
          0%   { transform: rotateX(-15deg) rotateY(0deg); }
          25%  { transform: rotateX(5deg)   rotateY(90deg); }
          50%  { transform: rotateX(-10deg) rotateY(180deg); }
          75%  { transform: rotateX(5deg)   rotateY(270deg); }
          100% { transform: rotateX(-15deg) rotateY(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
