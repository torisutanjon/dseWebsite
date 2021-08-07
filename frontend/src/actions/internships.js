import * as api from "../api";

export const getCompanyInfos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCompanyInfo();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
