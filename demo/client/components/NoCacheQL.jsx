import React from "react";
//might need to do two separate ones with the same styling/ flexbox in compare container
// import ResultBox from "../components/ResultBox.jsx";

const TimeBox = props => {
  return (
    <div>
      <h1 className="miliseconds">{props.noCacheTime}</h1>
    </div>
  );
};

const ResultBox = props => {
  return (
    <div>
      <h3 className="resultMessage">{props.noCacheResult}</h3>
    </div>
  );
};

const NoCacheQL = props => {
  return (
    <div>
      <h2>No CacheQL</h2>
      <ResultBox noCacheResult={props.noCacheResult} />
      <TimeBox noCacheTime={props.noCacheTime} />
      <p>
        These results are based on sending and retrieving non-cached data from a
        DB
      </p>
    </div>
  );
};

export default NoCacheQL;
