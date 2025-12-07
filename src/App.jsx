import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Trainers from './components/Trainers';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
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

      <Footer />
    </div>
  );
}

export default App;
