import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema({
  dateposted: {
    type: Date,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  // companylogo: {
  //     type: ,
  //     required: true
  // },
  positionofferedL: {
    type: String,
    required: true,
  },
  companydescription: {
    type: String,
    required: true,
  },
  internshipduration: {
    type: String,
    required: true,
  },
});
