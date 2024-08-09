import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import myInfo from '@/models/myInfo';

 
export async function POST(req: NextRequest, res: NextResponse) 
{
  try
  {
    console.log("API is Working");
    await dbConnect();

    // const data = await myInfo.find({});
    // console.log(data);

    return NextResponse.json("API is Working");
  }
  catch(e)
  {
    console.log("Error");
    NextResponse.json('Error');
  }
}