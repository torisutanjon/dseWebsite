const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: true }));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.log(`Unable to connect to PORT 5000 ${err}`);
  } else {
    console.log("Connected to port 5000");
  }
});
