import React, { Component, Fragment } from "react";
import ReactTypingEffect from "react-typing-effect";
import Carousel from "react-bootstrap/Carousel";
import MediaQuery from 'react-responsive';
import aust from   "../aust.jpeg";
import newp from   "../new.jpeg";
import amst from   "../amst.JPG";

export default function Hobbies({ dark, id }) {
  return (
<Fragment>
    <MediaQuery minWidth={768}>
    <div className={"sectionbig" + (dark ? " sectionbig-dark" : "")}>
      <div className="sectionbig-content" id={id}>
        <p>Here are some pictures taken by me while doing my favourite thing...travelling!</p>
        <Carousel>
          <Carousel.Item>
            <img
              className="imgresponsive"
              src={amst}
              width="437"
              height="300"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Amsterdam, Netherlands</h3>
              <p>Amsterdam's beautiful canal houses, captured while sailing in the Herengracht canal</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgresponsive"
              src={newp}
              width="437"
              height="300"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Matamata, New Zealand</h3>
              <p>The Hobbiton Movie Set where The Lord of the Rings film trilogy was shot.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgresponsive"
              src={aust}
              width="437"
              height="300"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>NSW, Australia</h3>
              <p>
              The Three Sisters which is an unusual rock formation in the Blue Mountains
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    </MediaQuery>

<MediaQuery maxWidth={767}>
<div className={"section" + (dark ? " sectionbig-dark" : "")}>
  <div className="sectionsmall-content" id={id}>
    <Carousel>
    <Carousel.Item>
            <img
              className="imgresponsive"
              src={amst}
              width="437"
              height="300"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Amsterdam, Netherlands</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgresponsive"
              src={newp}
              width="437"
              height="300"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Matamata, New Zealand</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="imgresponsive"
              src={aust}
              width="437"
              height="300"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>NSW, Australia</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
  </div>
</div>
</MediaQuery>
</Fragment>
  );
}
