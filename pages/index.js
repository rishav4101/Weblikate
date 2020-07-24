import Head from "next/head";
import React, { Children } from "react";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const Index = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x0,
          shininess: 32.0,
          waveHeight: 23.5,
          waveSpeed: 0.9,
          zoom: 0.86,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} className="container">
      <Head>
        <title>Zaffre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body id="vantajs">
        <main>
          <h1 className="title">
            Welcome to <a>Zaffre Technologies</a>
          </h1>

          <p className="description">
            The site is under construction
            <br />
            <code>come back after a while</code>
          </p>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
          </a>
        </footer>
      </body>
    </div>
  );
};

export default Index;
