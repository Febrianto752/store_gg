import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import TopUpForm from "@/components/organisms/TopUpForm";
import TopUpItem from "@/components/organisms/TopUpItem";
import {
  GameItemTypes,
  NominalsTypes,
  PaymentTypes,
} from "@/services/data-types";
import { getDetailVoucher, getFeaturedGame } from "@/services/player";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

interface DetailProps {
  dataItem: GameItemTypes;
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export default function Detail({ dataItem, nominals, payments }: DetailProps) {
  const { query, isReady } = useRouter();

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
              <TopUpItem data={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem data={dataItem} type="desktop" />
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

export async function getStaticPaths() {
  const data = await getFeaturedGame();
  const paths = data.map((item: GameItemTypes) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getStaticProps({ params }: GetStaticProps) {
  const { id } = params;
  const data = await getDetailVoucher(id);
  return {
    props: {
      dataItem: {
        name: data.name,
        thumbnail: data.thumbnail,
        status: data.status,
        category: {
          _id: data.category._id,
          name: data.category.name,
        },
      },
      nominals: data.nominals,
      payments: data.payments,
    },
  };
}
