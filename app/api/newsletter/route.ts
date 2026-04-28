import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate required field
    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send to HubSpot
    const hubspotResponse = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          email: email,
          lifecyclestage: 'subscriber',
          hs_lead_status: 'OPEN',
        },
      }),
    });

    if (!hubspotResponse.ok) {
      console.error('HubSpot newsletter error:', await hubspotResponse.text());
      // Fallback: still return success to user
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Newsletter signup error:', error);
    // Fallback: return success
    return NextResponse.json({ success: true });
  }
}
