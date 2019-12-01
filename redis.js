const redis = require("redis");

const redisHost = "redis-10212.c52.us-east-1-4.ec2.cloud.redislabs.com";
const redisPort = process.argv[3] || 10212;
const redisAuth = "eRQFVq70CXuDEoISTvKNVFtdevWabNbe";

const client = redis.createClient({
  port: redisPort,
  host: redisHost
});

client.auth(redisAuth, function(err, response) {
  if (err) {
    throw err;
  }
  console.log("Client Authenticated");
});

const cacheQL = {};

cacheQL.cachify = (req, res, next) => {
  // Checks the query if it is inside the cache
  client.get(res.locals.query, function(err, response) {
    if (err) {
      throw err;
    } else {
      // The query is not inside the cache
      if (response === null) {
        // Need to figure out how to go to db then go back here to save the query and result to cache
        // Create another function
        // Which will be called after the endpoint middleware (like database)
        // Then call said function to check if cache is null
        // If null then saves qeury and result in cache
        res.locals.cache = null;
      } else {
        // the query is in the cache
        console.log(response);
        // saves the result in cache variable in res.locals
        // to be accessible in the next middleware
        res.locals.cache = response;
        return next();
      }
    }
  });
};

// const cachify = query => {
//   client.get(query, function(err, response) {
//     if (err) {
//       throw err;
//     } else {
//       // The query is not inside the cache
//       if(response === null) {
//         // Need to figure out how to go to db then go back here to save the query and result to cache
//       }
//       else {
//         // query is in the cache
//         console.log(response);

//       }
//     }
//   });
// };

// client.set("foo", "bar");
// client.set("foo2", "bar2");
// client.set("foo3", "bar3");
// client.set("foo4", "bar4");

// client.del("foo3");
// client.del("foo4");

// client.get("foo", function(err, response) {
//   if (err) {
//     throw err;
//   } else {
//     console.log(response);
//   }
// });

// client.keys("*", (err, res) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(res);
//   }
// });

// client.get("", (err, response) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(response);
//   }
// });

module.exports = cacheQL;
