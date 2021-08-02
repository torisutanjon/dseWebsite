import * as api from "../api";

//Action Creators

export const getCompanyInfos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCompanyInfo();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log("error message:", error.message);
  }
};
