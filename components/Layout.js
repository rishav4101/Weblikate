import Head from "next/head";
import React, { Children } from "react";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";
import Mainnav from "../components/Navbar";

const Layout = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: "#van",
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1,
          color: 0x0,
          shininess: 32.0,
          waveHeight: 23.5,
          waveSpeed: 0.6,
          zoom: 0.8,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div>
      <div ref={myRef} className="container" id="van"></div>
      <Head>
        <title>Zaffre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Mainnav />
        {props.children}
        <footer>copyright&copy; 2020 Zaffre</footer>
      </body>
    </div>
  );
};

export default Layout;
