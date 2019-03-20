import React, { Component } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/Tourlist";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <h3>My City Tours</h3>
        <Tourlist />
      </main>
    );
  }
}

export default App;
