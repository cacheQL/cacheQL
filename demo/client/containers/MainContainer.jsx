import React, { Component } from "react";
import QueryContainer from "./QueryContainer.jsx";
import CompareContainer from "./CompareContainer.jsx";
import BarContainer from "./BarContainer.jsx";
import Hero from "../components/Hero.jsx"
import HowToUse from '../components/HowToUse'
import Team from '../components/Team'
import Footer from './Footer'



import axios from "axios";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cacheResult: "cache response",
      noCacheResult: "db response",
      cacheTime: 0,
      noCacheTime: 0,
      name: "",
      message: "",
      nameGet: "",
      series: [
        {
          name: "Speed",
          data: [
            0, //cacheQL
            0 //NoCacheQL
          ]
        }
      ]
    };
    this.queryPost = this.queryPost.bind(this);
    this.queryGet = this.queryGet.bind(this);
    this.nameChangeHandler = this.nameChangeHandler.bind(this);
    this.nameGetChangeHandler = this.nameGetChangeHandler.bind(this);
    this.messageChangeHandler = this.messageChangeHandler.bind(this);
  }

  nameChangeHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  nameGetChangeHandler(event) {
    this.setState({
      nameGet: event.target.value
    });
  }

  messageChangeHandler(event) {
    this.setState({
      message: event.target.value
    });
  }

  queryPost(event) {
    event.preventDefault();
    console.log("FrontEnd in queryPost");

    axios
      .post(
        "/addPerson",
        {
          name: this.state.name,
          message: this.state.message
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log("frontend");
        console.log(res);
        console.log("Res.data from /addPerson", res.data);
        // if (res.status === 200) return this.props.history.push('/login');
        // return this.props.history.push('/signup');
      })
      .catch(err => {
        console.log("error axios");
        console.log(err);
      })
      .finally(() => {
        this.setState({
          name: "",
          message: ""
        });
      });
  }

  queryGet(event) {
    event.preventDefault();
    console.log("FrontEnd in queryGet - /getPerson");

    //Start 1st TIMER
    const getPersonStart = Date.now();

    axios
      .post(
        "/getPerson",
        {
          query: this.state.nameGet
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log("frontend");
        console.log(res);
        console.log("queryGet", res.data);

        //end TIMER
        const getPersonEnd = Date.now();
        const finalTimeGetPerson = getPersonEnd - getPersonStart;
        console.log("Final Time - /getPerson", finalTimeGetPerson);

        this.setState({
          cacheResult: JSON.stringify(res.data),
          cacheTime: finalTimeGetPerson
        });

        this.setState({
          series: [
            {
              name: "Speed",
              data: [
                finalTimeGetPerson, //cacheQL
                this.state.noCacheTime //NoCacheQL
              ]
            }
          ]
        });

      })
      .catch(err => {
        console.log("error axios");
        console.log(err);
      });

    //Start 1st TIMER
    const getPersonDBStart = Date.now();

    axios
      .post(
        "/getPersonDB",
        {
          query: this.state.nameGet
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
          }
        }
      )
      .then(res => {
        console.log("frontend");
        console.log(res);
        console.log(res.data);

        //end TIMER
        const getPersonDBEnd = Date.now();
        const finalPersonDBEnd = getPersonDBEnd - getPersonDBStart;
        console.log("Final Time - /getPersonDB", finalPersonDBEnd);

        this.setState({
          noCacheResult: JSON.stringify(res.data),
          noCacheTime: finalPersonDBEnd
        });

        this.setState({
          series: [
            {
              name: "Speed",
              data: [
                this.state.cacheTime, //cacheQL
                finalPersonDBEnd //NoCacheQL
              ]
            }
          ]
        });
  
      })
      .catch(err => {
        console.log("error axios");
        console.log(err);
      });
  }

  // queryGet(event) {
  //   event.preventDefault();
  //   console.log("in queryGet");
  //   fetch("/graphql", {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       query: `{
  //             name {
  //               message
  //             }
  //           }`
  //     })
  //   })
  //     .then(res => res.json())
  //     .then(res => console.log(res.data));
  // }
  render() {
    return (
      <React.Fragment>
        <Hero />
        <QueryContainer
          name={this.state.name}
          message={this.state.message}
          nameHandler={this.nameChangeHandler}
          messageHandler={this.messageChangeHandler}
          queryPost={this.queryPost}
          nameGet={this.state.nameGet}
          nameGetHandler={this.nameGetChangeHandler}
          queryGet={this.queryGet}
        />
        <CompareContainer
          cacheResult={this.state.cacheResult}
          noCacheResult={this.state.noCacheResult}
          cacheTime={this.state.cacheTime}
          noCacheTime={this.state.noCacheTime}
        />
        <BarContainer
          series={this.state.series}
          cacheTime={this.state.cacheTime}
          noCacheTime={this.state.noCacheTime}
        />
        <HowToUse />
        <Team />
        <Footer />
      </React.Fragment>
    );
  }
}

export default MainContainer;
