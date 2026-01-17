import { Quote } from 'lucide-react';

const TESTIMONIALS = [
    {
        text: "Zonikk helped us find the perfect warehouse for our expansion. Their technical understanding of loading docks and power requirements was crucial for our decision.",
        author: "Rajesh Kumar",
        company: "Logistics Solutions Inc."
    },
    {
        text: "The team at Zonikk are professional and efficient. They saved us months of research by providing accurate data on industrial zones and compliance.",
        author: "Priya Sharma",
        company: "Electro-Tech Pvt Ltd"
    },
    {
        text: "Their market expertise is unmatched. We were looking for a manufacturing plot and they found us a location with great connectivity and future appreciation potential.",
        author: "Amit Patel",
        company: "Precision Engineering"
    },
    {
        text: "Highly recommend Zonikk for industrial real estate. They don't just act as brokers but as strategic partners for your business growth.",
        author: "Sanjay Gupta",
        company: "Gupta Textiles"
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">Success Stories</p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                        Hear from Our <span className="text-accent underline decoration-2 underline-offset-4">Clients</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {TESTIMONIALS.map((test, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-border relative">
                            <div className="hidden lg:block absolute top-8 right-8 text-accent/10">
                                <Quote size={64} />
                            </div>
                            <p className="text-muted leading-relaxed mb-8 relative z-10 italic">"{test.text}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                                    {test.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{test.author}</h4>
                                    <p className="text-muted text-xs uppercase tracking-wider">{test.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
