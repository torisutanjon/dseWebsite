import * as api from "../api";
import * as actionTypes from "../constants/actionsTypes";

export const getCompanyInfos = (selectedField) => async (dispatch) => {
  //parameter selectedField added
  try {
    const { data } = await api.fetchCompanyInfo(selectedField); //parameter selectedField added
    // console.log(`getCompanyInfos ${selectedField}`); //parameter selectedField added
    dispatch({ type: actionTypes.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
