import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
  try {
    console.log(req.body);
    return NextResponse.json({ message: 'OK' });
  } catch (err) {
    throw err;
  }
}
