"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Target, Users, ShieldCheck, TrendingUp, Handshake, Globe } from 'lucide-react';

const VALUES = [
    {
        title: 'Integrity First',
        desc: 'Unwavering commitment to honesty and ethical practices in every industrial transaction.',
        icon: <ShieldCheck size={32} />
    },
    {
        title: 'Customer Centric',
        desc: 'Deeply understanding business operational needs before recommending any property asset.',
        icon: <Users size={32} />
    },
    {
        title: 'Market Innovation',
        desc: 'Using data-driven micro-market insights to stay ahead in industrial real estate trends.',
        icon: <TrendingUp size={32} />
    },
    {
        title: 'Transparent Advisory',
        desc: 'No hidden agendas. Clear, technical, and objective advice for SMEs and MNCs.',
        icon: <Handshake size={32} />
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 overflow-hidden bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-outfit">
                        Redefining <span className="text-accent underline decoration-4 underline-offset-8">Industrial</span> Real Estate
                    </h1>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg">
                        Zonikk is more than an agency. We are strategic partners helping businesses navigate the complexities of industrial space with precision and clarity.
                    </p>
                </div>
                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <Globe size={600} className="text-white -mr-32 -mt-32" />
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
                                    <Image
                                        src="/images/hero.png"
                                        alt="Our Office"
                                        width={600}
                                        height={450}
                                        className="object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/5 rounded-full -z-0"></div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4 flex items-center">
                                <Target size={18} className="mr-2" /> Our Mission
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 font-outfit">
                                Bridging the Gap Between <br />
                                <span className="text-gray-900 italic">Business Needs </span> & <br />
                                <span className="text-gray-900 italic">Industrial Potential</span>
                            </h2>
                            <p className="text-muted text-lg leading-relaxed mb-8">
                                At Zonikk, we believe that industrial real estate is the backbone of any growing economy. Our mission is to simplify the acquisition and management of these assets for businesses of all sizes, from local SMEs to global MNCs.
                            </p>
                            <p className="text-muted leading-relaxed">
                                We combine deep technical understanding of infrastructure with sophisticated market analysis to ensure every client finds a space that doesn't just "fit," but actively fuels their operational success and long-term capital appreciation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-24 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 font-outfit">Our Core Values</h2>
                        <div className="h-1 w-20 bg-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((val, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all duration-500 group">
                                <div className="text-accent mb-6 group-hover:scale-110 transition-transform origin-left">
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 font-outfit">{val.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section Placeholder */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 font-outfit">Expertise You Can Trust</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="aspect-square bg-gray-100 rounded-3xl mb-6 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                    <div className="w-full h-full flex items-center justify-center text-muted/20">
                                        <Users size={120} />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">Advisor {i}</h4>
                                <p className="text-muted text-sm uppercase tracking-widest mt-1">Industrial Specialist</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 bg-[#0a1629] text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-outfit">Ready to work with the experts?</h3>
                            <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg leading-relaxed">Join hundreds of businesses that have found their ideal operations hub through Zonikk advisory.</p>
                            <button className="bg-accent text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg hover:scale-105">
                                Get in Touch Today
                            </button>
                        </div>
                        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full -mr-48 -mb-48 blur-2xl"></div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
