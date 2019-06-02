import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

function Header(props) {
  return (
    <div className="Header section container-fluid">
      <div className="row d-flex align-items-center">
        <h2 className="sectionheader col-3">'hello':</h2>
        <div className="col-9">
          <h1 className="name">stephen li.</h1>
          <p className="tagline tagline1">software developer.</p>
          <p className="tagline tagline2">uwaterloo cs '22.</p>
          <p className="greeting">welcome to my home.</p>
        </div>
      </div>
    </div>
  );
}

function About(props) {
  return (
    <div className="About section container-fluid">
      <div className="row d-flex align-items-center">
        <h2 className="sectionheader col-3">'about':</h2>
        <div className="col-9">
          <p className="description">
          Stephen Li is studying Computer Science at the University of Waterloo. Inquisitive at heart, he is captivated by our evolving technological era that speaks the language of computers.
          He is constantly on the search for new solutions, in hopes of making his own contribution to the world.
          </p>
        </div>
      </div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="Project">
      <h3 className="title">{props.title}</h3>
      <p className="description">{props.description}</p>
    </div>
  );
}

function Projects(props) {
  const cliChessDescription = "a lightweight command-line based chess interface for personal use"
  const bpmCalcDescription = "angularjs widget that calculates bpm based on rate of user input"
  return (
    <div className="Projects section container-fluid">
      <div className="row d-flex align-items-center">
        <h2 className="sectionheader col-3">'projects':</h2>
        <div className="col-9">
          <Project title="cli_chess" description={cliChessDescription} />
          <Project title="bpm-calculator" description={bpmCalcDescription} />
        </div>
      </div>
    </div>
  );
}

function Contact(props) {
  return (
    <div className="Contact section container-fluid">
      <div className="row d-flex align-items-center">
      <h2 className="sectionheader col-3">'contact':</h2>
        <div className="col-9">
          <p className="description">come say hi!</p>
          <div className="socialmedia">
            <a className="icon" href="mailto:liphenste@gmail.com"><i className="far fa-envelope"></i></a>
            <a className="icon" href="https://www.linkedin.com/in/liphenste"><i className="fab fa-linkedin"></i></a>
            <a className="icon" href="https://github.com/liphenste"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
}


function App() {
  return (
    <div>
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
