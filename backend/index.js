import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import internshipRoutes from "./routes/internshipRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/internshipPage", internshipRoutes);

const CONN_URL =
  "mongodb+srv://dsewebsiteuser1:holyshitcomeone123@dsewebsitecluster.qf1vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONN_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running at port ${PORT}`))
  )
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
