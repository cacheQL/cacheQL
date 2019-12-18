import React from 'react';
import Particles from 'react-particles-js';
import GitHubButton from 'react-github-btn'

const Hero = () => {
  return (
    <div className="particles">

      <div className="hero-content">
        <h1 className="hero-title">CacheQL</h1>
        <h3 className="hero-description">Server-side caching library for GraphQL Queries</h3>
        {/* <a class="btn" href="https://github.com/cacheQL/cacheQL" target="_blank" rel="noopener" aria-label="Follow CacheQL on GitHub"><svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-mark-github" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> <span>Follow CacheQL</span></a>
        <a class="btn" href="https://github.com/cacheQL/cacheQL" target="_blank" rel="noopener" aria-label="Star CacheQL on GitHub"><svg version="1.1" width="14" height="16" viewBox="0 0 14 16" class="octicon octicon-star" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path></svg> <span>Star</span></a>
        <a class="social-count" href="https://github.com/cacheQL/cacheQL/stargazers" target="_blank" rel="noopener" aria-label="6 stargazers on GitHub"><b></b><i></i><span>6</span></a> */}
        <GitHubButton className="hero-github-follow" href="https://github.com/cacheQL/cacheQL" data-size="large" aria-label="Follow @ntkme on GitHub">Follow cacheQL</GitHubButton>
        <GitHubButton className="hero-github-star" href="https://github.com/cacheQL/cacheQL" data-icon="octicon-star" data-size="large" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
        <GitHubButton className="hero-github-sponsor" href="https://github.com/cacheQL/cacheQL" data-icon="octicon-heart" data-size="large" aria-label="Sponsor @ntkme on GitHub">Sponsor</GitHubButton>
      </div>

    <Particles 
    params={{
	    "particles": {
	        "number": {
	            "value": 320,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />
  </div>
  )
}


export default Hero;