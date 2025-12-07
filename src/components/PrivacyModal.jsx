import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, Eye } from 'lucide-react';

const PrivacyModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-bg border border-white/10 rounded-3xl shadow-2xl p-8"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="mb-8">
                        <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Privacy Policy</h2>
                        <p className="text-gray-400">Last updated: December 2024</p>
                    </div>

                    <div className="space-y-8 text-gray-300 leading-relaxed">
                        <section>
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                <Eye className="w-5 h-5 text-primary" />
                                1. Information We Collect
                            </h3>
                            <p>
                                We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and phone number.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-primary" />
                                2. How We Use Your Information
                            </h3>
                            <p>
                                We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to monitor and analyze trends and usage.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-white mb-3">3. Cookies</h3>
                            <p>
                                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-semibold text-white mb-3">4. Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at privacy@boxacademy.com.
                            </p>
                        </section>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10 flex justify-end">
                        <button
                            onClick={onClose}
                            className="px-6 py-2 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default PrivacyModal;
