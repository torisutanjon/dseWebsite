import CompanyInfoModel from "../models/internshipCompanyInfos.js";

export const getInternshipPage = async (req, res) => {
  // console.log(`controller's params: ${req.params.field}`); // this was added
  await CompanyInfoModel.find({ field: req.params.field }).then((data) => {
    res.send(data);
  });
};
