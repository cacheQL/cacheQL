# CacheQL

CacheQL is an open-source library for server-side caching GraphQL queries. This specific repository used a Redis cache to test performance and functionality, but can be incorporated with other caching mechanisms and databases.

CacheQL is in beta. The founding team is actively working on new features to optimize the tool. All feedback is welcome. Please post issues directly to this GitHub.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install CacheQL.

```bash
npm install cacheql
```

## Usage

```javascript

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
    return true;
  });
};

```
Connect to your specific Redis cache, and follow our code to set it up! Redis functions have issues with async, so we wrapped them in promisify, a method in the native 'util' library.

```javascript

// Require in CacheQL 
const cacheQL = require('cacheql') 

obj.getPerson = async (args, root) => {

    // Checkify will check the Redis cache
    const query = root.body.query;

    // The second parameter in checkify it to enable/disable partial field detection
    const checkify = await cacheQL.checkify(query, true);
    
    // Not in the redis cache
    if (!checkify) {

    // Extract the fields with queryFields
      const fields = cacheQL.queryFields(query);
      
      let fieldsObj = {};

      for (let i = 0; i < fields.length; i++) {
        fieldsObj[fields[i]] = 1;
      }
    
    // Depends on the specific database that the developer decides to use
      const fromDB = await Person.findOne({ name: args.name }, fieldsObj)
        .populate()
        .exec();
    
    // Store the resposne in the cache on the way back to the client
      const cachifyResponse = await cacheQL.cachify(query, fromDB);
      return fromDB;
    }

    // The query response is in the redis cache, so return it from there
    else {
      return checkify;
    }
  }

```

Checkify will be run, then queryFields (for partial field validation), then cachify will store the response in the database on its way back to the user. The developer has an option to turn on partial query validation by specifying true/false as the second parameter in queryFields.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
