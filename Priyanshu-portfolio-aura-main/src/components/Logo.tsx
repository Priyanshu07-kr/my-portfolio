import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  iconOnly?: boolean;
  className?: string;
  animated?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', iconOnly = false, animated = true, className = '' }) => {
  const { theme } = useTheme();
  
  const sizeClasses = { sm: 'w-8 h-8', md: 'w-9 h-9 sm:w-11 sm:h-11', lg: 'w-16 h-16' };
  const textSizeClasses = { sm: 'text-sm', md: 'text-base sm:text-lg lg:text-xl', lg: 'text-2xl' };

  return (
    <div className={`flex items-center space-x-2 sm:space-x-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]} flex-shrink-0`}>
        <svg viewBox="0 0 48 48" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="30%" stopColor="#06b6d4" />
              <stop offset="70%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#0e7490" />
            </linearGradient>
            <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a5f3fc" />
              <stop offset="30%" stopColor="#22d3ee" />
              <stop offset="70%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="3" stdDeviation="4" floodOpacity="0.25" floodColor="#0e7490"/>
            </filter>
          </defs>
          <circle cx="24" cy="24" r="23" fill="none" stroke={theme === 'dark' ? 'rgba(34, 211, 238, 0.3)' : 'rgba(6, 182, 212, 0.2)'} strokeWidth="1" className="animate-pulse" style={{ animationDuration: '2s' }} />
          <circle cx="24" cy="24" r="20" fill={theme === 'dark' ? 'url(#logoGradientDark)' : 'url(#logoGradient)'} filter="url(#shadow)" className="transition-all duration-300" />
          <circle cx="24" cy="24" r="16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '1s', animationDuration: '3s' }} />
          <text x="24" y="31" textAnchor="middle" fontSize="17" fontWeight="700" fill={theme === 'dark' ? '#1E293B' : '#FFFFFF'} className="font-bold transition-colors duration-300" style={{ fontFamily: 'Outfit, system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>P</text>
          <circle cx="34" cy="14" r="1.5" fill="rgba(255,255,255,0.7)" className="animate-pulse" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }} />
          <circle cx="14" cy="34" r="1" fill="rgba(255,255,255,0.5)" className="animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />
          <circle cx="36" cy="32" r="0.8" fill="rgba(255,255,255,0.6)" className="animate-pulse" style={{ animationDelay: '2s', animationDuration: '1.8s' }} />
          <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeWidth="1" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '10s' }} />
        </svg>
        {animated && (
          <>
            <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
            <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1.5s', animationDuration: '2.5s' }} />
          </>
        )}
      </div>
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className={`font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent ${textSizeClasses[size]} transition-all duration-300 hover:scale-105`}>
            Priyanshu
          </span>
          <span className={`font-medium text-gray-600 dark:text-gray-400 ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-xs sm:text-sm' : 'text-base'} -mt-1 transition-colors duration-300 ${size === 'md' ? 'hidden sm:block' : ''}`}>
            UX/UI Designer
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
