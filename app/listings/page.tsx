"use client";

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Search, SlidersHorizontal, MapPin, Building2, IndianRupee } from 'lucide-react';

export default function ListingsPage() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        type: '',
        location: '',
        priceRange: '',
    });

    useEffect(() => {
        fetchProperties();
    }, [filters]);

    const fetchProperties = async () => {
        setLoading(true);
        try {
            const query = new URLSearchParams();
            if (filters.type) query.append('type', filters.type);
            // In a more advanced implementation, location and price would also be API-side
            const res = await fetch(`/api/properties?${query.toString()}`);
            const data = await res.json();

            // Client-side filtering for demonstration if API isn't fully exhaustive
            let filtered = data;
            if (filters.location) {
                filtered = filtered.filter((p: any) => p.location.toLowerCase().includes(filters.location.toLowerCase()));
            }

            setProperties(filtered);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
        setLoading(false);
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            <Navbar />

            {/* Header */}
            <div className="bg-primary pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 font-outfit">Explore All <span className="text-accent">Properties</span></h1>
                    <p className="text-white/70 max-w-2xl mx-auto">
                        Browse our curated selection of premium industrial sheds, warehouses, and plots across major industrial hubs.
                    </p>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12 relative z-10">
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-border">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-primary ml-1 uppercase tracking-widest flex items-center">
                                <Building2 size={12} className="mr-1 text-accent" /> Property Type
                            </label>
                            <select
                                value={filters.type}
                                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                                className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary text-sm font-medium"
                            >
                                <option value="">All Types</option>
                                <option value="Industrial Shed">Industrial Shed</option>
                                <option value="Warehouse">Warehouse</option>
                                <option value="Platted Factory">Platted Factory</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-primary ml-1 uppercase tracking-widest flex items-center">
                                <MapPin size={12} className="mr-1 text-accent" /> Location
                            </label>
                            <select
                                value={filters.location}
                                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                                className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary text-sm font-medium"
                            >
                                <option value="">All Locations</option>
                                <option value="Noida">Noida</option>
                                <option value="Greater Noida">Greater Noida</option>
                                <option value="Yamuna Expressway">Yamuna Expressway</option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label className="text-[10px] font-bold text-primary ml-1 uppercase tracking-widest flex items-center">
                                <IndianRupee size={12} className="mr-1 text-accent" /> Price Range
                            </label>
                            <select
                                value={filters.priceRange}
                                onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                                className="w-full bg-gray-50 border border-border rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary text-sm font-medium"
                            >
                                <option value="">Any Range</option>
                                <option value="0-50">0 - 50L</option>
                                <option value="50-100">50L - 1Cr</option>
                                <option value="100+">1Cr+</option>
                            </select>
                        </div>

                        <div className="flex items-end">
                            <button
                                onClick={fetchProperties}
                                className="w-full bg-primary text-white py-3 rounded-lg font-bold flex items-center justify-center hover:bg-opacity-90 transition-all shadow-md group"
                            >
                                <Search size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                                Find Properties
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Property List */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-border">
                    <p className="text-muted font-medium">Showing <span className="text-primary font-bold">{properties.length}</span> properties</p>
                    <button className="text-primary font-bold flex items-center text-sm hover:text-accent transition-colors">
                        <SlidersHorizontal size={16} className="mr-2" />
                        Sort: Newest First
                    </button>
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="animate-pulse bg-gray-100 h-[450px] rounded-xl border border-border"></div>
                        ))}
                    </div>
                ) : properties.length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-3xl border border-border border-dashed">
                        <Building2 size={64} className="mx-auto text-muted mb-4 opacity-20" />
                        <h3 className="text-xl font-bold text-primary mb-2">No Properties Found</h3>
                        <p className="text-muted">Try adjusting your filters or search criteria.</p>
                        <button
                            onClick={() => setFilters({ type: '', location: '', priceRange: '' })}
                            className="mt-6 text-accent font-bold underline underline-offset-4"
                        >
                            Clear all filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {properties.map((prop: any) => (
                            <PropertyCard
                                key={prop._id}
                                id={prop._id}
                                title={prop.title}
                                location={prop.location}
                                price={prop.price.toLocaleString()}
                                area={prop.plotArea}
                                image={prop.images?.[0] || '/images/hero.png'}
                                status={prop.status}
                            />
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
