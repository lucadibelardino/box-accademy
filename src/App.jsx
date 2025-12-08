import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Trainers from './components/Trainers';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from './components/PrivacyModal';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

import heroVideo from './assets/hero-video.mp4';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app relative min-h-screen text-white">
      {/* Global Fixed Video Background */}
      <div className="fixed inset-0 z-[-1]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-bg/60" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/50 h-16 flex items-center">
        <div className="container flex justify-between items-center px-4">
          <div className="font-bold text-xl tracking-tighter z-50 relative">BOX ACADEMY</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#classes" className="hover:text-white transition-colors">Classes</a>
            <a href="#trainers" className="hover:text-white transition-colors">Trainers</a>
          </div>
          <button className="hidden md:block btn btn-primary text-sm px-4 py-2 bg-primary hover:bg-primary/80 rounded-full transition-colors">Join Now</button>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMenu} className="md:hidden z-50 relative text-white p-2">
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
              >
                <a href="#features" onClick={toggleMenu} className="text-2xl font-medium hover:text-primary transition-colors">Features</a>
                <a href="#classes" onClick={toggleMenu} className="text-2xl font-medium hover:text-primary transition-colors">Classes</a>
                <a href="#trainers" onClick={toggleMenu} className="text-2xl font-medium hover:text-primary transition-colors">Trainers</a>
                <button onClick={toggleMenu} className="btn btn-primary text-lg px-8 py-3 bg-primary rounded-full mt-4">Join Now</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Trainers />
      </main>

      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />

      <CookieBanner />
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
}

export default App;
