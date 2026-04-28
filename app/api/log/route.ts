import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Log the data
    console.log('Event logged:', {
      timestamp: new Date().toISOString(),
      data: body,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logging error:', error);
    return NextResponse.json({ success: true });
  }
}
