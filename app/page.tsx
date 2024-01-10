"use client";

import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<any>(null);
  const [image, setImage] = useState<any>(null);

  return (
    <form
      className="h-screen flex flex-col justify-center items-center"
      onSubmit={async (ev) => {
        ev.preventDefault();

        if (!file) return alert("Nada seleccionado");

        const response = await fetch("/api", {
          method: "POST",
          body: JSON.stringify({ image }),
        });
        const data = await response.json();
        console.log(data);
      }}
    >
      <div>Cloudinary - n</div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(ev) => {
          if (ev.target.files?.length) {
            console.log(ev.target.files[0]);

            setFile(ev.target.files[0]);

            const readImage = new FileReader();
            readImage.readAsDataURL(ev.target.files[0]);
            readImage.onload = (ev) => {
              if (ev.target) {
                setImage(ev.target.result);
              }
            };
          } else alert("sin datos");
        }}
      />
      <button>Send</button>

      {image && (
        <img
          //  className="rounded-lg"
          src={image}
          width="50%"
          alt=""
        />
      )}
    </form>
  );
}
