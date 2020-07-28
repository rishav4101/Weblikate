import React, { Children } from "react";
import Layout from "../components/Layout";
import Foter from "../components/Foter";
import Grid from "@material-ui/core/Grid";

const Team = (props) => {
  return (
    <Layout>
      <p className="description">Team</p>
      <div className="serviceWrap">
        <p className="contactHead">our services</p>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/App installation-rafiki.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Modern Web Apps</h3>
              With rapid developments in the field of technology, websites go
              outdated very quickly. We aim to provide the latest, trendy web
              application features to keep your audience engaged. We build
              customised websites best suited for your cause and add modern,
              innovative technology to present the most attractive and
              interactive product.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/Static assets-pana.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Responsive Web design</h3>
              Keeping in mind the ease of end-users, we design our websites with
              a mobile-first architecture. Our products are not restricted to
              serve a specific device dimension and is guarenteed to have a
              responsive layout for any screen size, be it desktop, laptop,
              tablet or smartphone, without compromising its frontend appeal.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/Maintenance-amico.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Revamping services</h3>
              Not only do we build websites from scratch, we also provide
              upgradation services for our clients. We build upon existing
              websites to creatively redesign with modern tools, improve its
              UI/UX, add new features to make it more presentable or put in
              additional functionality to make the workflow easier and smoother.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/Design community-amico.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Graphic design</h3>
              Any website needs a well-designed blueprint upon which the
              frontened is built. Zaffre provides the best artistic designs, be
              it for your website or just a logo for your brand. Our graphic
              design team is dedicated towards creating visually appealing,
              catchy and user friendly layouts to captivate your consumers.
            </div>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/Search engines-bro.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Search engine optimisation </h3>
              The entire purpose of having a website fails if one does not have
              sufficient visitors. In order to increase your visibility on the
              web, we implement the most effective Search Engine Optimisation
              techniques. Zaffre Technology aims to maximise the traffic on your
              website by increasing its accessibilty to the end users.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/Data Trends-pana.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Transforming and upscaling your business</h3>
              Managing a website and satisfying each end user’s demands becomes
              a big challenge as the number of users increase. One also needs to
              constantly transform their business so as to keep their brand
              up-to-date. Zaffre helps you handle the scalability and
              transformation as your company gathers more number of customers.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/Challenge-rafiki.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>UI/UX Design</h3>A company rapidly loses its customers if it
              does not have an appealing, modernised and engaging UI. When
              Zaffre builds a product, we prioritise the user experience. We
              have a team of dedicated individuals who make sure that your
              website is interactive, aesthetic and the end users are satisfied
              with the product.
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="homeSec1">
              <img
                src="/Data-bro.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Machine learning solutions</h3>
              Machine learning is one of the most rapidly growing technologies
              and the number of consumers incorporating ML into their products
              is also rising. As Zaffre believes in staying at the cutting edge
              of technology, our team provides ML solutions required to improve
              your website and provide best customer experience.
            </div>
          </Grid>
        </Grid>
      </div>
      <Foter />
    </Layout>
  );
};

export default Team;
