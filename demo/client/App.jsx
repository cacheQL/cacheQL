import React, { Component } from "react";
import MainContainer from "./containers/MainContainer.jsx";
import TopNavbar from './components/TopNavbar';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <TopNavbar />
        <div>
          <MainContainer className="main-container"/>
        </div>
      </div>
    );
  }
}

export default App;
