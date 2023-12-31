import React from "react";
import "./Footer.css";
import { Copyright } from "@material-ui/icons";
import { Twitter, Instagram, YouTube, Facebook } from "@material-ui/icons";
function Footer() {
  return (
    <div className="footer">
      <div className="foo1">
        <h4>
        Copyright
          <Copyright />
          2023
        :weatherforcast.com</h4>
        <h5>Designed by:Shweta Chavan</h5>
      </div>
      <div className="foo2">
        <Twitter style={{fontSize:'2rem'}}/>
        <Instagram style={{fontSize:'2rem'}}/>
        <Facebook style={{fontSize:'2rem'}}/>
        <YouTube style={{fontSize:'2rem'}}/>
      </div>
    </div>
  );
}

export default Footer;
