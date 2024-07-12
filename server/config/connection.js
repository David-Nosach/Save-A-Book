const mongoose = require("mongoose"); // Import the mongoose library

// Connect to the MongoDB database using the URI from environment variables or fallback to a local database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks"
);
// Export the mongoose connection to be used in other parts of the application
module.exports = mongoose.connection;
