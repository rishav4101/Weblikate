import React, { Children } from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import Foter from "../components/Foter";
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
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3}>
            <div className="homeSec1Head">
              <p>Lets start!</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={9}>
            <div className="homeSec2">
              <p>
                If you are struggling with an old crappy website, If you want to
                upgrade your website to the modern web applications or If you
                want any other web solution, We have got you covered. We
                understand the importance of being on web today and the
                investment you put in to get the perfect product you would want.
                We cover almost all web solution services to meet your
                requirements changing with time.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
      <hr></hr>
      <div className="homeSec1wrap">
        <div className="homeSec1Head">
          <p>WHy zaffre?</p>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <img
                src="/At the office-amico.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Team</h3>
              Zaffre is a dedicated and extremely talented team of individuals
              having the first hand experience of working in the IT industry and
              thrives hard to achieve the pinnacle of perfection in any task
              they perform.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <img
                src="/Programming-bro.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Transparency</h3>
              We maintain a transparent and healthy relation with our clients
              and keep them updated regarding the progress of the work. We
              maintain the trust factor among our clients.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <img
                src="/Static assets-rafiki.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>High level of customisation</h3>
              Zaffre keeps the interests of the clients as their top priority
              and allows a wide range of customisable features at a very
              affordable price.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <img
                src="/QA engineers-pana.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>Quality assurance</h3>
              Having worked in the industry the team at Zaffre is very cautious
              about the product they deliver. We pay attention to the finest of
              details in the architecture as well as the design of our products
              and try to exceed the expectations of our clients.
            </div>
          </Grid>
        </Grid>
      </div>
      <hr></hr>
      <div className="homeSec1wrap">
        <div className="homeSec1Head">
          <p>WHAT DO WE OFFER?</p>
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
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
              Our team of experts builds intelligent websites that actually
              perform & exceed your expectations. We offer completely customized
              interactive web solutions. We provide world class UI for your
              site.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <div className="homeSec1">
              <img
                src="/Browser stats-amico.png"
                alt="."
                style={{
                  height: "150px",
                  padding: "0",
                  position: "relative",
                }}
              />
              <h3>SEO improving</h3>
              we want to make sure every dollar you spend is a great investment.
              We are SEO professionals with extensive experience in the
              industry, and we will work closely with you to reach your goals.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
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
              <h3>Transforming and Scaling Up your Business</h3>
              if you are struggling with old crappy sites or in any of the
              following situations we are here to solve your problems. we
              understand the importance web presence.
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
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
              Machine learning and AI is the future and we are bringing the
              future to you. We offer AI enabled Web and Software Solutions
              tailored to the business needs and trained on custom dataset to
              WOW the end user.
            </div>
          </Grid>
        </Grid>
        <form>
          <Link href="/services">
            <button className="homeBtn">Know More</button>
          </Link>
        </form>
      </div>
      <hr></hr>
      <div className="homeSec1wrap">
        <img
          src="/Questions-pana.png"
          alt="."
          style={{
            height: "140px",
            margin: "0 auto",
            position: "relative",
          }}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3}>
            <div className="homeSec1Head">
              <p>Who we are?</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="homeSec2">
              <p>
                Zaffre Technology started out as a group of four enthusiastic
                individuals from NIT Durgapur who shared a common vision. Being
                regular contributors to open source and heavily involved in web
                development brought us together. Zaffre Technology is a product
                of our aligned dreams combined with our skills, experience and
                hardwork.{" "}
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <form>
              <Link href="/about">
                <button className="homeBtn">Know More</button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </div>
      <hr></hr>
      <div className="homeSec1wrap">
        <img
          src="/Appreciation-bro.png"
          alt="."
          style={{
            height: "140px",
            margin: "0 auto",
            position: "relative",
          }}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3}>
            <div className="homeSec1Head">
              <p>Thank You!</p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <div className="homelastText">
              <p>
                Reach us out now without any hesitation. We promise you your
                satisfaction with the services we provide.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <form>
              <Link href="/contact">
                <button className="homeBtn" style={{ marginBottom: "30px" }}>
                  Contact us
                </button>
              </Link>
            </form>
          </Grid>
        </Grid>
      </div>

      <Foter />
    </Layout>
  );
};

export default Index;
