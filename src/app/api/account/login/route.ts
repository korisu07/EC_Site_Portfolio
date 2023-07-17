import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  try {
    const data = { test: 'login' };
    console.log('login');
    return NextResponse.json({ data });
  } catch (err) {
    throw err;
  }
}
