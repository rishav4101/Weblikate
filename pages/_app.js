import "../styles.css";
import React from "react";
import Router from "next/router";
import Loader from "../components/Loader";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

export default function MyApp({ Component, pageProps }) {
  // const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== Router.pathname && setLoading(true);
    // handleComplete event was not firing
    const handleComplete = (url) =>
      url === Router.pathname && setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  });

  const [vantaEffect, setVantaEffect] = useState(0);
  // const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: "#van",
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 1000.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
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
    <>
      <div className="container" id="van"></div>
      {loading ? <Loader /> : <Component {...pageProps} />}

    </>
  );
}
