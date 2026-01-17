const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb://admin:password@localhost:27017/zonikk?authSource=admin';

const PropertySchema = new mongoose.Schema({
    title: String,
    location: String,
    price: Number,
    pricePerSqMt: Number,
    propertyType: String,
    plotArea: String,
    buildUpArea: String,
    status: String,
    images: [String],
    featured: Boolean,
    description: String,
}, { timestamps: true });

const Property = mongoose.models.Property || mongoose.model('Property', PropertySchema);

const seedData = [
    {
        title: "Industrial Shed – Sector 1",
        location: "Sector 1, near Metro station, Noida, Uttar Pradesh",
        price: 7565000,
        pricePerSqMt: 8500,
        propertyType: "Industrial Shed",
        plotArea: "890.0 SqMt",
        buildUpArea: "700.0 SqMt",
        status: "For sale",
        featured: true,
        images: ["/images/warehouse_interior.png"],
        description: "Highly sought after industrial shed in prime location."
    },
    {
        title: "Modern Logistic Park",
        location: "Greater Noida, Uttar Pradesh",
        price: 12500000,
        pricePerSqMt: 5000,
        propertyType: "Warehouse",
        plotArea: "2500.0 SqMt",
        buildUpArea: "2000.0 SqMt",
        status: "For sale",
        featured: true,
        images: ["/images/hero.png"],
        description: "State of the art logistics facility."
    }
];

async function seed() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB for seeding...');

        await Property.deleteMany({});
        console.log('Cleared existing properties.');

        await Property.insertMany(seedData);
        console.log('Seeded properties successfully.');

        mongoose.connection.close();
    } catch (error) {
        console.error('Seeding error:', error);
    }
}

seed();
