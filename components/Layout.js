import Head from "next/head";
import React from "react";
import Mainnav from "../components/Navbar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Zaffre Web Solutions</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="zaffre web solution" content="zaffre web solutions zaffre.tech zaffre.technology modern web app machine learing transforming business or scaling SEO optimisation"></meta>
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
            copyright&copy; 2020 Zaffre
          </p>
        </footer>
      </body>
    </div>
  );
};

export default Layout;
