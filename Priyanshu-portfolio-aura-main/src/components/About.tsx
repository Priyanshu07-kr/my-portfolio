import React, { useEffect, useState, useRef } from 'react';
import { GraduationCap, Calendar, Award, Sparkles, Palette, Code, TrendingUp, User } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(new Set());
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedStats(new Set([0, 1, 2, 3]));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const highlights = [
    { icon: Palette, label: 'UX/UI Focus', value: 'Design', color: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, label: 'Design Tools', value: 'Figma', color: 'from-blue-500 to-cyan-500' },
    { icon: Code, label: 'Projects Built', value: '3+', color: 'from-teal-500 to-cyan-500' },
    { icon: Award, label: 'Certifications', value: '1', color: 'from-cyan-600 to-blue-500' },
  ];

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#050508]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cyan-50/30 to-white dark:from-[#050508] dark:via-[#050508] dark:to-[#050508]" />
      
      {/* Decorative orbs */}
      <div className="absolute top-32 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 dark:from-cyan-500/10 dark:to-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-16 w-96 h-96 bg-gradient-to-r from-blue-400/8 to-teal-400/8 dark:from-blue-500/8 dark:to-teal-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating sparkles */}
      <div className="absolute top-40 left-32 animate-sparkle hidden sm:block"><Sparkles className="text-cyan-400 opacity-50 w-5 h-5" /></div>
      <div className="absolute top-64 right-48 animate-sparkle-delayed hidden sm:block"><Sparkles className="text-blue-400 opacity-40 w-4 h-4" /></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
            <span className="text-gray-800 dark:text-white">About</span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent"> Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* === MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          
          {/* === LEFT COLUMN: Profile Card + Education (2 cols) === */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Profile Visual Card */}
            <div className={`relative group transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-cyan-200/30 dark:border-cyan-700/30">
                {/* Profile Image */}
                <div className="relative w-full aspect-[3/4] bg-gradient-to-br from-cyan-100 to-blue-50 dark:from-cyan-900/40 dark:to-blue-900/40 overflow-hidden">
                  <img 
                    src="public\priyanshu.jpeg"  
                    className="w-full h-full object-cover transform-gpu transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/60 via-transparent to-transparent" />
                  
                  {/* Name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Priyanshu Kumar Singh</h3>
                    <p className="text-cyan-200 text-sm font-medium">UX/UI Designer</p>
                    <p className="text-cyan-300/80 text-xs mt-1">📍 Delhi, India</p>
                  </div>
                </div>
                
                {/* Subtle animated border glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-float z-20">
                B.Tech CSE
              </div>
            </div>

            {/* Education Cards */}
            <div className={`bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-cyan-200/20 dark:border-cyan-700/20 group delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center mb-4">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg mr-3">
                  <GraduationCap className="text-cyan-600 dark:text-cyan-400" size={22} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">Education</h3>
              </div>
              <h4 className="font-bold text-base text-gray-800 dark:text-gray-100 mb-1">K.R. Mangalam University, Gurugram</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">B.Tech in Computer Science Engineering</p>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-2">UX/UI Specialization</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-4">
                <Calendar size={14} className="mr-1.5" />
                2023 – Present
              </div>
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                <h4 className="font-bold text-sm text-gray-800 dark:text-gray-100 mb-1">Kendriya Vidyalaya, New Delhi</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs">Intermediate (CBSE) — 2023</p>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: About Text + Highlights (3 cols) === */}
          <div className="lg:col-span-3 space-y-6">
            
            {/* About Text */}
            <div className={`bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-cyan-200/20 dark:border-cyan-700/20 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="flex items-center mb-5">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                  <User className="text-blue-600 dark:text-blue-400" size={22} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Who I Am</h3>
              </div>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate and detail-oriented <span className="text-cyan-600 dark:text-cyan-400 font-semibold">UX/UI design student</span> pursuing 
                  a B.Tech in Computer Science Engineering at K.R. Mangalam University. Skilled in user research, interaction design, 
                  wireframing, prototyping, and usability testing with a strong foundation in design thinking.
                </p>
                <p>
                  Proficient in <span className="text-blue-600 dark:text-blue-400 font-semibold">Figma, Adobe XD, Canva, and web technologies</span>. 
                  From building responsive websites to designing interactive card-based UIs, I enjoy creating seamless digital experiences 
                  that are both visually appealing and user-friendly.
                </p>
                <p>
                  I'm a strong communicator and problem-solver with the ability to translate user insights into intuitive digital experiences. 
                  Always eager to learn new tools and techniques to push the boundaries of design.
                </p>
              </div>
            </div>

            {/* Highlight Stats Grid */}
            <div className={`grid grid-cols-2 gap-4 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className={`group bg-white/90 dark:bg-gray-800/60 backdrop-blur-sm p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-cyan-200/20 dark:border-cyan-700/20 overflow-hidden relative ${
                    animatedStats.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 100 + 500}ms` }}
                >
                  {/* Gradient accent top bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} bg-opacity-10`}>
                      <item.icon className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 origin-left">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mt-1">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Skills Snapshot */}
            <div className={`bg-gradient-to-r from-cyan-600 to-blue-600 p-6 rounded-2xl shadow-xl text-white relative overflow-hidden delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
              <h4 className="font-bold text-lg mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Core Toolkit</h4>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'HTML', 'CSS', 'Figma', 'Adobe XD', 'Node.js', 'SQL', 'GitHub'].map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-white/15 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20 hover:bg-white/25 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
