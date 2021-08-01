const reducerFunctions = (companyinfo = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return companyinfo;
  }
};

export default reducerFunctions;
