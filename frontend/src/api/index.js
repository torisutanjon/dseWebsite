import axios from "axios";

const url = "http://localhost:3000/intershipPage";

export const fetchCompanyInfo = () => axios.get(url);
