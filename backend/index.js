import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

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

const CONNECTION_URL =
  "mongodb+srv://dsewebsiteuser1:holyshitcomeone123@dsewebsitecluster.qf1vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Running at Port 5000`)
    )
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);

// app.listen(process.env.PORT || 5000, (err) => {
//   if (err) {
//     console.log(`Unable to connect to PORT 5000 ${err}`);
//   } else {
//     console.log("Connected to port 5000");
//   }
// });
