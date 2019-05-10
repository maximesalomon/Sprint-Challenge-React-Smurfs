import React, { Component } from 'react';
import axios from 'axios';
import { Route, NavLink } from "react-router-dom"; 

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const smurfsURL = 'http://localhost:3333/smurfs/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      error: null,
      updating: false,
      smurf: {
        name: "",
        age: null,
        height: ""
      }
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios
    .get(smurfsURL)
    .then(res => {
      this.setState({smurfs: res.data})
    })
    .catch(err => {
      console.log(err)
      this.setState({error: err.message})
    })
  }

  render() {
    return (
      <div className="App">
      <header>
        <div>
          <NavLink exact to="/">Smurfs Village </NavLink>
          
          <NavLink to="/smurf-form"> Add a new Smurf</NavLink>
        </div>
      </header>
      <Route
        exact path="/"
        render={props =>
          <Smurfs
            {...props} 
            smurfs={this.state.smurfs} />
        }
      />

      <Route
        path="/smurf-form"
        render={ props =>
          <SmurfForm
            {...props}
            smurf={this.state.smurf}
          />
        }
      />
      </div>
    );
  }
}

export default App;
