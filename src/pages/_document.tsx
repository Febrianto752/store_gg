import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
        <link rel="stylesheet" href="/css/homepage.css" />
        <link rel="stylesheet" href="/css/utilities.css" />
        <link rel="stylesheet" href="/css/detail.css" />
        <link rel="stylesheet" href="/css/checkout.css" />
        <link rel="stylesheet" href="/css/complete-checkout.css" />
        <link rel="stylesheet" href="/css/sign-in.css" />
        <link rel="stylesheet" href="/css/sign-up.css" />
        <link rel="stylesheet" href="/css/sign-up-photo.css" />
        <link rel="stylesheet" href="/css/sign-up-success.css" />
        <link rel="stylesheet" href="/css/404-not-found.css" />
        <link rel="stylesheet" href="/css/sidebar.css" />
        <link rel="stylesheet" href="/css/overview.css" />
        <link rel="stylesheet" href="/css/transactions.css" />
        <link rel="stylesheet" href="/css/transactions-detail.css" />
        <link rel="stylesheet" href="/css/edit-profile.css" />
        <link rel="stylesheet" href="/css/navbar-log-in.css" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
