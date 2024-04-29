import Script from "next/script";
import $ from "jquery";
import { useEffect } from "react";
import SideBar from "@/components/organisms/SideBar";
import TransactionContent from "@/components/organisms/TransactionContent";

export default function Transactions() {
  // useEffect(() => {
  //   $(document).ready(function () {
  //     $(".btn-status").click(function () {
  //       $(this).addClass("btn-active");
  //       $(".btn-status").not(this).removeClass("btn-active");
  //     });

  //     $("#list_status_title a").click(function (event) {
  //       var filter = $(event.target).attr("data-filter");
  //       $("#list_status_item tr").each(function () {
  //         var item = $(this);
  //         console.log(item.attr("data-category")!.indexOf(filter!) != -1);

  //         if (
  //           filter == "*" ||
  //           item.attr("data-category")!.indexOf(filter!) != -1
  //         )
  //           item.show();
  //         else item.hide();
  //       });
  //     });
  //   });
  // }, []);
  return (
    <>
      <section className="transactions overflow-auto">
        <SideBar activeMenu="Transactions" />
        <TransactionContent />
      </section>
    </>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
