import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Watch = () => (
  <div>
    <h2>Youtube</h2>
    <p>Death Grips EP I made in 2016 </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/VuRBZpQ7pBE" frameborder="0" allowfullscreen></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLZqP2eTUCIkEDLf8j085ZbbvOGZ-uqSkl" frameborder="0" allowfullscreen></iframe>
  </div>
)

module.exports = Watch;
