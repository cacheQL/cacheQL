import React from "react";
//might need to do two separate ones with the same styling/ flexbox in compare container
// import TimeBox from "../components/TimeBox.jsx";

const TimeBox = props => {
  return (
    <div>
      <h1 className="miliseconds">{props.cacheTime}</h1>
    </div>
  );
};

const ResultBox = props => {
  return (
    <div>
      <h3 className="resultMessage">{props.cacheResult}</h3>
    </div>
  );
};

const CacheQL = props => {
  return (
    <div>
      <h2>CacheQL</h2>
      <ResultBox cacheResult={props.cacheResult} />
      <TimeBox cacheTime={props.cacheTime} />
      <p>
        Here, we send the query through our custom middleware and see a speed
        improvement when our result is in the cache
      </p>
    </div>
  );
};

export default CacheQL;
