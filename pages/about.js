import React from "react";
import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Foter from "../components/Foter";

const About = (props) => {
  return (
    <Layout>
      <p className="description">Contact us</p>
      <div className="aboutWrap">
        <p className="contactHead">About us</p>
        <br />
        <p className="aboutText">
          Zaffre Technology is a group of enthusiastic web developers who aim to
          revolutionize the way you present yourself on the web. We bring to you
          the most efficient, attractive and modern solutions to ensure that
          your website looks inviting to the viewers.
          <br />
          <br />
          With the tech world changing everyday, it is important to stay on the
          cutting edge in order to meet with the demands of the end users. We,
          at Zaffre, give to you ML enabled websites to deliver the best user
          experience.
          <br />
          <br />
          In addition, our team of experienced SEO experts will ensure that your
          website has a high outreach. An excellent website is of no use if it
          doesn't have a healthy amount of visitors. But don't worry, we have
          that covered too!
          <br />
          <br />
          We believe in doing away with the old templates and embracing the
          future of smart and responsive web. We are here with all the web
          solutions for both established companies and growing startups. We
          build, customize and design to amaze the audience. Customer
          satisfaction is our priority.
        </p>
        <br />
        <p className="contactHead">Our Team</p>
        <Grid
          container
          spacing={3}
          style={{ width: "90%", maxWidth: "1400px", margin: "0 auto" }}
        >
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="profilecard">
              <img
                src="/abha.png"
                alt="."
                style={{
                  height: "120px",
                  margin: "10px auto",
                  left: "0",
                  position: "relative",
                  borderRadius: "100px",
                }}
              />
              <h3>Abha Jha</h3>
              <div
                style={{
                  fontSize: "35px",
                  margin: "0 auto",
                  marginTop: "10px",
                }}
              >
                <a
                  href="https://www.facebook.com/profile.php?id=100019041708870"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FacebookIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/abha-jha-b7465b19a/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <LinkedInIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="https://github.com/Abha2001"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <GitHubIcon style={{ fontSize: "35px" }} />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="profilecard">
              <img
                src="/ramiz.png"
                alt="."
                style={{
                  height: "120px",
                  margin: "10px auto",
                  left: "0",
                  position: "relative",
                  borderRadius: "100px",
                }}
              />
              <h3>Ramiz Mollah</h3>
              <div
                style={{
                  fontSize: "35px",
                  margin: "0 auto",
                  marginTop: "10px",
                }}
              >
                <a
                  href="https://www.facebook.com/r.ramiz2000"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FacebookIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="http://www.linkedin.com/in/ramiz-mollah/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <LinkedInIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="https://github.com/deadlycoder07/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <GitHubIcon style={{ fontSize: "35px" }} />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="profilecard">
              <img
                src="/rishav.png"
                alt="."
                style={{
                  height: "120px",
                  margin: "10px auto",
                  left: "0",
                  position: "relative",
                  borderRadius: "100px",
                }}
              />
              <h3>Rishav Raj Kumar</h3>
              <div
                style={{
                  fontSize: "35px",
                  margin: "0 auto",
                  marginTop: "10px",
                }}
              >
                <a
                  href="https://www.facebook.com/rishav.rajkumar.35"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FacebookIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/rishav-rajkumar-63629a1a1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <LinkedInIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="https://github.com/rishav4101"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <GitHubIcon style={{ fontSize: "35px" }} />
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <div className="profilecard">
              <img
                src="/archi.png"
                alt="."
                style={{
                  height: "120px",
                  margin: "10px auto",
                  left: "0",
                  position: "relative",
                  borderRadius: "100px",
                }}
              />
              <h3>Archisman Ghosh</h3>
              <div
                style={{
                  fontSize: "35px",
                  margin: "0 auto",
                  marginTop: "10px",
                }}
              >
                <a
                  href="https://www.facebook.com/archisman.ghosh.102"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FacebookIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="https://www.linkedin.com/in/archisman-ghosh-8724511a2"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <LinkedInIcon style={{ fontSize: "35px" }} />
                </a>{" "}
                <a
                  href="https://github.com/archi-007"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <GitHubIcon style={{ fontSize: "35px" }} />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
        <br />
        <p className="aboutText" style={{ marginBottom: "70px" }}>
          Zaffre Technology started out as a group of four enthusiastic
          individuals from NIT Durgapur who shared a common vision. Being
          regular contributors to open source and heavily involved in web
          development brought us together. Zaffre Technology is a product of our
          aligned dreams combined with our skills, experience and hardwork.{" "}
        </p>
      </div>
      <Foter />
    </Layout>
  );
};

export default About;
