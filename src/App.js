import React, { useEffect } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import chess_cli_demo from './img/chess_cli_demo.gif';
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
          Stephen Li is studying Computer Science at the University of Waterloo. Inquisitive at heart, he is captivated by our evolving technological era that speaks the language of computers.
          He is constantly on the search for new solutions, in hopes of making his own contribution to the world.
          </p>
          <div className="hobbies">
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

function Project(props) {
  return (
    <div className="Project">
      <h3 className="title">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          {props.title} <i className="fab fa-github"></i>
        </a>
      </h3>
      <p className="description">{props.description}</p>
      <img className={props.demoName} src={props.demo} alt={props.demoAlt}></img>
    </div>
  );
}

function Projects(props) {
  const cliChessDescription = "a lightweight command-line based chess interface for personal use"
  const bpmCalcDescription = "angularjs widget that calculates bpm based on rate of user input"
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
                   description={bpmCalcDescription} />
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


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
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
