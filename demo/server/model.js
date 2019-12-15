const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const URI =
  "mongodb+srv://admin:admin@cluster0-zvnqd.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: "cacheql"
  })
  .then(() => console.log(`Connected to Mongo DB`))
  .catch(err => console.log(err));

const PersonSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true }
});

const test = mongoose.model("tests", PersonSchema);

module.exports = {
  test
};
