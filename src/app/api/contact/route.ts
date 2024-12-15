import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
      const data = await req.json();

      console.log('Form submission:', data);
  
      return NextResponse.json(
        { message: "Message sent successfully!" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: "Something went wrong!" },
        { status: 500 }
      );
    }
  }