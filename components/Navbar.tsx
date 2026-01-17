"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 bg-white shadow-sm py-4 transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold flex items-center space-x-2">
                            <span className="text-primary tracking-tighter">ZONIKK</span>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link href="/" className="text-primary hover:text-accent font-medium">Home</Link>
                            <Link href="/listings" className="text-primary hover:text-accent font-medium">Listings</Link>
                            <Link href="/contact" className="text-primary hover:text-accent font-medium">Contact Us</Link>
                            <Link href="/about" className="text-primary hover:text-accent font-medium">About Us</Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg py-4 px-4 space-y-4">
                    <Link href="/" className="block text-primary hover:text-accent font-medium" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/listings" className="block text-primary hover:text-accent font-medium" onClick={() => setIsOpen(false)}>Listings</Link>
                    <Link href="/contact" className="block text-primary hover:text-accent font-medium" onClick={() => setIsOpen(false)}>Contact Us</Link>
                    <Link href="/about" className="block text-primary hover:text-accent font-medium" onClick={() => setIsOpen(false)}>About Us</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
