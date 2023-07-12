import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  try {
    const data = { test: 'hello.' };
    console.log('login');
    return NextResponse.json({ data });
  } catch (err) {
    throw err;
  }
}
