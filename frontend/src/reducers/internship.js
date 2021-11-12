import * as actionTypes from "../constants/actionsTypes";

const reducer = (internship = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL:
      return action.payload;
    default:
      return internship;
  }
};

export default reducer;
