const mongoose = require("mongoose");

// Use the MONGODB_URI environment variable if available, otherwise fallback to a local MongoDB instance
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
