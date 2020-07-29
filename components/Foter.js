import React from "react";
import Grid from "@material-ui/core/Grid";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Foter() {
  return (
    <div className="Foter">
      <div className="Foterinner">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                margin: "0 auto",
                maxWidth: "300px",
                textAlign: "left",
              }}
            >
              <ul>
                <h4>Services at glance</h4>
                <li>Building modern web applications</li>
                <li>Completely responsive web designs</li>
                <li>Reconstructing old websites</li>
                <li>Search Engine Optimization</li>
                <li>Transforming and upscaling your business</li>
                <li>UI/UX Designs as per need</li>
                <li>Graphic Designing / Logo Design</li>
                <li>Machine Learning solutions</li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                margin: "0 auto",
                maxWidth: "400px",
                textAlign: "center",
              }}
            >
              <p>
                Weblikate web solutions is the link between you and your dream
                website. We work with a talented and dedicated team to provide
                the most efficient solutions to all your problems. Be it
                responsive web pages, interactive UI/UX, SEO to maximize your
                web views, ML integration or scaling-up your business- we offer
                you the best. Our aim is to help you stay on the cutting edge of
                technology and web services.
              </p>
              <div
                style={{
                  fontSize: "25px",
                  marginBottom: "0px",
                }}
              >
                <a
                  href="https://www.facebook.com/Weblikate-104603284684656/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <FacebookIcon style={{ fontSize: "25px" }} />
                </a>{" "}
                <a
                  href="https://www.instagram.com/weblikate/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <InstagramIcon style={{ fontSize: "25px" }} />
                </a>{" "}
                <a
                  href="https://www.linkedin.com/company/weblikate/"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <LinkedInIcon style={{ fontSize: "25px" }} />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
