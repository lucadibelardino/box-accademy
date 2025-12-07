import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronRight } from 'lucide-react';


const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Video moved to App.jsx */}

            {/* Spotlight Effect (Subtle overlay on top of video) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-[100%] opacity-30 animate-spotlight" />
            </div>

            <div className="container relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary-glow mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span>New Pro Classes Available</span>
                        <ChevronRight className="w-3 h-3 text-gray-400" />
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-white drop-shadow-2xl">
                        Master the <br />
                        Art of Boxing
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light drop-shadow-lg">
                        Precision. Power. Discipline. <br />
                        Join the elite community where champions are forged.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
                            <span className="mr-2">Start Training</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                        </button>

                        <button className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10">
                            <Play className="mr-2 w-4 h-4 fill-current" />
                            Watch Video
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
