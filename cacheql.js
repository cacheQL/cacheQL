//REDIS NEW

const redis = require("redis");
const { promisify } = require("util");

let redisHost;
let redisPort;
let redisAuth;

let timeToLive;

let client;
let hgetAsync;
let hgetallAsync;

const cacheQL = {};

// Sets the redis database/cache configuration
// User calls the set function and sends:
// redisHost, redisPort, redisAuth, and/or timeToLive

cacheQL.set = data => {
  if (data.redisHost) redisHost = data.redisHost;
  if (data.redisPort) redisPort = data.redisPort;
  if (data.redisAuth) redisAuth = data.redisAuth;
  if (data.timeToLive) timeToLive = data.timeToLive;
};

// Authenticates the redis configuration based on the information set by the user

cacheQL.auth = () => {
  client = redis.createClient({
    port: redisPort,
    host: redisHost
  });

  hgetAsync = promisify(client.hget).bind(client);
  hgetAllAsync = promisify(client.hgetall).bind(client);

  client.auth(redisAuth, function(err, response) {
    if (err) {
      throw err;
    }
    console.log("Client Authenticated");
  });
};

cacheQL.checkify = (req, res, next) => {
  // Checks the query if it is inside the cache
  client.GET(req.body.query, function(err, response) {
    // req.body.query is the graphql query from the frontend request
    if (err) {
      throw err;
    } else {
      // The query is not inside the cache
      // redis returns null if the key is not inside the redis database/cache
      if (response === null) {
        res.locals.cache = null;
        return next();
      } else {
        // the query is in the cache
        // saves the result in cache variable in res.locals
        // to be accessible in the next middleware
        // Use JSON.parse because the response (value from redis) is saved using JSON stringify
        res.locals.cache = JSON.parse(response);
        return next();
      }
    }
  });
};

// Need to figure out how to go to db then go back here to save the query and result to cache
// Create another function (cachify)
// Which will be called after the endpoint middleware (like database)
// Then call said function to check if cache is null
// If null then saves query and result in cache

cacheQL.cachify = async (query, dbResult) => {
  // This is a case where the query doesn't exist in the database
  // In the previous step the user must save the query and the querry response from the initial query to the db
  // Stringifies the queryResponse to be able to save deeply nested objects in redis

  // console.log("cachify");
  // console.log;
  // console.log("in cachify: ", query);
  // console.log("in cachify: ", dbResult);

  // build object to be saved in cache
  // myHash is the part of graphql query that wont change on similar queries
  let myHash = getQuery(query);

  // Saves myHash, whole graphql query, and stringified dbResult to Redis cache
  client.HSET(myHash, query, JSON.stringify(dbResult), async function(
    err,
    response
  ) {
    if (err) {
      throw err;
    } else {
      // Sets TTL for myHash key
      client.EXPIRE(myHash, timeToLive);
      // console.log("successful response in HSET: ", response);
      return await response;
    }
  });
};

cacheQL.queryFields = query => {
  query = JSON.stringify(query);
  let childArr = [];
  let splitQ = query.split("\\n");
  console.log("splitQ ", splitQ);

  splitQ.forEach((ele, index, array) => {
    if (index > 1) {
      // if there is only one variable in the query
      if (array[index - 1].includes("{") && array[index + 1].includes("}")) {
        let pushThis = ele.trim();
        // array[index - 1].replace(" {", "").trim() + "." + ele.trim();
        console.log("PUSH THIS", pushThis);
        childArr.push(pushThis.trim());
      }
      // if the current element is a
      else if (!ele.includes("{") && !ele.includes("}") && ele.trim() != "") {
        console.log("ELEMENT: ", ele.trim());
        childArr.push(ele.trim());
      }
    }
  });
  return childArr;
};

const constructQueryChildrenObject = query => {
  query = JSON.stringify(query);
  let childObj = {};
  let splitQ = query.split("\\n");
  console.log("splitQ ", splitQ);

  splitQ.forEach((ele, index, array) => {
    if (index > 1) {
      // if there is only one variable in the query
      if (array[index - 1].includes("{") && array[index + 1].includes("}")) {
        let pushThis = ele.trim();
        // array[index - 1].replace(" {", "").trim() + "." + ele.trim();
        console.log("PUSH THIS", pushThis);
        // childArr.push(pushThis.trim());
        childObj[pushThis.trim()] = pushThis.trim();
      }
      // if the current element is a
      else if (!ele.includes("{") && !ele.includes("}") && ele.trim() != "") {
        console.log("ELEMENT: ", ele.trim());
        // childArr.push(ele.trim());
        childObj[ele.trim()] = ele.trim();
      }
    }
  });
  return childObj;
};

const getQuery = query => {
  const split = query.split("\n");
  // console.log(split);
  const myHash = split[1].trim();

  return myHash;
};

module.exports = cacheQL;
