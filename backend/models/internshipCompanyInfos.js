import mongoose from "mongoose";

const companyInfoSChema = new mongoose.Schema(
  {
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
  },
  { collection: "companyinfos" }
);

const CompanyInfoModel = mongoose.model("companyinfos", companyInfoSChema);

export default CompanyInfoModel;
