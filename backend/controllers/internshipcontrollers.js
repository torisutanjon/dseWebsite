import CompanyInfo from "../models/internships.js";

export const getIntershipPage = async (req, res) => {
  try {
    const companyinfo = await CompanyInfo.find();
    console.log(companyinfo);
    return res.status(200).json(companyinfo);
  } catch (err) {
    return res.status(404).json({ message: err.message });
  }
};
