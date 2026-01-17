"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            <Navbar />

            {/* Hero Header */}
            <div className="bg-primary pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-outfit">Contact <span className="text-accent">Us</span></h1>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Have questions about a property or need industrial real estate advice? Our experts are here to help.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Form */}
                    <div className="lg:w-7/12">
                        <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12">
                            <h2 className="text-2xl font-bold text-primary mb-8 font-outfit">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary uppercase ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-gray-50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary text-sm shadow-inner"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary uppercase ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-gray-50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary text-sm shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary uppercase ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            placeholder="+91 98XXX XXXXX"
                                            className="w-full bg-gray-50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary text-sm shadow-inner"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-primary uppercase ml-1">Subject</label>
                                        <select className="w-full bg-gray-50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary text-sm shadow-inner appearance-none">
                                            <option>Property Inquiry</option>
                                            <option>List Your Property</option>
                                            <option>Consultation Request</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-primary uppercase ml-1">Message</label>
                                    <textarea
                                        rows={6}
                                        placeholder="Tell us about your requirements..."
                                        className="w-full bg-gray-50 border border-border rounded-xl px-4 py-4 focus:outline-none focus:ring-1 focus:ring-primary text-sm shadow-inner resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center hover:bg-opacity-90 transition-all shadow-lg group">
                                    <Send size={18} className="mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="lg:w-5/12 space-y-8">
                        <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12 h-full">
                            <h2 className="text-2xl font-bold text-primary mb-10 font-outfit underline decoration-accent decoration-2 underline-offset-8">Information</h2>

                            <div className="space-y-10">
                                <div className="flex items-start group">
                                    <div className="bg-accent/10 p-4 rounded-2xl mr-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors">+91 9874563210</p>
                                        <p className="text-sm text-muted">Mon-Fri from 9am to 6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="bg-accent/10 p-4 rounded-2xl mr-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Email Us</p>
                                        <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors">contact.zonikk@gmail.com</p>
                                        <p className="text-sm text-muted">Online support 24/7</p>
                                    </div>
                                </div>

                                <div className="flex items-start group">
                                    <div className="bg-accent/10 p-4 rounded-2xl mr-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">Visit Office</p>
                                        <p className="text-lg font-bold text-primary group-hover:text-accent transition-colors">Sector 1, Noida</p>
                                        <p className="text-sm text-muted">Uttar Pradesh, India - 201301</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Card */}
                            <div className="mt-16 bg-primary rounded-2xl p-6 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <MessageSquare size={32} className="text-accent mb-4" />
                                    <h4 className="font-bold mb-2">Need immediate help?</h4>
                                    <p className="text-xs text-white/70 leading-relaxed mb-4">Chat with our property experts right now for personalized guidance.</p>
                                    <button className="text-accent text-sm font-bold flex items-center hover:underline">
                                        Start Live Chat <Clock size={14} className="ml-2" />
                                    </button>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
