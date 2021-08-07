import CompanyInfoModel from "../models/internshipCompanyInfos.js";

export const getInternshipPage = async (req, res) => {
  try {
    const companyInfos = await CompanyInfoModel.find();
    console.log(companyInfos);
    res.status(200).json(companyInfos);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

  // console.log("This is getInternshipPage function running good");
};
