import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

function HowToUse() {
  return (
    <div id="howToUseBox">
      <h1>Download</h1>
      <section id='features'>
            <figure>
                <img src="https://picsum.photos/400/400" alt='image'/>
                <ScrollAnimation animateIn="fadeInRight">
                <figcaption>npm install (put the line here that will be connected), make sure you have connected your Redis information in the server, and passed correct authentication in that field.</figcaption>
                </ScrollAnimation>
            </figure>
            <figure>
                <ScrollAnimation animateIn="fadeInLeft">   
                <figcaption>need to incorporate checkify and all of its shit in here need to incorporate checkify and all of its shit in here</figcaption>
                </ScrollAnimation>
                <img src="https://picsum.photos/400/400" alt='image' />
            </figure>
            <figure>
                <img src="https://picsum.photos/400/400" alt='image' /> 
                <ScrollAnimation animateIn="fadeInRight">
                <figcaption>Need to put cachify and all its shit in here Need to put cachify and all its shit in here</figcaption>
                </ScrollAnimation>
            </figure>
        </section>
    </div>
  )
  
}
export default HowToUse;