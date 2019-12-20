import React from "react";

function Footer() {
  return (
    <div className="Footer">
      <span>
        <iframe
          className="github-btn"
          src="https://ghbtns.com/github-btn.html?user=cacheql&repo=cacheql&type=watch&count=true"
          allowtransparency="true"
          frameBorder="0"
          scrolling="0"
          width="109px"
          height="20px"
        ></iframe>
        <a
          href="https://twitter.com/cache_ql"
          className="twitter-follow-button"
          data-show-count="true"
          data-lang="en"
        >
          @Cache_QL
        </a>
      </span>
      <span>2019</span>
    </div>
  );
}
export default Footer;
