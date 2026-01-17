"use client";

import { useState } from 'react';
import PropertyCard from './PropertyCard';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const FEATURED_PROPERTIES = [
    {
        id: '1',
        title: 'Industrial Shed – Sector 1',
        location: 'Sector 1, Noida, Uttar Pradesh',
        price: '75,65,000',
        area: '890 SqMt',
        image: '/images/warehouse_interior.png',
        status: 'For sale'
    },
    {
        id: '2',
        title: 'Modern Logistic Park',
        location: 'Greater Noida, Uttar Pradesh',
        price: '1,25,00,000',
        area: '2500 SqMt',
        image: '/images/hero.png',
        status: 'For sale'
    },
    {
        id: '3',
        title: 'Industrial Plot – Phase II',
        location: 'Yamuna Expressway, UP',
        price: '45,00,000',
        area: '500 SqMt',
        image: '/images/warehouse_interior.png',
        status: 'For lease'
    }
];

const FeaturedProperties = () => {
    const [activeType, setActiveType] = useState('Sale');

    return (
        <section className="py-20 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                        Featured <span className="text-accent underline decoration-2 underline-offset-4">Properties</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Check out some of our premium industrial listings: warehouses, sheds, plots, and factories.
                    </p>
                </div>

                {/* Filters */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-border mb-12">
                    <div className="flex flex-col lg:row gap-6">
                        <div className="flex bg-gray-100 p-1 rounded-lg self-center mb-4 lg:mb-0">
                            <button
                                onClick={() => setActiveType('Sale')}
                                className={`px-6 py-2 rounded-md font-bold transition-all ${activeType === 'Sale' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-primary'}`}
                            >
                                Sale
                            </button>
                            <button
                                onClick={() => setActiveType('Lease')}
                                className={`px-6 py-2 rounded-md font-bold transition-all ${activeType === 'Lease' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-primary'}`}
                            >
                                Lease
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-grow">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary ml-1 uppercase tracking-wider">Location</label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-1 focus:ring-primary text-sm">
                                        <option>Select Location</option>
                                        <option>Noida</option>
                                        <option>Greater Noida</option>
                                        <option>Yamuna Expressway</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary ml-1 uppercase tracking-wider">Property Type</label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-1 focus:ring-primary text-sm">
                                        <option>Select Property Type</option>
                                        <option>Warehouse</option>
                                        <option>Industrial Shed</option>
                                        <option>Platted Factory</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-primary ml-1 uppercase tracking-wider">Price Range</label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 appearance-none focus:outline-none focus:ring-1 focus:ring-primary text-sm">
                                        <option>Select price range</option>
                                        <option>0 - 50L</option>
                                        <option>50L - 1Cr</option>
                                        <option>1Cr+</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button className="bg-primary text-white px-8 py-3 rounded-lg font-bold flex items-center justify-center hover:bg-opacity-90 transition-opacity self-center mt-4 lg:mt-6 lg:self-end">
                            <Search size={18} className="mr-2" />
                            Search
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {FEATURED_PROPERTIES.map((prop) => (
                            <PropertyCard key={prop.id} {...prop} />
                        ))}
                    </div>

                    <div className="flex justify-center mt-12 space-x-4">
                        <button className="p-3 border border-border rounded-full hover:bg-white hover:shadow-md transition-all text-muted hover:text-primary">
                            <ChevronLeft size={24} />
                        </button>
                        <button className="p-3 border border-border rounded-full hover:bg-white hover:shadow-md transition-all text-muted hover:text-primary">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;
