import React, { Children } from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
          +91 70033 19263, +91 86175 28221, +91 90733 83920, +91 75958 03377
        </p>
        <br />
        <p className="contactText">
          To know more about us follow us on <br />{" "}
          <div style={{ fontSize: "35px", marginBottom: "70px" }}>
            <FacebookIcon style={{ fontSize: "35px" }} />{" "}
            <InstagramIcon style={{ fontSize: "35px" }} />{" "}
            <LinkedInIcon style={{ fontSize: "35px" }} />
          </div>
        </p>
      </div>
    </Layout>
  );
};

export default Contact;
