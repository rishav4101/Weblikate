import React, { Children } from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";

const Index = (props) => {
  return (
    <Layout>
      <div className="indexWrapper">
        <div className="homeJ">
          <div className="homeJtext">Welcome to Zaffre Web Solutions</div>

          <div className="homeJdes">
            A portal to the future of web technologies and services
          </div>
        </div>
      </div>
      <div className="homeSec1wrap">
        <div className="homeSec1Head">
          <p>WHY CHOOSE US?</p>
        </div>
        <div className="homeSec2">
          <p>
            If you are struggling with an old crappy website, If you want to
            upgrade your website to the modern web applications or If you want
            any other web solution, We have got you covered. We understand the
            importance of being on web today and the investment you put in to
            get the perfect product you would want. We cover almost all web
            solution services to meet your requirements changing with time.
          </p>
        </div>
      </div>
      <div className="homeSec1wrap">
        <div className="homeSec1Head">
          <p>WHAT DO WE OFFER?</p>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <h3>Modern Web Apps</h3>
              Our team of experts builds intelligent websites that actually
              perform & exceed your expectations. We offer completely customized
              interactive web solutions. We provide world class UI for your
              site.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <h3>SEO improving</h3>
              we want to make sure every dollar you spend is a great investment.
              We are SEO professionals with extensive experience in the
              industry, and we will work closely with you to reach your goals.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <h3>Transforming and Scaling Up your Business</h3>
              if you are struggling with old crappy sites or in any of the
              following situations we are here to solve your problems. we
              understand the importance web presence.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <h3>Machine learning solutions</h3>
              Machine learning and AI is the future and we are bringing the
              future to you. We offer AI enabled Web and Software Solutions
              tailored to the business needs and trained on custom dataset to
              WOW the end user.
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
};

export default Index;
