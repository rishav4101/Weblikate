import Head from "next/head";
import React from "react";
import Mainnav from "../components/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Weblikate</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Weblikate web solution" content="Weblikate web solutions Weblikate.tech Weblikate.technology modern web app machine learing transforming business or scaling SEO optimisation"></meta>
      </Head>
      <body>
        <Mainnav />
        {props.children}
        <footer>
          <p
            style={{
              backgroundColor: "#000",
              width: "160px",
              margin: "0 auto",
              padding: "3px",
              borderRadius: "7px",
              marginTop: "7px",
            }}
          >
            Weblikate 2020
          </p>
        </footer>
      </body>
    </div>
  );
};

export default Layout;
