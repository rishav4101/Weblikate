import React, { Children } from "react";
import Layout from "../components/Layout";

const Index = (props) => {
  return (
    <Layout>
      <h1 className="title">Welcome to Zaffre Web Solutions</h1>

      <p className="description">
        The site is under construction
        <br />
        <code>come back after a while</code>
      </p>
    </Layout>
  );
};

export default Index;
