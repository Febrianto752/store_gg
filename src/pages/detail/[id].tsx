import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import TopUpForm from "@/components/organisms/TopUpForm";
import TopUpItem from "@/components/organisms/TopUpItem";
import { getDetailVoucher } from "@/services/player";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function Detail() {
  const { query, isReady } = useRouter();
  const [data, setDataItem] = useState({
    name: "",
    thumbnail: "",
    category: {
      name: "",
    },
  });
  const [nominals, setNominals] = useState([]);
  const [payments, setPayments] = useState([]);

  const getVoucherDetailAPI = useCallback(async (id: string) => {
    const response = await getDetailVoucher(id);
    console.log("response : ", response);
    setDataItem({
      name: response.name,
      thumbnail: response.thumbnail,
      category: {
        name: response.category.name,
      },
    });
    setNominals(response.nominals);
    setPayments(response.payments);
  }, []);

  useEffect(() => {
    if (isReady) {
      const id: string = convertToString(query.id);
      console.log("router sudah tersedia", query.id);
      getVoucherDetailAPI(id);
    } else {
      console.log("router tidak tersedia");
    }
  }, [isReady]);

  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={data} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={data} type="desktop" />
              <hr />
              <TopUpForm nominals={nominals} payments={payments} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function convertToString(input: string | string[] | undefined) {
  // Check if the input is undefined or null
  if (input === undefined || input === null) {
    return ""; // Return an empty string in this case
  }

  // Check if the input is already a string
  if (typeof input === "string") {
    return input; // Return the input string directly
  }

  // Check if the input is an array
  if (Array.isArray(input)) {
    // Join the array elements into a single string
    return input.join(", "); // You can choose any delimiter you want
  }

  // If the input is none of the above, return an empty string
  return "";
}
