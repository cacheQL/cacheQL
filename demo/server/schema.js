const { buildSchema } = require("graphql");

const schema = buildSchema(`
  scalar myDate

  type Query {
    getAllPeople: [Person!]!
    getPerson(name: String!): Person! 
  }

  type Mutation {
    addPerson(name: String!, age: Int!, birthdate: myDate!, position: String!): Person!
  }

  type Person {
    _id: ID!
    name: String!
    age: Int!
    birthdate: myDate!
    position: String!
  }
  
`);

module.exports = schema;
