import mongoose, { Schema, Document } from 'mongoose';

export interface IProperty extends Document {
    title: string;
    location: string;
    price: number;
    pricePerSqMt: number;
    propertyType: string;
    plotArea: string;
    buildUpArea: string;
    status: 'For sale' | 'For lease';
    images: string[];
    featured: boolean;
    specifications: {
        numberOfFloors: string;
        shedHeight: string;
        flooringType: string;
    };
    infrastructure: {
        roadWidth: string;
        propertyFacing: string;
        powerAvailability: string;
        waterDrainage: string;
    };
    connectivity: {
        airportDistance: string;
        railwayDistance: string;
        nearestExpressway: string;
        accessRoads: string;
    };
    marketDemand: {
        currentDrivers: string;
        idealBusiness: string;
        rentalOutlook: string;
    };
    description: string;
    contactAgent: {
        name: string;
        phone: string;
        email: string;
    };
    createdAt: Date;
    updatedAt: Date;
}

const PropertySchema: Schema = new Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    pricePerSqMt: { type: Number },
    propertyType: { type: String, required: true },
    plotArea: { type: String },
    buildUpArea: { type: String },
    status: { type: String, enum: ['For sale', 'For lease'], default: 'For sale' },
    images: [{ type: String }],
    featured: { type: Boolean, default: false },
    specifications: {
        numberOfFloors: String,
        shedHeight: String,
        flooringType: String,
    },
    infrastructure: {
        roadWidth: String,
        propertyFacing: String,
        powerAvailability: String,
        waterDrainage: String,
    },
    connectivity: {
        airportDistance: String,
        railwayDistance: String,
        nearestExpressway: String,
        accessRoads: String,
    },
    marketDemand: {
        currentDrivers: String,
        idealBusiness: String,
        rentalOutlook: String,
    },
    description: { type: String },
    contactAgent: {
        name: { type: String, default: 'Zonikk Real Estate' },
        phone: { type: String, default: '+91 9874563210' },
        email: { type: String, default: 'contact.zonikk@gmail.com' },
    },
}, { timestamps: true });

export default mongoose.models.Property || mongoose.model<IProperty>('Property', PropertySchema);
