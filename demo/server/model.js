const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const myURI =
  "mongodb+srv://admin:admin@cluster0-zvnqd.mongodb.net/test?retryWrites=true&w=majority";

const URI = process.env.MONGO_URI || myURI;

mongoose
  .connect(URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "graphql-practice-codesmith"
  })
  .then(() => console.log(`Connected to Mongo DB`))
  .catch(err => console.log(err));

const personSchema = new Schema({
  name: String,
  age: Number,
  birthdate: Date,
  position: String
});

const Person = mongoose.model("people", personSchema);

module.exports = { Person };
