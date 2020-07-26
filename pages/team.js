import React, { Children } from "react";
import Layout from "../components/Layout";

const Team = (props) => {
  return (
    <Layout>
      <div style={{ position: "relative", zIndex: "1" }}>
        <h1 className="title">Welcome to Zaffre Web Solutions</h1>

        <p className="description">Team</p>
      </div>
    </Layout>
  );
};

export default Team;
