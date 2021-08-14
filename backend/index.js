import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import path from "path";
import internshipRoutes from "./routes/internshipRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const CONN =
  "mongodb+srv://dsewebsiteuser1:holyshitcomeone123@dsewebsitecluster.qf1vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(CONN, {
    dbName: "dsewebsite_database",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to database`))
  .catch((err) => console.log(`Error has occured: ${err}`));

app.use("/internshipPage", internshipRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Unable to listen to port ${PORT} : ${err}`);
  } else {
    console.log(`Listening to port ${PORT}`);
  }
});

mongoose.set("useFindAndModify", false);
