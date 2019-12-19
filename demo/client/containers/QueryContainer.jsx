import React from "react";

const QueryContainer = props => {
  
       

  return (
    <div className="query-container">
      <h1>Try with a GraphQL query</h1>
      <form className="message-send">
      {/* Put a query here */}
       {" "}
        <input
          type="text"
          className="inputBox"
          placeholder="Put a query here"
          value={props.name}
          onChange={props.nameHandler}
        />
        <br />
        {/* Message */}
       {" "}
        <input
          type="text"
          className="inputBox"
          placeholder="Insert some value"
          value={props.message}
          onChange={props.messageHandler}
        />
        <br />
        <input type="submit" value="Submit" onClick={props.queryPost} />
      </form>

      <form className="message-get">
      {/* Your query */}
        {" "}
        <input
          type="text"
          className="inputBox"
          placeholder="Your querry again"
          value={props.nameGet}
          onChange={props.nameGetHandler}
        />
        <br />
        <input type="submit" value="Get Message" className="get-message-button" onClick={props.queryGet} />
        <br/>
      </form>
    </div>
  );
};

export default QueryContainer;
