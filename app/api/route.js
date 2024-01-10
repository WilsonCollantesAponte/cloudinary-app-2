import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dputhhzyb",
  api_key: "645242162575664",
  api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
});

export async function POST(request) {
  try {
    const { image } = await request.json();

    const response = await cloudinary.uploader.upload(image);
    const { secure_url } = response;

    return NextResponse.json({ secure_url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
