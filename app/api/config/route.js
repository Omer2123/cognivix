import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';

export const dynamic = 'force-dynamic';
import Config from '@/models/Config';

export async function GET() {
  try {
    await dbConnect();
    let config = await Config.findOne();
    if (!config) {
      config = await Config.create({ servicesGrayscaleBanners: true, servicesBannerOpacity: 3 });
    }
    const response = NextResponse.json(config);
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    return response;
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch config' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    
    delete data._id;
    delete data.__v;
    delete data.createdAt;
    delete data.updatedAt;
    
    const config = await Config.findOneAndUpdate(
      {}, 
      { $set: data }, 
      { upsert: true, new: true }
    );
    
    const response = NextResponse.json(config);
    response.headers.set('Cache-Control', 'no-store, max-age=0');
    return response;
  } catch (error) {
    console.error("Save config error:", error);
    return NextResponse.json({ error: 'Failed to update config' }, { status: 500 });
  }
}
