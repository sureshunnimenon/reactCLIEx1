import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: "Suresh", age: "25", belt: "black", id: 1},
      {name: "Sanju", age: "20", belt: "red", id: 2},
      {name: "Sridevi", age: "12", belt: "orange", id: 3},
      {name: "Sruthi", age: "2", belt: "blue", id: 4}
    ]
  }

  addNinja = (ninja) => {
    // console.log(ninja)
    ninja.id= Math.random();
    // copy original ninja
    let ninjas = [...this.state.ninjas, ninja]
    
    this.setState({
        ninjas: ninjas
    })
    console.log(this.state.ninjas)
  }

  deleteNinja = (id) => {
    console.log(id)
    let ninjas = this.state.ninjas.filter((ninja)=> ninja.id !== id )

    this.setState({ninjas})
  }

  componentDidMount(){
    console.log("Component mounted")
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevState)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <h2> React SPA Example </h2>
          <p> Welcome :) </p>
            < Ninjas  deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas} /> 
            <AddNinja addNinja = {this.addNinja}  /> 
        </header>
      </div>
    
        );
  }}

export default App;
