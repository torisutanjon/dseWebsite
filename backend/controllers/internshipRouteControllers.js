import CompanyInfoModel from "../models/internshipCompanyInfos.js";

export const getInternshipPage = async (req, res) => {
  // console.log(req.params.field);
  await CompanyInfoModel.find().then((data) => {
    res.send(data);
  });
};
