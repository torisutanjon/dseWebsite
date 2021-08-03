import axios from "axios";

const url = "http://localhost:5000/internshipPage";

export const fetchCompanyInfo = () => axios.get(url);
