import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  try {
    const data = { test: 'register' };
    console.log('register');
    return NextResponse.json({ data });
  } catch (err) {
    throw err;
  }
}
