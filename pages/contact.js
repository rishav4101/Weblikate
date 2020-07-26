import React, { Children } from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";

const Contact = (props) => {
  return (
    <Layout>
      <p className="description">Contact us</p>

      <div className="contactWrap">
        <p className="contactHead">Contact us</p>
        <br />
        <p className="contactText">
          Reach us out today for a free Consultation
        </p>
        <br />
        <p className="contactText">fill the form below:</p>

        <form className="contactform" noValidate autoComplete="off">
          <input
            type="text"
            placeholder="Name"
            className="contactfield"
          ></input>
          <input
            type="text"
            placeholder="Email"
            className="contactfield"
          ></input>
          <input
            type="text"
            placeholder="Phone"
            className="contactfield"
          ></input>

          <button className="contactBtn">Submit</button>
        </form>
        <br />
        <p className="contactText">-- OR --</p>
        <br />
        <p className="contactText">
          Call/whatsapp us at <br />
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3} md={3} style={{ margin: "0 auto" }}>
              <p className="contactnumber">+91 70033 19263</p>
            </Grid>
            <Grid item xs={6} sm={3} md={3} style={{ margin: "0 auto" }}>
              <p className="contactnumber">+91 86175 28221</p>
            </Grid>
            <Grid item xs={6} sm={3} md={3} style={{ margin: "0 auto" }}>
              <p className="contactnumber">+91 90733 83920</p>
            </Grid>
            <Grid item xs={6} sm={3} md={3} style={{ margin: "0 auto" }}>
              <p className="contactnumber">+91 75958 03377</p>
            </Grid>
          </Grid>
        </p>
        <br />
        <p className="contactText">
          To know more about us follow us on <br />{" "}
          <div
            style={{
              fontSize: "35px",
              marginBottom: "70px",
            }}
          >
            <a
              href="https://www.facebook.com/Zaffre-web-solutions-113494050454776/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FacebookIcon style={{ fontSize: "35px" }} />
            </a>{" "}
            <a
              href="https://instagram.com/zaffre.technologies?igshid=t0padlceqgt0"
              style={{ textDecoration: "none", color: "white" }}
            >
              <InstagramIcon style={{ fontSize: "35px" }} />
            </a>{" "}
            <a
              href="https://www.facebook.com/Zaffre-web-solutions-113494050454776/"
              style={{ textDecoration: "none", color: "white" }}
            >
              <LinkedInIcon style={{ fontSize: "35px" }} />
            </a>
          </div>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
