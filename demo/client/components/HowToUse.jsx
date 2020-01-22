import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

function HowToUse() {
  return (
    <div id="howToUseBox">
      <h1>Download</h1>
      <section id="download">
        <figure>
          <img
            src="/assets/Screen Shot 2019-12-19 at 6.17.05 PM.png"
            alt="image"
            height="400"
          />
          {/* <ScrollAnimation animateIn="fadeInRight"> */}
          <figcaption>
            See screenshot on how to incorporate the CacheQL library into your
            project. The specs will change depending on the database you decide
            to use.
          </figcaption>
          {/* </ScrollAnimation> */}
        </figure>
        <figure className="fadeInLeft">
          {/* <ScrollAnimation animateIn="fadeInLeft" > */}
          <figcaption>
            Use 'npm install cacheql', make sure you have plugged in your valid
            Redis credentials (port, host) on your server via the specified
            format, and you're ready to go!
          </figcaption>
          {/* </ScrollAnimation> */}
          <img
            src="/assets/Screen Shot 2019-12-19 at 6.13.34 PM.png"
            alt="image"
            height="400"
          />
        </figure>
      </section>
    </div>
  );
}
export default HowToUse;
