import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import {
    ChevronLeft,
    MapPin,
    Phone,
    Mail,
    CheckCircle2,
    ChevronRight,
    Maximize,
    Layers,
    Zap,
    Droplets,
    Plane,
    Train,
    Wind
} from 'lucide-react';

export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    // In a real app, fetch data from API based on id
    const property = {
        title: "Industrial Shed – Sector 1",
        location: "Sector 1, near Metro station, Noida, Uttar Pradesh",
        price: "75,65,000",
        pricePerSqMt: "8500",
        propertyType: "Warehouse / Shed / Platted Factory",
        plotArea: "890.0 SqMt",
        buildUpArea: "700.0 SqMt (If applicable)",
        status: "For sale",
        id: "P-507066",
        images: ["/images/warehouse_interior.png", "/images/hero.png", "/images/warehouse_interior.png", "/images/hero.png"],
        specs: {
            floors: "Single Story",
            height: "35 feet",
            flooring: "RCC / 4 Tons per SqMt"
        },
        infrastructure: {
            roadWidth: "60 feet",
            facing: "North-East",
            power: "Sanctioned Load / Expandability",
            water: "Municipal Supply Available"
        },
        pricing: {
            rate: "₹ 8,500 per SqMt",
            structure: "Outright Sale"
        },
        connectivity: {
            airport: "28 km",
            railway: "15 km",
            expressway: "Noida - Greater Noida Expressway - 5 km",
            access: "Direct Access"
        },
        market: {
            drivers: "E-commerce, Logistics Hub",
            userClass: "Warehousing, Light Manufacturing",
            outlook: "15-18% annual growth expected"
        },
        description: "This property is strategically located in Sector 1, Noida, one of the most sought-after industrial areas in the NCR region. The location offers excellent connectivity to major highways and is in close proximity to the upcoming metro station. The industrial pocket is well-developed with established infrastructure and is home to several multinational corporations and growing SMEs. Future development plans include road widening and improved utilities, making this an ideal investment opportunity for businesses looking for long-term growth potential."
    };

    return (
        <main className="min-h-screen bg-[#fcfcfc]">
            <Navbar />

            {/* Detail Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <Link href="/listings" className="flex items-center text-muted hover:text-primary transition-colors text-sm">
                        <ChevronLeft size={16} className="mr-1" />
                        Back to Properties
                    </Link>
                </div>

                {/* Gallery */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
                    <div className="relative rounded-2xl overflow-hidden h-[300px] lg:h-[500px]">
                        <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-[300px] lg:h-[500px]">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image src={property.images[1]} alt={property.title} fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image src={property.images[2]} alt={property.title} fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image src={property.images[0]} alt={property.title} fill className="object-cover" />
                        </div>
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image src={property.images[1]} alt={property.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold cursor-pointer">
                                View all Photos
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Main Info */}
                    <div className="lg:w-8/12">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h1 className="text-3xl font-extrabold text-primary mb-2 font-outfit">{property.title}</h1>
                                <div className="flex items-center text-muted">
                                    <MapPin size={16} className="mr-1" />
                                    {property.location}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="p-2 border border-border rounded-full hover:bg-white hover:shadow-sm">
                                    <ChevronLeft size={20} />
                                </button>
                                <button className="p-2 border border-border rounded-full hover:bg-white hover:shadow-sm">
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4 mb-8">
                            <div className="bg-[#f1f5f9] px-4 py-2 rounded-lg text-primary font-bold">
                                {property.id}
                            </div>
                            <div className="bg-[#f1f5f9] px-4 py-2 rounded-lg text-primary font-bold">
                                {property.status}
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-4xl font-extrabold text-accent mb-1">₹ {property.price}</p>
                            <p className="text-muted text-sm italic">₹ {property.pricePerSqMt} per SqMt</p>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-border mb-8 overflow-x-auto whitespace-nowrap">
                            <button className="px-8 py-4 border-b-2 border-primary text-primary font-bold">Overview</button>
                            <button className="px-8 py-4 text-muted font-bold hover:text-primary transition-colors">Construction Specifications</button>
                        </div>

                        {/* Details Cards */}
                        <div className="space-y-6">
                            {/* Property Details Grid */}
                            <div className="bg-white border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-extrabold text-primary mb-6">Property Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="text-muted text-sm font-bold">Property Address</span>
                                        <span className="text-primary text-sm font-medium">{property.location.split(',')[0]}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="text-muted text-sm font-bold">Property Type</span>
                                        <span className="text-primary text-sm font-medium">Warehouse / Shed</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="text-muted text-sm font-bold">Plot Area</span>
                                        <span className="text-primary text-sm font-medium">{property.plotArea}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-2">
                                        <span className="text-muted text-sm font-bold">Build Up Area</span>
                                        <span className="text-primary text-sm font-medium">{property.buildUpArea}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Construction Specs */}
                            <div className="bg-white border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-extrabold text-primary mb-6">Construction Specifications</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold">Number of Floors</span>
                                        <span className="text-primary text-sm font-medium">{property.specs.floors}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold">Shed Height / Clear Height</span>
                                        <span className="text-primary text-sm font-medium">{property.specs.height}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold">Flooring Type & Load Capacity</span>
                                        <span className="text-primary text-sm font-medium">{property.specs.flooring}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Infrastructure */}
                            <div className="bg-white border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-extrabold text-primary mb-6">Infrastructure</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold">Road Width</span>
                                        <span className="text-primary text-sm font-medium">{property.infrastructure.roadWidth}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold">Property Facing</span>
                                        <span className="text-primary text-sm font-medium">{property.infrastructure.facing}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold">Power Availability</span>
                                        <span className="text-primary text-sm font-medium">{property.infrastructure.power}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold">Water & Drainage Availability</span>
                                        <span className="text-primary text-sm font-medium">{property.infrastructure.water}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Connectivity */}
                            <div className="bg-white border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-extrabold text-primary mb-6">Connectivity & Accessibility</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <div className="flex items-center text-muted text-sm font-bold">
                                            <Plane size={16} className="mr-2" /> Airport Distance
                                        </div>
                                        <span className="text-primary text-sm font-medium">{property.connectivity.airport}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <div className="flex items-center text-muted text-sm font-bold">
                                            <Train size={16} className="mr-2" /> Railway Station Distance
                                        </div>
                                        <span className="text-primary text-sm font-medium">{property.connectivity.railway}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <div className="flex items-center text-muted text-sm font-bold">
                                            <Wind size={16} className="mr-2" /> Nearest Expressway / Major Roads
                                        </div>
                                        <span className="text-primary text-sm font-medium text-right">{property.connectivity.expressway}</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 pb-3">
                                        <span className="text-muted text-sm font-bold pl-6">Industrial Sector Access Roads</span>
                                        <span className="text-primary text-sm font-medium">{property.connectivity.access}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white border border-border rounded-2xl p-8">
                                <h3 className="text-lg font-extrabold text-primary mb-6">Property Details</h3>
                                <p className="text-muted text-sm leading-loose">
                                    {property.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Contact */}
                    <div className="lg:w-4/12">
                        <div className="sticky top-32 space-y-6">
                            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-8 underline decoration-accent decoration-2 underline-offset-4">Contact Agent</h3>

                                <div className="flex items-center mb-8">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4 text-2xl">
                                        Z
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary">Zonikk Real Estate</h4>
                                        <p className="text-muted text-xs">Certified Advisor</p>
                                    </div>
                                </div>

                                <div className="space-y-6 mb-10">
                                    <div className="flex items-center text-primary font-medium">
                                        <Phone size={18} className="mr-4 text-accent" />
                                        +91 9874563210
                                    </div>
                                    <div className="flex items-center text-primary font-medium">
                                        <Mail size={18} className="mr-4 text-accent" />
                                        contact.zonikk@gmail.com
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <button className="w-full bg-white border-2 border-primary text-primary px-8 py-3 rounded-md font-bold hover:bg-primary hover:text-white transition-all text-center">
                                        Enquire Now
                                    </button>
                                    <button className="w-full bg-primary text-white border-2 border-primary px-8 py-3 rounded-md font-bold hover:bg-opacity-90 transition-all text-center">
                                        Schedule a Tour
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
