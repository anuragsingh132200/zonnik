import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import SiteContent from '@/models/SiteContent';

export async function GET(request: Request) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        const key = searchParams.get('key');

        if (key) {
            const content = await SiteContent.findOne({ key });
            return NextResponse.json(content);
        }

        const contents = await SiteContent.find({});
        return NextResponse.json(contents);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const { key, value } = await request.json();
        const content = await SiteContent.findOneAndUpdate(
            { key },
            { value },
            { upsert: true, new: true }
        );
        return NextResponse.json(content);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
