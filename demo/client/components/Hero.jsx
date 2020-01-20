import React from "react";
import Particles from "react-particles-js";
import GitHubButton from "react-github-btn";

const Hero = () => {
  return (
    <div>
      <div className="hero-content">
        <h1 className="hero-title">CacheQL</h1>
        <h3 className="hero-description">
          A <b>server-side</b> caching library for GraphQL queries
        </h3>
        <div className="github-buttons">
          <GitHubButton
            className="hero-github-follow"
            href="https://github.com/cacheQL/cacheQL"
            data-size="large"
            aria-label="Follow cacheQL on GitHub"
          >
            Follow cacheQL
          </GitHubButton>
          <GitHubButton
            className="hero-github-star"
            href="https://github.com/cacheQL/cacheQL"
            data-icon="octicon-star"
            data-size="large"
            aria-label="Star cacheQL on GitHub"
          >
            Star
          </GitHubButton>
          <GitHubButton
            className="hero-github-sponsor"
            href="https://github.com/cacheQL/cacheQL"
            data-icon="octicon-heart"
            data-size="large"
            aria-label="Sponsor cacheQL on GitHub"
          >
            Sponsor
          </GitHubButton>
          <div id="arrow-wrapper">
            <div class="arrow-border">
              <div class="arrow down"></div>
              <div class="pulse"></div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="hero-description">
            Test CacheQL's performance with this GraphQL query!
          </h3>
        </div>
      </div>

      <Particles
        className="particles"
        params={{
          particles: {
            number: {
              value: 0,
              density: {
                enable: true
              }
            },
            size: {
              value: 5,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: "top",
              out_mode: "out"
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "bubble"
              },
              onclick: {
                enable: true,
                mode: "repulse"
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
    </div>
  );
};

export default Hero;
