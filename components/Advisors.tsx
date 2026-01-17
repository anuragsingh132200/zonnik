const ADVISORS = [
    {
        number: '01',
        title: 'Deep Technical Understanding',
        desc: 'Our understand industrial footprints precisely across multiple locations. From load capacities to power requirements, we speak the language of engineering.'
    },
    {
        number: '02',
        title: 'Business-First approach',
        desc: 'We start with your business goals, and then align space requirements to match them. Every decision is made after looking at operational ROI.'
    },
    {
        number: '03',
        title: 'Micro-Market Expertise',
        desc: 'Zonikk focus on micro markets to ensure we understand local regulations, utility providers, and workforce availability in depth.'
    },
    {
        number: '04',
        title: 'Demand-Driven Advisory',
        desc: 'Our advice is based on market trends and real data, helping you invest in spaces that offer long-term growth and capital appreciation.'
    }
];

const Advisors = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                        More Than Agents, Your Industrial <span className="text-accent underline decoration-2 underline-offset-4">Advisors.</span>
                    </h2>
                    <p className="text-muted max-w-2xl">What makes us stand out in the industrial real estate landscape.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                    {ADVISORS.map((adv, idx) => (
                        <div key={idx} className="flex gap-8 group">
                            <div className="text-5xl font-extrabold text-[#f1f5f9] group-hover:text-accent/10 transition-colors leading-none">
                                {adv.number}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-4">{adv.title}</h3>
                                <p className="text-muted leading-relaxed">{adv.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advisors;
