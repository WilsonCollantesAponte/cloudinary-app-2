import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dputhhzyb",
  api_key: "645242162575664",
  api_secret: "hXQFGVBItNRiiJ7DPD_8B4Avmew",
});

export async function POST(request) {
  //   const data = await request.json();

  try {
    const { image } = await request.json();

    const response = await cloudinary.uploader.upload(image);
    const { secure_url } = response;
    // const bytes = await data.arrayBuffer();
    // const buffer = Buffer.from(bytes);

    // const response = await new Promise((resolve, reject) => {
    //   cloudinary.uploader
    //     .upload_stream({}, (err, result) => {
    //       if (err) reject(err);

    //       resolve(result);
    //     })
    //     .end(buffer);
    // });

    // console.log(response);
    // const response = await new Promise((resolve, reject) => {
    //   const readImage = new FileReader();
    //   readImage.readAsDataURL(image);
    //   readImage.onload = async (ev) => {
    //     if (ev.target) {
    //       const response = await cloudinary.uploader.upload();
    //       resolve(response);
    //     }
    //   };
    // });

    return NextResponse.json({ secure_url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
