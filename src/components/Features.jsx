import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Clock, Trophy, Shield, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const features = [
    {
        icon: <Dumbbell className="w-6 h-6" />,
        title: "Pro Equipment",
        desc: "Train with the same gear used by world champions.",
        className: "md:col-span-2"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Expert Coaches",
        desc: "Learn from former pros and certified trainers.",
        className: "md:col-span-1"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Schedule",
        desc: "Classes available from 6AM to 10PM daily.",
        className: "md:col-span-1"
    },
    {
        icon: <Trophy className="w-6 h-6" />,
        title: "Competition Ready",
        desc: "Structured programs for amateur and pro fighters.",
        className: "md:col-span-2"
    },
];

const FeatureCard = ({ title, desc, icon, className }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className={twMerge(
            "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-white/20 transition-colors group",
            className
        )}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <div className="mb-4 inline-flex p-3 rounded-xl bg-white/5 text-primary group-hover:text-white group-hover:bg-primary/20 transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
            <p className="text-gray-400 leading-relaxed">{desc}</p>
        </div>
    </motion.div>
);

const Features = () => {
    return (
        <section id="features" className="py-20 md:py-32 relative">
            <div className="container px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Everything you need to reach your peak performance, designed for the modern athlete.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
