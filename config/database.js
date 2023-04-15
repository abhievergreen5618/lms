const { DB_USERNAME,DB_PASSWORD,DB_CLUSTER,DB_DATABASE_NAME } = require("./config");

module.exports = {
  MongoURI: `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.mongodb.net/${DB_DATABASE_NAME}?retryWrites=true&w=majority`
  // MongoURI: `mongodb://127.0.0.1:27017/alfcoretraning`,
};
