import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
// import path from "path";
import internshipRoutes from "./routes/internshipRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

mongoose
  .connect(process.env.DB_CONN_STRING, {
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
