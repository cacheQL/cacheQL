import React from "react";

const QueryContainer = props => {
  return (
    <div className="query-container">
      <div className="query-inputs">
        {/* <h1>Try with a GraphQL query</h1> */}
        {/* <form className="message-send"> */}
        {/* Put a query here */}
        {/* {" "}
        <input
          type="text"
          className="inputBox"
          placeholder="Put a query here"
          value={props.name}
          onChange={props.nameHandler}
        />
        <br /> */}
        {/* Message */}
        {/* {" "}
        <input
          type="text"
          className="inputBox"
          placeholder="Insert some value"
          value={props.message}
          onChange={props.messageHandler}
        />
        <br />
        <input type="submit" value="Submit" onClick={props.queryPost} />
      </form> */}

        <form className="message-get">
          {/* Your query */}
          {/*  */}
          <h3>Query</h3>
          <input
            type="input"
            className="inputBox"
            placeholder="Name"
            value={props.nameGet}
            onChange={props.nameGetHandler}
          />
          <h3>Fields</h3>
          <span>Name</span>
          <input
            type="checkbox"
            // className="inputBox"
            // placeholder="Name"
            checked={props.bName}
            onChange={props.nameFieldChangeHandler}
          />
          <br />
          <span>Age</span>
          <input
            type="checkbox"
            // className="inputBox"
            // placeholder="Age"
            checked={props.bAge}
            onChange={props.ageFieldChangeHandler}
          />
          <br />
          <span>Birthday</span>
          <input
            type="checkbox"
            // className="inputBox"
            // placeholder="Birthdate"
            checked={props.bBirthdate}
            onChange={props.birthdateFieldChangeHandler}
          />
          <br />
          <span>Position</span>
          <input
            type="checkbox"
            // className="inputBox"
            // placeholder="Position"
            checked={props.bPosition}
            onChange={props.positionFieldChangeHandler}
          />
          <br />
          <input
            type="submit"
            value="Get Message"
            className="get-message-button"
            onClick={props.queryGet}
          />
          <br />
        </form>
      </div>
      <div className="example-picture">
        <img
          className="actual-example-picture"
          src="/assets/query_example.png"
        ></img>
      </div>
    </div>
  );
};

export default QueryContainer;
