import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

function Header(props) {
  return (
    <div id="header"></div>
  );
}

function About(props) {
  return (
    <div id="about">
      <div className="description"></div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="project">
      <div className="title"></div>
      <div className="description"></div>
    </div>
  );
}

function Projects(props) {
  return (
    <div id="projects">
      <Project />
      <Project />
    </div>
  );
}

function Contact(props) {
  return (
    <div id="contact"></div>
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
