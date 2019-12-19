import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarContainer extends Component {
  constructor(props) {
    super(props);
    const cacheTime = this.props.cacheTime;
    const noCacheTime = this.props.noCacheTime;

    this.state = {
      options: {
        chart: {
          background: "#f4f4f4",
          foreColor: "#333"
        },
        xaxis: {
          categories: ["cacheTime", "noCacheTime"]
        },
        title: {
          text: "CacheQL vs No Cache query",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px"
          }
        },
        fill: {
          colors: ["rgb(241, 173, 243)"]
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        }
      }
    };
  }

  render() {
    return <Chart 
      options = {this.state.options}
      series={this.props.series}
      type="bar"
      height="18%"
      width="100%"
      className="bar-container"
    />
  }
}

export default BarContainer;
