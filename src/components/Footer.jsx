import React from 'react';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black/20">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-bold tracking-tighter">BOX ACADEMY</div>

                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-gray-600">
                    © 2024 Box Academy. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
