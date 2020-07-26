import React, { Children } from "react";
import Layout from "../components/Layout";
import Foter from "../components/Foter";
import Grid from "@material-ui/core/Grid";

const Team = (props) => {
  return (
    <Layout>
      <p className="description">Team</p>
      <div className="serviceWrap">
        <p className="contactHead">Services</p>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>Modern Web Apps</h3>
              Modern Web apps are the future of website solutions. They are
              dynamic and interactive and will provide core functionality to
              work. Our team of experts will build you the most customized Web
              apps best suited for your cause. With the robust backend and a
              world class UI, these masterpieces are sure to exceed your
              expectations
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>Responsive Web design</h3>
              Due to the large scale modernisation in the 21st century,
              smartphones have become extremely common. To cope up with the
              current scenario we have a dedicated team to develop interactive
              and optimised frontend for modern websites with top notch
              architecture and excellent design.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>Revamping services</h3>
              Need a Web upgrade, Zaffre is just a call away. Get an enhanced
              look at a very affordable rate and improve the presence of your
              website on the Internet.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>Graphic design</h3>
              Be it a funky logo for your startup or a classic design for your E
              commerce, Zaffre has the solution. We provide the best designs out
              there that will not only have a positive impact on your business
              but also improve the overall appeal of the same. Work with us and
              get to use designs that are literal works of art.
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>Search engine optimisation </h3>
              Search engine optimisation is the most effective way to increase
              traffic on your website. Our team of developers with their
              extensive experience in the industry will help you design the most
              optimum architecture for your website and help it grow to the
              greatest heights.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>Transforming and upscaling your business</h3>
              We understand the value of web presence. Therefore we are here to
              help you scale up your business. We have cloud professionals in
              our team who will help out in relocating databases to the cloud or
              maintaining a robust server or administrating the entire backend
              for your website.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>UI/UX Design</h3>
              "The first impression is the last impression". Zaffre does live up
              to the saying by providing a robust user interface and a world
              class design aesthetic so that the users have a brilliant
              experience of your website.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <h3>Machine learning solutions</h3>
              Machine learning is the future of Technology and that is exactly
              what Zaffre aims to provide. Our ai professionals will provide the
              optimal performance of strong machine learning algorithms and
              increase the demand of your business in the industry. Data
              analysis, image processing just name it and zaffre will be ready.
            </div>
          </Grid>
        </Grid>
      </div>
      <Foter />
    </Layout>
  );
};

export default Team;
