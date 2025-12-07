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
        <section id="trainers" className="py-32 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="container px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                    Meet The Team
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {trainers.map((trainer, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-3xl aspect-[3/4] border border-white/10 bg-white/5">
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                                <p className="text-primary font-medium">{trainer.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trainers;
