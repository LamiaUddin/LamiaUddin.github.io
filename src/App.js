import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Section from "./components/section";
import dummyText from "./dummytext";
import Home from "./components/home";
import Hobbies from "./components/hobbies";
import Projects from "./components/projects";
import About from "./components/about";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home dark={true} id="section1" />
        <About
          title="Section 2"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Projects
          dark={true}
          id="section3"
        />
        <Hobbies dark={false} id="section4" />
        <Section
          dark={true}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
