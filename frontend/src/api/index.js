import axios from "axios";

// const url = "http://localhost:5000/internshipPage/:field";

export const fetchCompanyInfo = (selectedField) =>
  axios.get(`http://localhost:5000/internshipPage/${selectedField}`); //parameter selectedField added
