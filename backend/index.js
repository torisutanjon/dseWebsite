import express from "express";
import path from "path";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//routes
import internshipRoutes from "./routes/internshipRoutes.js";
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/intershipPage", internshipRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("frontend/build"));

  // index.html for all page routes
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

//connecting to database//////////////////////////////////////////

const urlconn =
  "mongodb+srv://dsewebsiteuser1:holyshitcomeone123@dsewebsitecluster.qf1vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(urlconn, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.log(`Unable to connect to PORT 5000 ${err}`);
  } else {
    console.log("Connected to port 5000");
  }
});
