const { GraphQLScalarType } = require("graphql");
const { Person } = require("./model.js");

const cacheQL = require("./cacheql");

const resolvers = {
  getAllPeople: async () => {
    return await Person.find({})
      .populate()
      .exec();
  },

  getPerson: async (args, root) => {
    console.log("in get person");
    // console.log(args);
    // console.log(root.body.query);
    const query = root.body.query;
    const checkify = await cacheQL.checkify(query, true);
    // Not in the redis cache
    // console.log("checkify: ", checkify);

    if (!checkify) {
      const fields = cacheQL.queryFields(query);
      // console.log("fields: ", fields);

      let fieldsObj = {};

      for (let i = 0; i < fields.length; i++) {
        fieldsObj[fields[i]] = 1;
      }

      // console.log("Fields OBJ: ", fieldsObj);

      const fromDB = await Person.findOne({ name: args.name }, fieldsObj)
        .populate()
        .exec();
      // console.log(fromDB);
      // console.log("after db call");

      const cachifyResponse = await cacheQL.cachify(query, fromDB);
      // console.log("back");
      // console.log(cachifyResponse);
      return fromDB;
    }
    // In the redis cache
    else {
      return checkify;
    }
  },

  addPerson: async args => {
    const newPerson = new Person({
      name: args.name,
      age: args.age,
      birthdate: args.birthdate,
      position: args.position
    });

    console.log("add person");

    const personWait = await newPerson.save().catch(err => {
      throw Error(err);
    });

    return personWait;
  }
};

module.exports = resolvers;
