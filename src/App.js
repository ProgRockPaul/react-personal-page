import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactRouter from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';

class App extends React.Component {
  render(){
    return (
      <div>
        <Nav />
      </div>
    )
  }
}

module.exports = App;
