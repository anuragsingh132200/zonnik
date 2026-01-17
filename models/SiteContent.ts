import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteContent extends Document {
    key: string; // e.g., 'hero_section', 'testimonials'
    value: any; // Flexible schema for diverse content
    updatedAt: Date;
}

const SiteContentSchema: Schema = new Schema({
    key: { type: String, required: true, unique: true },
    value: { type: Schema.Types.Mixed, required: true },
}, { timestamps: true });

export default mongoose.models.SiteContent || mongoose.model<ISiteContent>('SiteContent', SiteContentSchema);
