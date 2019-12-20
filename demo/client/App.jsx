import React, { Component } from "react";
import MainContainer from "./containers/MainContainer.jsx";
import TopNavbar from './components/TopNavbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="div-around-topNavBar">
      <TopNavbar />
        <div className="div-around-MainContainer">
          <MainContainer className="main-container"/>
        </div>
      </div>
    );
  }
}

export default App;
