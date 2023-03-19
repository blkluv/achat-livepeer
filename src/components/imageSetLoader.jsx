import ImageFetch, { dogs, anime } from "../pages/api/imagesFetch";
import React, { useEffect, useState } from "react";
import Image from "next/image"

function ImageSetLoader({ category }) {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    async function getUrl() {
      const arr = [];

      for (let i = 0; i < 8; i++) {
        if (category === "real estate") {
          const img = await dogs.get().then((res) => {
            return res.data.message;
          });
          arr.push(img);
        } else if (category === "restaurant") {
          const img = await ImageFetch.get().then((res) => {
            return res.data.file;
          });
          arr.push(img);
        } else if (category === "delivery") {
          const img = await anime.get().then((res) => {
            return res.data.url;
          });
          arr.push(img);
        }
      }
      setUrl(arr);
    }
    getUrl();
  }, [category]);

  return (
    <div>
      {url.map((item, i) => {
        return (
          <a key={i} rel="noreferrer" target="_blank" href={item}>
            <Image
              src={item ? item : null}
              className="img-caller rounded setImg"
              alt="Responsive image"
              width={400}
              height={400}
            />
          </a>
        );
      })}
    </div>
  );
}

export default ImageSetLoader;
