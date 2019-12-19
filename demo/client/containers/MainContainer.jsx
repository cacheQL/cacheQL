import React, { Component } from "react";
import QueryContainer from "./QueryContainer.jsx";
import CompareContainer from "./CompareContainer.jsx";
import BarContainer from "./BarContainer.jsx";
<<<<<<< HEAD
import Hero from "../components/Hero.jsx";
import HowToUse from "../components/HowToUse";
import Team from "../components/Team";
import Footer from "./Footer";
||||||| merged common ancestors
import Hero from "../components/Hero.jsx"
import HowToUse from '../components/HowToUse'
import Team from '../components/Team'
import Footer from './Footer'


=======
import Hero from "../components/Hero.jsx";
import HowToUse from "../components/HowToUse";
import Team from "../components/Team";
import Footer from "./Footer";
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button";
>>>>>>> a8438e4b104a8db1df11f3042b45c62c3cb5f212

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
      bName: false,
      bAge: false,
      bBirthdate: false,
      bPosition: false,
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
    this.nameFieldChangeHandler = this.nameFieldChangeHandler.bind(this);
    this.ageFieldChangeHandler = this.ageFieldChangeHandler.bind(this);
    this.birthdateFieldChangeHandler = this.birthdateFieldChangeHandler.bind(
      this
    );
    this.positionFieldChangeHandler = this.positionFieldChangeHandler.bind(
      this
    );
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

  nameFieldChangeHandler(event) {
    this.setState({
      bName: !this.state.bName
    });
  }
  ageFieldChangeHandler(event) {
    this.setState({
      bAge: !this.state.bAge
    });
  }
  birthdateFieldChangeHandler(event) {
    this.setState({
      bBirthdate: !this.state.bBirthdate
    });
  }
  positionFieldChangeHandler(event) {
    this.setState({
      bPosition: !this.state.bPosition
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

    const queryString = `query {\n  getPerson(name:"${
      this.state.nameGet
    }") {\n${this.state.bName ? "   name\n" : ""}${
      this.state.bAge ? "   age\n" : ""
    }${this.state.bBirthdate ? "   birthdate\n" : ""}${
      this.state.bPosition ? "   position\n" : ""
    } }\n}`;

    console.log(queryString);

    axios
      .post(
        "/graphql",
        {
          query: queryString
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

    const fields = {};

    if (this.state.bName) fields["name"] = 1;
    if (this.state.bAge) fields["age"] = 1;
    if (this.state.bBirthdate) fields["birthdate"] = 1;
    if (this.state.bPosition) fields["position"] = 1;
    // this.state.bName ? (fields[name] = 1) : null;
    // this.state.bAge ? (fields[age] = 1) : null;
    // this.state.bBirthdate ? (fields[birthdate] = 1) : null;
    // this.state.bPosition ? (fields[position] = 1) : null;

    console.log(fields);
    axios
      .post(
        "/getPersonDB",
        {
          query: this.state.nameGet,
          fields: fields
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
          series={this.state.series}
          cacheTime={this.state.cacheTime}
          noCacheTime={this.state.noCacheTime}
          bName={this.state.bName}
          bAge={this.state.bAge}
          bBirthdate={this.state.bBirthdate}
          bPosition={this.state.bPosition}
          nameFieldChangeHandler={this.nameFieldChangeHandler}
          ageFieldChangeHandler={this.ageFieldChangeHandler}
          birthdateFieldChangeHandler={this.birthdateFieldChangeHandler}
          positionFieldChangeHandler={this.positionFieldChangeHandler}
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
        <div>
          <ScrollUpButton />
        </div>
      </React.Fragment>
    );
  }
}

export default MainContainer;
