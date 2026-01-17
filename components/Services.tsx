import { Factory, Warehouse, Building2, LayoutGrid } from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
    {
        title: 'Warehouse & Logistics',
        desc: 'Strategic locations for efficient storage and distribution.',
        icon: <Warehouse size={32} />
    },
    {
        title: 'Industrial Sheds',
        desc: 'Versatile sheds for manufacturing and storage needs.',
        icon: <Factory size={32} />
    },
    {
        title: 'Industrial Plots',
        desc: 'Prime land parcels for custom industrial development.',
        icon: <LayoutGrid size={32} />
    },
    {
        title: 'Platted Factories',
        desc: 'Ready-to-use factory spaces with essential utilities.',
        icon: <Building2 size={32} />
    }
];

const Services = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2 text-center">Comprehensive Solutions</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 text-center">
                        What We <span className="text-accent underline decoration-2 underline-offset-4">Do</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-center">
                        Helping businesses find, buy, and sell industrial assets with full transparency.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {SERVICES.map((service, idx) => (
                            <div key={idx} className="p-6 rounded-2xl border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group">
                                <div className="text-primary group-hover:text-accent transition-colors mb-4 bg-gray-50 p-4 rounded-xl inline-block">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="lg:w-1/2">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px]">
                            <Image
                                src="/images/hero.png"
                                alt="Industrial Overview"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
