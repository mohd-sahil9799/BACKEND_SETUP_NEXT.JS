import { NextResponse } from 'next/server';
import { field } from '../../dataBase/db';

export async function GET(request) {
  try {
    const api = field;
    return NextResponse.json(api);
  } catch (error) {
    console.error('Error processing GET request:', error);
    return NextResponse.error(error);
  }
}

// export async function POST(request) {
//   try {
//     const payload = await request.json();

//     console.log(payload.name);

//     return NextResponse.json({ result: 'hello' });
//   } catch (error) {
//     console.error('Error processing POST request:', error);
//     return NextResponse.error(error);
//   }
// }
