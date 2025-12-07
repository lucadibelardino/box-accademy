import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Clock, Trophy, Shield, Zap } from 'lucide-react';

const features = [
    {
        icon: <Dumbbell className="w-6 h-6 text-purple-400" />,
        title: "Pro Equipment",
        desc: "Train with the same gear used by world champions."
    },
    {
        icon: <Users className="w-6 h-6 text-blue-400" />,
        title: "Expert Coaches",
        desc: "Learn from former pros and certified trainers."
    },
    {
        icon: <Clock className="w-6 h-6 text-green-400" />,
        title: "Flexible Schedule",
        desc: "Classes available from 6AM to 10PM daily."
    },
    {
        icon: <Trophy className="w-6 h-6 text-yellow-400" />,
        title: "Competition Ready",
        desc: "Structured programs for amateur and pro fighters."
    },
    {
        icon: <Shield className="w-6 h-6 text-red-400" />,
        title: "Safe Environment",
        desc: "Clean, sanitized, and respectful atmosphere."
    },
    {
        icon: <Zap className="w-6 h-6 text-orange-400" />,
        title: "High Intensity",
        desc: "Burn up to 800 calories per session."
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        We provide everything you need to reach your peak performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-panel p-6 hover:bg-white/5 transition-colors group"
                        >
                            <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
