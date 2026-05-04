
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Sparkles } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [animationStage, setAnimationStage] = useState<'card' | 'plane' | 'hidden'>('hidden');
  const [emailError, setEmailError] = useState('');

  const protectedEmail = 'kumarsinghpriyanshu508@gmail.com';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'email' && emailError) setEmailError('');
  };

  const validateEmail = (email: string): boolean => {
    return email.toLowerCase().trim() !== protectedEmail.toLowerCase();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) { setEmailError('Please use your own email address to contact me.'); return; }
    setShowPopup(true); setAnimationStage('card'); setFormData({ name: '', email: '', message: '' });
    setTimeout(() => { setAnimationStage('plane'); setTimeout(() => { setShowPopup(false); setAnimationStage('hidden'); }, 1400); }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-white dark:bg-[#050508]">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-cyan-50/30 dark:from-[#050508] dark:to-[#050508]" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-300/10 to-blue-300/10 dark:from-cyan-500/8 dark:to-blue-500/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-300/10 to-teal-300/10 dark:from-blue-500/8 dark:to-teal-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="hidden sm:block absolute top-32 left-48 animate-sparkle"><Sparkles className="text-cyan-400 opacity-40" size={18} /></div>
      <div className="absolute bottom-24 right-32 animate-sparkle-delayed"><Sparkles className="text-blue-400 opacity-40" size={16} /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 transition-all duration-500" style={{background: 'rgba(0,0,0,0.2)'}}>
            <div className="relative flex flex-col items-center justify-center text-center w-full h-full" style={{minWidth: 400, minHeight: 220, width: '90vw', maxWidth: 480, height: 220, zIndex: 10}}>
              <div className={`w-full h-full flex flex-col items-center justify-center absolute inset-0 transition-all duration-500 ${animationStage === 'card' ? 'opacity-100 scale-100' : 'opacity-0 scale-90'} bg-white dark:bg-gray-900 border-2 border-cyan-400 rounded-2xl text-gray-800 dark:text-cyan-300 shadow-2xl`}
                style={{fontSize: '1.25rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h4 className="text-2xl font-bold mb-4">Thanks for reaching out!</h4>
                <p className="text-lg">I'll reply to you soon. Have a nice day!</p>
              </div>
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg"
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 pointer-events-none ${animationStage === 'plane' ? 'plane-fly-curved-smooth opacity-100 scale-100' : 'opacity-0 scale-75'}`}
                style={{zIndex: 3, filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.18))'}}>
                <polygon points="10,30 110,10 70,50 60,40 50,50" fill="#fff" stroke="#0891b2" strokeWidth="2" />
                <polygon points="10,30 60,40 50,50" fill="#f3f4f6" stroke="#0891b2" strokeWidth="1" />
                <polygon points="110,10 70,50 60,40" fill="#e5e7eb" stroke="#0891b2" strokeWidth="1" />
                <path d="M 60 50 Q 80 60 120 40" stroke="#0891b2" strokeWidth="2" fill="none" opacity=".25" className="plane-trail" />
              </svg>
            </div>
            <style>{`.plane-fly-curved-smooth{animation:plane-fly-curved-smooth 1.2s cubic-bezier(0.1,0.2,0.3,1) forwards}@keyframes plane-fly-curved-smooth{0%{opacity:1;transform:translate(0px,0px) rotate(0deg) scale(1.2)}30%{opacity:1;transform:translate(80px,-30px) rotate(-8deg) scale(1.05)}60%{opacity:1;transform:translate(400px,-160px) rotate(8deg) scale(1.1)}100%{opacity:0;transform:translate(900px,-420px) rotate(30deg) scale(0.7)}}.plane-trail{stroke-dasharray:60;stroke-dashoffset:60;animation:trail-draw .8s .3s ease-out forwards}@keyframes trail-draw{to{stroke-dashoffset:0}}`}</style>
          </div>
        )}
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Outfit, Inter, sans-serif' }}>
            <span className="text-gray-800 dark:text-white">Get In</span>
            <span className="bg-gradient-to-r from-cyan-600 to-blue-500 bg-clip-text text-transparent"> Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Interested in collaborating on a UX/UI or web development project? Let's connect and discuss how we can work together to build amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-cyan-200/30 dark:border-cyan-700/30 hover:border-cyan-400/50">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 relative z-10" style={{ fontFamily: 'Outfit, sans-serif' }}>Contact Information</h3>
              <div className="space-y-5 relative z-10">
                <div className="flex items-center p-4 bg-cyan-50/80 dark:bg-cyan-900/20 rounded-xl hover:bg-cyan-100/80 dark:hover:bg-cyan-900/30 transition-colors duration-300 border border-cyan-200/30 dark:border-cyan-700/30">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full mr-4 shadow-lg"><Mail className="text-white" size={20} /></div>
                  <div><div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Email</div><div className="text-gray-600 dark:text-gray-400 text-sm">kumarsinghpriyanshu508@gmail.com</div></div>
                </div>
                <div className="flex items-center p-4 bg-cyan-50/80 dark:bg-cyan-900/20 rounded-xl hover:bg-cyan-100/80 dark:hover:bg-cyan-900/30 transition-colors duration-300 border border-cyan-200/30 dark:border-cyan-700/30">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full mr-4 shadow-lg"><Phone className="text-white" size={20} /></div>
                  <div><div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Phone</div><div className="text-gray-600 dark:text-gray-400 text-sm">+91 8935930184</div></div>
                </div>
                <div className="flex items-center p-4 bg-cyan-50/80 dark:bg-cyan-900/20 rounded-xl hover:bg-cyan-100/80 dark:hover:bg-cyan-900/30 transition-colors duration-300 border border-cyan-200/30 dark:border-cyan-700/30">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full mr-4 shadow-lg"><MapPin className="text-white" size={20} /></div>
                  <div><div className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Location</div><div className="text-gray-600 dark:text-gray-400 text-sm">New Delhi / Gurugram, India</div></div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 relative z-10">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 text-sm">Connect with me</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/priyanshu-kumar-singh-3bb328290?" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"><Linkedin size={18} /></a>
                  <a href="https://github.com/Priyanshu07-kr" target="_blank" rel="noopener noreferrer" className="p-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-full hover:shadow-lg hover:shadow-gray-500/25 transform hover:-translate-y-1 transition-all duration-300"><Github size={18} /></a>
                  <a href="mailto:kumarsinghpriyanshu508@gmail.com" className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300"><Mail size={18} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="group bg-white/95 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden border border-cyan-200/30 dark:border-cyan-700/30 hover:border-cyan-400/50">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 relative z-10" style={{ fontFamily: 'Outfit, sans-serif' }}>Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 transition-colors duration-300 bg-white/90" placeholder="Enter your name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={`w-full px-4 py-3 border ${emailError ? 'border-red-500 focus:ring-red-400 focus:border-red-400' : 'border-gray-300 dark:border-gray-600 focus:ring-cyan-400 focus:border-cyan-400 dark:focus:ring-cyan-500 dark:focus:border-cyan-500'} dark:bg-gray-700/50 dark:text-white rounded-xl focus:ring-2 transition-colors duration-300 bg-white/90`} placeholder="Enter your email" required />
                {emailError && (<p className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center"><span className="mr-1">⚠️</span>{emailError}</p>)}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700/50 dark:text-white rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 transition-colors duration-300 resize-none bg-white/90" placeholder="Tell me about your project or just say hello!" required></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3.5 px-6 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"><Send size={18} /> Send Message</button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-600 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2025 Priyanshu Kumar Singh. Made with ❤️ and lots of ☕</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
