import React, { Children } from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";

const Index = (props) => {
  return (
    <Layout>
      <div className="indexWrapper">
        <div className="homeJ">
          <div className="homeJtext">
            Welcome to{" "}
            <img
              src="/logo.png"
              alt="."
              style={{
                height: "58px",
                marginLeft: "10px",
                left: "0",
                position: "relative",
              }}
            />{" "}
            Web Solutions
          </div>

          <div className="homeJdes">
            A modern approach to web applications for the futuristic web design.
          </div>
        </div>
      </div>

      <div className="homeSec2"></div>
      <div className="homeSec2"></div>
      <div className="homeSec2"></div>
    </Layout>
  );
};

export default Index;
