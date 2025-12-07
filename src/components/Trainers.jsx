import React from 'react';

const trainers = [
    {
        name: "Alex 'The Hammer'",
        role: "Head Coach",
        image: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Sarah Jenkins",
        role: "Strength & Conditioning",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop"
    },
    {
        name: "Marcus Rodriguez",
        role: "Boxing Technique",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop"
    }
];

const Trainers = () => {
    return (
        <section id="trainers" className="py-24 border-t border-white/5">
            <div className="container">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Meet The Team</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[3/4]">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-xl font-bold">{trainer.name}</h3>
                                <p className="text-purple-400 text-sm">{trainer.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
