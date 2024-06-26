import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}
