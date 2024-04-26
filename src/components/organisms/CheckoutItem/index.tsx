import Image from "next/image";
import { useEffect, useState } from "react";

export default function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: "",
    name: "",
    category: {
      name: "",
    },
  });
  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-item");
    const dataItemLocal = JSON.parse(dataFromLocal!);
    console.log(dataFromLocal);
    setDataItem(dataItemLocal);
  }, []);

  const BASE_IMG_URL = process.env.NEXT_PUBLIC_IMG;

  return (
    <div className="game-checkout d-flex flex-row align-items-center pt-md-50 pb-md-50 pt-30 pb-30">
      <div className="pe-4">
        <div className="">
          <Image
            src={`${BASE_IMG_URL}/${dataItem.thumbnail}`}
            className="img-fluid"
            alt=""
            width={140}
            height={140}
          />
        </div>
      </div>
      <div>
        <p className="fw-bold text-xl color-palette-1 mb-10">
          Mobile Legends:
          <br /> The New Battle 2021
        </p>
        <p className="color-palette-2 m-0">Category: Mobile</p>
      </div>
    </div>
  );
}
