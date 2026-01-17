import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
                            Your Trusted Advisors for <br />
                            <span className="text-gray-900">Buying, Selling & Leasing Business Space </span>
                            <span className="text-accent underline decoration-2 underline-offset-8">Without the Broker Headaches</span>
                        </h1>
                        <p className="text-muted text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                            We don't just sell buildings. We research every site, provide partner helping SMEs, MNCs, and professionals find, sell, and lease commercial and industrial spaces with clarity and efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <Link href="/listings" className="bg-primary text-white px-8 py-4 rounded-md font-bold hover:bg-opacity-90 transition-all text-center">
                                Find Space For My Business
                            </Link>
                            <Link href="/contact" className="border-2 border-primary text-primary px-8 py-4 rounded-md font-bold hover:bg-primary hover:text-white transition-all text-center">
                                List Your Requirement
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-y-1 transform transition-transform hover:skew-y-0 duration-700">
                            <Image
                                src="/images/hero.png"
                                alt="Modern commercial building"
                                width={800}
                                height={600}
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                            <div className="flex items-center space-x-4">
                                <div className="bg-accent/10 p-3 rounded-full">
                                    <div className="w-4 h-4 bg-accent rounded-full animate-pulse"></div>
                                </div>
                                <div>
                                    <p className="text-xs text-muted">Active Listings</p>
                                    <p className="text-xl font-bold">500+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
