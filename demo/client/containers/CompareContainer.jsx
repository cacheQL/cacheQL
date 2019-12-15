import React, { Component } from "react";
import NoCacheQLBox from "../components/NoCacheQL";
import CacheQLBox from "../components/CacheQL.jsx";

class CompareContainer extends Component {
  constructor(props) {
    super(props);
  }

  //   sendQuery() {
  //     console.log("in send query func");
  //     fetch("/query", {
  //         method: 'post',
  //         body: JSON.stringify(this.props.query)
  //       }).then(result => result.json())
  //       .then(result => {
  //         this.setState({ queryResult: result });
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }

  render() {
    return (
      <div className="compareContainer">
        <div className="infoBox">
          <NoCacheQLBox
            noCacheResult={this.props.noCacheResult}
            noCacheTime={this.props.noCacheTime}
          />
        </div>
        <div className="infoBox">
          <CacheQLBox
            cacheResult={this.props.cacheResult}
            cacheTime={this.props.cacheTime}
          />
        </div>
      </div>
    );
  }
}

export default CompareContainer;
