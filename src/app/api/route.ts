import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    console.log('test!!!!!!!!!!!!');
    const data = { test: 'hallo.' };
    return NextResponse.json({ data });
  } catch (err) {
    throw err;
  }
}
