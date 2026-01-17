import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#f8fafc] pt-16 pb-8 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold flex items-center space-x-2 mb-6">
                            <span className="text-primary tracking-tighter">ZONIKK</span>
                        </Link>
                        <p className="text-muted text-sm leading-relaxed mb-6">
                            Your trusted advisors for buying, selling & leasing business space without the broker headaches.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted hover:text-primary transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="text-muted hover:text-primary transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="text-muted hover:text-primary transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="text-muted hover:text-primary transition-colors"><Linkedin size={20} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/" className="text-muted hover:text-primary text-sm">Home</Link></li>
                            <li><Link href="/listings" className="text-muted hover:text-primary text-sm">Listings</Link></li>
                            <li><Link href="/about" className="text-muted hover:text-primary text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-primary text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6">Property Types</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-muted hover:text-primary text-sm">Industrial Sheds</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary text-sm">Warehouses</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary text-sm">Factories</Link></li>
                            <li><Link href="#" className="text-muted hover:text-primary text-sm">Plots</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-primary mb-6">Newsletter</h4>
                        <p className="text-muted text-sm mb-4">Subscribe to our newsletter for latest property updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-white border border-border px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-opacity text-sm font-medium">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-muted text-xs">© 2025 Zonikk. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-muted hover:text-primary text-xs">Privacy Policy</Link>
                        <Link href="#" className="text-muted hover:text-primary text-xs">Terms & Conditions</Link>
                        <Link href="#" className="text-muted hover:text-primary text-xs">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
