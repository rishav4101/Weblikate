import React, { useState } from "react";
import Layout from "../components/Layout";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import Loader from "../components/Loader";
import axios from "axios";

const Contact = (props) => {
  var [state, setState] = useState({});
  var [formSubmit, setFormSubmit] = useState(0);
  var [loading, setLoading] = useState(0);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(1);
    e.preventDefault();
    axios
      .post("https://zaffreweb.herokuapp.com/api/contact/", state)
      .then((res) => {
        setLoading(0);
        if (res.status === 201) setFormSubmit(1);
      })
      .catch((err) => {
        throw err;
      });
  };

  if (formSubmit === 1 && loading === 0)
    return (
      <Layout>
        <p className="description">Successful</p>
        <div className="contactWrap">
          <p className="contactHead">Successful!</p>
          <br />
          <p className="contactText">
            Thanks for contacting us {state.name}! we will get back to you soon!
          </p>
          <br />
          <p className="contactText">
            Call/whatsapp us at <br />
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={6} style={{ margin: "0 auto" }}>
                <p className="contactnumber">+91 70033 19263</p>
              </Grid>
              <Grid item xs={6} sm={6} md={6} style={{ margin: "0 auto" }}>
                <p className="contactnumber">+91 86175 28221</p>
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
                href="https://www.facebook.com/Weblikate-web-solutions-113494050454776/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FacebookIcon style={{ fontSize: "35px" }} />
              </a>{" "}
              <a
                href="https://instagram.com/Weblikate.technologies?igshid=t0padlceqgt0"
                style={{ textDecoration: "none", color: "white" }}
              >
                <InstagramIcon style={{ fontSize: "35px" }} />
              </a>{" "}
              <a
                href="https://linkedin.com/company/Weblikate-web-solutions/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <LinkedInIcon style={{ fontSize: "35px" }} />
              </a>
            </div>
          </p>
        </div>
      </Layout>
    );
  else if (formSubmit === 0 && loading === 1) return <Loader />;
  else
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

          <form
            onSubmit={handleSubmit}
            className="contactform"
            autoComplete="off"
          >
            <input
              required
              type="text"
              placeholder="Name"
              className="contactfield"
              id="name"
              name="name"
              onChange={handleChange}
            ></input>
            <input
              required
              type="email"
              placeholder="Email"
              className="contactfield"
              id="email"
              name="email"
              onChange={handleChange}
            ></input>
            <input
              required
              pattern="\d+"
              type="text"
              placeholder="Phone"
              className="contactfield"
              id="phone"
              name="phone"
              onChange={handleChange}
            ></input>
            <textarea
              type="text"
              placeholder="Message"
              className="contactfield"
              id="messages"
              name="messages"
              onChange={handleChange}
              style={{ resize: "none", overflow: "hidden", height: "100px" }}
            ></textarea>

            <button type="submit" className="contactBtn">
              Submit
            </button>
          </form>
          <br />
          <p className="contactText">-- OR --</p>
          <br />
          <p className="contactText">
            Call/whatsapp us at <br />
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={6} style={{ margin: "0 auto" }}>
                <p className="contactnumber">+91 70033 19263</p>
              </Grid>
              <Grid item xs={6} sm={6} md={6} style={{ margin: "0 auto" }}>
                <p className="contactnumber">+91 86175 28221</p>
              </Grid>
              {/* <Grid item xs={6} sm={3} md={3} style={{ margin: "0 auto" }}>
                <p className="contactnumber">+91 90733 83920</p>
              </Grid>
              <Grid item xs={6} sm={3} md={3} style={{ margin: "0 auto" }}>
                <p className="contactnumber">+91 75958 03377</p>
              </Grid> */}
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
                href="https://www.facebook.com/Weblikate-104603284684656/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FacebookIcon style={{ fontSize: "35px" }} />
              </a>{" "}
              <a
                href="https://www.instagram.com/weblikate/"
                style={{ textDecoration: "none", color: "white" }}
              >
                <InstagramIcon style={{ fontSize: "35px" }} />
              </a>{" "}
              <a
                href="https://www.linkedin.com/company/weblikate/"
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
