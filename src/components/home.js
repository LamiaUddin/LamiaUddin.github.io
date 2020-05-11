import React, { Component , Fragment} from "react";
import ReactTypingEffect from "react-typing-effect";
import MediaQuery from 'react-responsive'
import logo from "../travel.jpg";
export default function Home({ dark, id }) {

  return (
    <Fragment>
    <MediaQuery minWidth={768}>
    <div className={"sectionbig" + (dark ? " sectionbighome-dark" : "")}>
      <div className="sectionbighome-content" id={id}>
      <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<img
            src={logo}
            className="home-logo"
            alt="Logo"
          />
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Hi! I'm Lamia Uddin",
            "I'm a computer engineering student @ uWaterloo ",
          ]}
          speed={100}
          eraseDelay={700}
        />
      </div>
    </div>
    </MediaQuery>
    <MediaQuery maxWidth={767}>
    <div className={"sectionsmall" + (dark ? " sectionsmallhome-dark" : "")}>
      <div className="sectionsmallhome-content" id={id}>
      <div id='stars'></div>
<div id='stars2'></div>
<div id='stars3'></div>
<img
            src={logo}
            className="home-logo"
            alt="Logo"
          />
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Hi! I'm Lamia Uddin",
            "I'm a computer engineering student @ uWaterloo ",
          ]}
          speed={100}
          eraseDelay={700}
        />
      </div>
    </div>
    </MediaQuery>
    </Fragment>
  );
}
