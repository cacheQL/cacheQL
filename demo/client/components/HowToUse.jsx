import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function HowToUse() {
  return (
    <div id="howToUseBox">
      <h1>Download</h1>
      <section id="download">
        <figure>
          <img src="/assets/Screen Shot 2019-12-19 at 6.17.05 PM.png" alt="image" height="400"/>
          {/* <ScrollAnimation animateIn="fadeInRight"> */}
            <figcaption>
              How to incorporate the cachQL library in your project. The specs will chagne depending on the database that the developer decides to use.
            </figcaption>
          {/* </ScrollAnimation> */}
        </figure>
        <figure className="fadeInLeft">
          {/* <ScrollAnimation animateIn="fadeInLeft" > */}
            <figcaption>
            Npm install, make sure
              you have connected your Redis information in the server, and
              passed correct authentication in that field. 
            </figcaption>
          {/* </ScrollAnimation> */}
          <img src="/assets/Screen Shot 2019-12-19 at 6.13.34 PM.png" alt="image" height="400"/>
        </figure>
      </section>
    </div>
  );
}
export default HowToUse;
