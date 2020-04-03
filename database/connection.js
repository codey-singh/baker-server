const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const url = process.env.MONGO_URL || "mongodb://localhost:27017";

function connect(cb) {
  MongoClient.connect(
    url,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) {
        console.error(err);
        return;
      } else {
        let db = client.db("bakersdb");
        cb(client, db);
      }
    }
  );
}

module.exports = {
  connect,
};
