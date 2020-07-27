import React, { Children,useState } from "react";
import Layout from "../components/Layout";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Grid from "@material-ui/core/Grid";
import axios from 'axios';

const Contact = (props) => {

  var [state,setState]=useState({})
  var [formSubmit,setFormSubmit]=useState(0)

  const handleChange=(e)=>{
    setState({
      ...state,
      [e.target.id]:e.target.value
    })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post("https://zaffreweb.herokuapp.com/api/contact/",state)
    .then((res)=>{
      if(res.status===201)
      setFormSubmit(1)
    })
    .catch(err=>{throw err});
  }

  if(formSubmit===1)
    return(
      <Layout>
        <p className="description">Successful</p>
        <div className="contactWrap">
          <p className="contactHead">Successful!</p>
          <br />
          <p className="contactText">
            Thanks for contacting us {state.name}! we will get back to you soon!
          </p>
        </div>
      </Layout>
    )
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
  
          <form onSubmit={handleSubmit} className="contactform" autoComplete="off">
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
              pattern="[0-9]"
              type="tel"
              placeholder="Phone"
              className="contactfield"
              id="phone"
              name="phone"
              onChange={handleChange}
            ></input>
  
            <button type="submit" className="contactBtn">Submit</button>
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
