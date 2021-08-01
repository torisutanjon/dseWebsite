import * as api from "../api";

//Action Creators

export const getCompanyInfos = () => async (dispatch) => {
  try {
    const { comapanyinfo } = await api.fetchCompanyInfo();
    dispatch({ type: "FETCH_ALL", payload: comapanyinfo });
  } catch (error) {
    console.log("error message:", error.message);
  }
};
