import mongoose from "mongoose";

const companyInfoSChema = mongoose.Schema({
  field: {
    type: String,
    required: true,
  },
  dateposted: {
    type: String,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  positionoffered: {
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

const CompanyInfoModel = mongoose.model("CompanyInfoModel", companyInfoSChema);

export default CompanyInfoModel;
