
import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from './components/Header';
import Navbar from './components/Navbar';


class App extends Component {

  state = {
    employees: [],
  };

  componentDidMount() {
      axios.get(`https://randomuser.me/api/?results=20&nat=Aus`)
        .then(res => {
          this.setState({ employees: res.data.results });
        });
  }


  render() {
    return (
      <div className="App">
        <Header />
        {this.state.employees.length > 0 && 
        <Navbar employees={this.state.employees}/>}
      </div>
    );
  }
}

export default App;