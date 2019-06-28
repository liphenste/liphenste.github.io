import React, { useEffect } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import chess_cli_demo from './img/chess_cli_demo.gif';
import bpm_calculator_demo from './img/bpm_calculator_demo.gif';
import syngli_logo from './img/syngli_logo.png';
import neuroblot_logo from './img/neuroblot_logo.png';
import $ from 'jquery';
import './App.css';


function Navbar(props) {
  return (
    <nav class="navbar sticky-top navbar-expand navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContents" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarContents">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#hello">home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">about</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}


function Header(props) {
  return (
    <div className="Header section container-fluid" id="hello">
      <div className="row d-flex align-items-center">
        <h2 className="sectionheader col-lg-3 col-md-12">'hello':</h2>
        <div className="sectioncontent col-lg-9 col-md-12">
          <h1 className="name zoomInUp">stephen li.</h1>
          <p className="tagline tagline1 zoomInLeft">software developer.</p>
          <p className="tagline tagline2 zoomInRight">uwaterloo cs '22.</p>
          <p className="greeting fadeIn">welcome to my home.
            <span role="img" aria-label="yo!" className="smiley fadeInLater">✌</span>
          </p>
        </div>
      </div>
    </div>
  );
}


function About(props) {
  return (
    <div className="About section container-fluid" id="about">
      <div className="row d-flex align-items-center">
        <h2 className="sectionheader col-lg-3 col-md-12">'about':</h2>
        <div className="sectioncontent col-lg-9 col-md-12">
          <p className="description">
            <b>I'm a problem solver to the core.</b> From optimizing runtime efficieny on LeetCode problems,
            to solving daily chess puzzles, to organizing the clothes in my room--I solve problems
            in every aspect of my life, and I'm basking in every minute of it.
          </p>
          <p className="description">
            I'm a 2nd year Computer Science student at the University of Waterloo, and am
            currently looking for <b> Fall 2019 software development internship opportunities.</b>
          </p>
          <div className="hobbies" id="hobbies">
            <p className="description">Some hobbies I enjoy:</p>
            <ul className="hobbieslist">
              <li className="icon"><i className="fas fa-chess"></i></li>
              <li className="icon"><i className="fas fa-basketball-ball"></i></li>
              <li className="icon"><i className="fas fa-biking"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


function Internship(props) {
  return (
    <div className="Internship">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img className="companylogo" src={props.logo} alt={props.alt}></img>
      </a>
      {props.description}
    </div>
  )
}


function Experience(props) {
  const syngliDescription =
    <div className="description">
      Node.js, Express.js, jQuery, PHP, MySQL
    </div>;
  const neuroblotDescription =
    <div className="description">
      iOS, Objective-C, Firebase
    </div>;

  return (
    <div className="Experience section container-fluid" id="experience">
      <div className="row d-flex align-items-center">
        <h2 className="sectionheader col-lg-3 col-md-12">'experience':</h2>
        <div className="sectioncontent col-lg-9 col-md-12">
          <Internship title="Syngli"
                      link="https://syngli.com/"
                      logo={syngli_logo}
                      alt="Syngli Logo"
                      description={syngliDescription}
          />
          <Internship title="NeuroBlot"
                      link="http://neuroblot.com/"
                      logo={neuroblot_logo}
                      alt="NeuroBlot Logo"
                      description={neuroblotDescription}
          />
        </div>
      </div>
    </div>
  );
}


function Project(props) {
  return (
    <div className="Project">
      <h3 className="title">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title} <i className="fab fa-github"></i>
        </a>
      </h3> 
      <p className="description">{props.description}</p>
      <img className={`demo ${props.demoName}`} src={props.demo} alt={props.demoAlt}></img>
    </div>
  );
}


function Projects(props) {
  const cliChessDescription = "a lightweight C++ command-line based chess interface for personal use"
  const bpmCalcDescription = "angularJS widget that calculates bpm based on rate of user input"
  return (
    <div className="Projects section container-fluid" id="projects">
      <div className="row d-flex align-items-center">
        <h2 className="sectionheader col-lg-3 col-md-12">'projects':</h2>
        <div className="sectioncontent col-lg-9 col-md-12">
          <Project title="cli_chess"
                   link="https://github.com/liphenste/chess_cli/"
                   description={cliChessDescription}
                   demoName="cliChessGif"
                   demo={chess_cli_demo}
                   demoAlt="Chess CLI Demo"
          />
          <Project title="bpm-calculator"
                   link="https://github.com/liphenste/bpm-calculator/"
                   description={bpmCalcDescription}
                   demoName="bpmCalculatorGif"
                   demo={bpm_calculator_demo}
                   demoAlt="BPM Calculator Demo"
          />     
        </div>
      </div>
    </div>
  );
}


function Contact(props) {
  return (
    <div className="Contact section container-fluid" id="contact">
      <div className="row d-flex align-items-center">
      <h2 className="sectionheader col-lg-3 col-md-12">'contact':</h2>
        <div className="sectioncontent col-lg-9 col-md-12">
          <p className="description">come drop in:</p>
          <div className="socialmedia">
            <a className="icon"
               href="mailto:liphenste@gmail.com"
               target="_blank"
               rel="noopener noreferrer">
                 <i className="far fa-envelope"></i>
            </a>
            <a className="icon"
               href="https://www.linkedin.com/in/liphenste/"
               target="_blank"
               rel="noopener noreferrer">
                 <i className="fab fa-linkedin"></i>
            </a>
            <a className="icon"
               href="https://github.com/liphenste/"
               target="_blank"
               rel="noopener noreferrer">
                 <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


function Footer(props) {
  return (
    <div className="footer" id="footer">© 2019 Stephen Li</div>
  );
}


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );  
}

export default App;


// // the custom HashRouter code is from https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
// // for deploying this create-react-app to gh-pages
// return (
//   <HashRouter basename='/'>
//   <div>
//     <ul>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/about">About</Link></li>
//     </ul>
//     <hr />
//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
//   </div>
//   </HashRouter>
// );
//
// const Home = () => <div><h2>Home</h2></div>
// const About = () => <div><h2>About</h2></div>
