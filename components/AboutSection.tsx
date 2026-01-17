import Image from 'next/image';
import { UserCheck, Target } from 'lucide-react';

const AboutSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-5/12">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/warehouse_interior.png"
                                alt="Large warehouse interior"
                                width={600}
                                height={400}
                                className="object-cover h-[500px]"
                            />
                        </div>
                    </div>
                    <div className="lg:w-7/12">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
                            More than Real Estate <br />
                            <span className="text-accent underline decoration-2 underline-offset-4 font-outfit">Agents</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary text-white p-3 rounded-lg shrink-0">
                                    <UserCheck size={24} />
                                </div>
                                <div>
                                    <p className="text-muted leading-relaxed">
                                        Zonikk is an <span className="font-bold text-primary">industrial real estate advisory</span> firm working with manufacturing and logistics companies to <span className="font-bold text-primary">lease, buy, and sell asset</span> value on relevant.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary text-white p-3 rounded-lg shrink-0">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <p className="text-muted leading-relaxed">
                                        We are solution advisers, understanding your <span className="font-bold text-primary">production process</span> infrastructure needs, compliance requirements, and <span className="font-bold text-primary">expansion strategy</span> across industrial property.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
