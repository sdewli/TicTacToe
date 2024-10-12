import React, { Component } from "react";
import TieTacToe from "./Components/Tictactoe";
import "./App.css";

class App extends Component {
  render() {
    return <TieTacToe boardSize={8} />;  // You can change the board size here
  }
}

export default App;
