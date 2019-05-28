import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';

const Home = () => <div><h2>Home</h2></div>
const About = () => <div><h2>About</h2></div>

function App() {

  return (
    // the following code is from https://levelup.gitconnected.com/deploying-a-create-react-app-with-routing-to-github-pages-f386b6ce84c2
    // for deploying this create-react-app to gh-pages
    <HashRouter basename='/'>
    <div>
     <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
     </ul>
     <hr />
     <Route exact path="/" component={Home} />
     <Route path="/about" component={About} />
    </div>
   </HashRouter>
  );
}

export default App;
