import axios from "axios";

const url = "http://localhost:5000/internshipPage/:field";

export const fetchCompanyInfo = () => axios.get(url);
