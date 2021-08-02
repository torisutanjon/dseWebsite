import axios from "axios";

const url = `http://localhost:5000/intershipPage`;

export const fetchCompanyInfo = () => axios.get(url);
