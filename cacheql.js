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

cacheQL.checkify = async (query, partial = false) => {
  // Checks the query if it is inside the cache
  // query is the graphql query from the frontend request
  // boolean partial is to enable partial field checking

  let myHash = getQuery(query);

  // Partial query
  // Checks passed in partial parameter if partial query/field detection is true
  //
  if (partial) {
    // Need to check if field is already inside cache
    // Comparison of fields
    // Probably need to do something with hgetAsync
    // Or its

    // Use hgetAllAsync to get all specific queries from a base query
    return await hgetAllAsync(myHash).then(res => {
      if (res === null) return null;

      let inCache = false;
      let allInCache = false;

      const resultObj = {};

      // const queryFields = constructQueryChildren(query);
      // console.log("QUERY FIELDS: ", queryFields);
      const queryFields = constructQueryChildrenObject(query);

      Object.keys(res).forEach(key => {
        if (!allInCache) {
          // field values in key
          const keyFields = constructQueryChildrenObject(key);

          // Check if fields in key are in query
          Object.keys(queryFields).forEach(ke => {
            if (keyFields.hasOwnProperty(ke)) {
              // Set inCache to true
              // To save fields data into result
              inCache = true;

              // Delete current queryFields key to possibly decrease duplicate keyField queries
              delete queryFields[ke];
            }
          });

          // if inCache is true, combine result with current key result
          if (inCache) {
            const valueObj = JSON.parse(res[key]);

            Object.keys(valueObj).forEach(k => {
              // Not in the resultObj
              // Add it
              if (!resultObj[k]) {
                resultObj[k] = valueObj[k];
              }
            });
          }

          inCache = false;

          if (Object.keys(queryFields).length <= 0) {
            allInCache = true;
          }
        }
      });
      //
      // need to fix bug
      // if partial fields are in cache then partial fields need to be taken from the end point
      // then combined which will be final result
      //
      return resultObj;
    });
  } else {
    // Use custom getAsync (Redis Get) created in the auth method
    const hgetResult = await hgetAsync(myHash, query).then(async response => {
      // The query is not inside the cache
      // redis returns null if the key is not inside the redis database/cache
      if (response === null) {
        return response;
      }
      // the query is in the cache
      // Use JSON.parse because the response (value from redis) is saved using JSON stringify
      else {
        return JSON.parse(response);
      }
    });
  }
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

// Optional helper function for user to extract fields from a graphql query
cacheQL.queryFields = query => {
  query = JSON.stringify(query);
  let childArr = [];
  let splitQ = query.split("\\n");

  splitQ.forEach((ele, index, array) => {
    if (index > 1) {
      // if there is only one variable in the query
      if (array[index - 1].includes("{") && array[index + 1].includes("}")) {
        let pushThis = ele.trim();
        childArr.push(pushThis.trim());
      }
      // if the current query has more than one variable
      else if (!ele.includes("{") && !ele.includes("}") && ele.trim() != "") {
        childArr.push(ele.trim());
      }
    }
  });
  return childArr;
};

// Helper function for cacheQL methods to extract query fields
const constructQueryChildrenObject = query => {
  query = JSON.stringify(query);
  let childObj = {};
  let splitQ = query.split("\\n");

  splitQ.forEach((ele, index, array) => {
    if (index > 1) {
      // if there is only one variable in the query
      if (array[index - 1].includes("{") && array[index + 1].includes("}")) {
        let pushThis = ele.trim();
        childObj[pushThis.trim()] = pushThis.trim();
      }
      // if the current query has more than one variable
      else if (!ele.includes("{") && !ele.includes("}") && ele.trim() != "") {
        childObj[ele.trim()] = ele.trim();
      }
    }
  });
  return childObj;
};

// Takes the original query and obtains the unchangeable part of a graphql query for similar queries
const getQuery = query => {
  const split = query.split("\n");
  const myHash = split[1].trim();

  return myHash;
};

module.exports = cacheQL;
