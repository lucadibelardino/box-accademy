import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Trainers from './components/Trainers';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyModal from './components/PrivacyModal';

import heroVideo from './assets/hero-video.mp4';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-[2px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-black/50 h-16 flex items-center">
        <div className="container flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter">BOX ACADEMY</div>
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#classes" className="hover:text-white transition-colors">Classes</a>
            <a href="#trainers" className="hover:text-white transition-colors">Trainers</a>
          </div>
          <button className="btn btn-primary text-sm px-4 py-2">Join Now</button>
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
