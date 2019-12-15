import React from "react";
//might need to do two separate ones with the same styling/ flexbox in compare container
// import ResultBox from "../components/ResultBox.jsx";

const TimeBox = props => {
  return (
    <div>
      <h4>{props.noCacheTime}</h4>
    </div>
  );
};

const ResultBox = props => {
  return (
    <div>
      <h1>{props.noCacheResult}</h1>
    </div>
  );
};

const NoCacheQL = props => {
  return (
    <div>
      <h2>No CacheQL</h2>
      <ResultBox noCacheResult={props.noCacheResult} />
      <TimeBox noCacheTime={props.noCacheTime} />
      <h3>
        These results are based on sending and retrieving non-cached data from a
        DB
      </h3>
    </div>
  );
};

export default NoCacheQL;
