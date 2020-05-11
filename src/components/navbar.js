import React, { Component, Fragment } from "react";
import logo from "../logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import MediaQuery from 'react-responsive'

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };



  render() {
    return (
  <Fragment>
<MediaQuery minWidth={768}> 
<nav className="navbig" id="navbar">
        <div className="navbig-content">
          <img
            src={logo}
            className="navbig-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          <ul className="navbig-items">
            <li className="navbig-itemname">Lamia Uddin</li>
            <li className="navbig-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="navbig-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="navbig-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="navbig-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hobbies
              </Link>
            </li>
            <li className="navbig-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
</MediaQuery> 
<MediaQuery maxWidth={767}>
<nav className="navsmall" id="navbar">
        <div className="navsmall-content">
          <ul className="navsmall-items">
            <li className="navsmall-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="navsmall-item">
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="navsmall-item">
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="navsmall-item">
              <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Hobbies
              </Link>
            </li>
            <li className="navsmall-item">
              <Link
                activeClass="active"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
</MediaQuery>
</Fragment>
    );
  }
}
