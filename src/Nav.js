import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Gear from './Gear.js';
import Listen from './Listen.js';
import Watch from './Watch.js';


const Nav = () => (
  <Router>
    <div className='NavBar'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gear">Gear</Link></li>
        <li><Link to="/listen">Listen</Link></li>
        <li><Link to="/watch">Watch</Link></li>

      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/gear" component={Gear}/>
      <Route path="/listen" component={Listen}/>
      <Route path="/watch" component={Watch}/>

    </div>
  </Router>
)


export default Nav
