import { Shirt, FlaskRound as Flask, Settings, Zap, Truck, HardHat, Sun, Shield, Battery } from 'lucide-react';

const INDUSTRIES = [
    { name: 'Textile & Apparel', icon: <Shirt size={24} />, items: ['Hosiery & Garments', 'Leather Products'] },
    { name: 'Materials & Chemicals', icon: <Flask size={24} />, items: ['Rubber, Plastic, & Polymer Works', 'Paper, Pulp, Publishing & Printing'] },
    { name: 'Machinery & Tools', icon: <Settings size={24} />, items: ['Mechanical & Machine Shops', 'Small Tools/Lathes'] },
    { name: 'Electronics & Transport', icon: <Truck size={24} />, items: ['Parts & Retail Components', 'Transport Equipment Manufacturing'] },
    { name: 'Electrical Products', icon: <Zap size={24} />, items: ['Electrical Appliances & Accessories', 'Electrical Wire/Cable Manufacturing'] },
    { name: 'Automotive & Construction', icon: <HardHat size={24} />, items: ['Commercial Parts Packing Plant', 'Building & Finishing Material'] },
    { name: 'Food/Beverage & Travel', icon: <Sun size={24} />, items: ['Agro Food Processing', 'Food Processing Units'] },
    { name: 'Defense & Aerospace', icon: <Shield size={24} />, items: ['Defense Equipment Manufacturing', 'Aerospace Precision Manufacturing'] },
    { name: 'Energy Storage & Healthcare', icon: <Battery size={24} />, items: ['EV Batteries & Energy Storage', 'Pharmaceutical Manufacturing'] },
];

const Industries = () => {
    return (
        <section className="py-20 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Market Specialization</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                        Industries We <span className="text-accent underline decoration-2 underline-offset-4">Serve</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Right pallet of strength and space solutions across various manufacturing and SMEs sectors industrial environments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {INDUSTRIES.map((ind, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="bg-primary text-white p-4 rounded-xl group-hover:bg-accent transition-colors">
                                    {ind.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary">{ind.name}</h3>
                            </div>
                            <ul className="space-y-3">
                                {ind.items.map((item, i) => (
                                    <li key={i} className="flex items-center text-muted text-sm">
                                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 shrink-0"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Industries;
