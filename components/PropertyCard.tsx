import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Maximize } from 'lucide-react';

interface PropertyCardProps {
    id: string;
    title: string;
    location: string;
    price: string;
    area: string;
    image: string;
    status: string;
}

const PropertyCard = ({ id, title, location, price, area, image, status }: PropertyCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden group hover:shadow-md transition-shadow duration-300">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {status}
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1">{title}</h3>
                <div className="flex items-center text-muted text-sm mb-4">
                    <MapPin size={14} className="mr-1 shrink-0" />
                    <span className="line-clamp-1">{location}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div>
                        <p className="text-xs text-muted font-medium">Starting from</p>
                        <p className="text-xl font-extrabold text-accent">₹{price}</p>
                    </div>
                    <div>
                        <p className="text-xs text-muted font-medium text-right">Area</p>
                        <div className="flex items-center text-primary font-bold">
                            <Maximize size={14} className="mr-1" />
                            {area}
                        </div>
                    </div>
                </div>
                <Link href={`/properties/${id}`} className="mt-6 block w-full bg-primary text-white text-center py-3 rounded-md font-bold hover:bg-opacity-90 transition-opacity">
                    View Detail
                </Link>
            </div>
        </div>
    );
};

export default PropertyCard;
