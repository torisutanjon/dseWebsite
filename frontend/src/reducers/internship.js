const reducer = (internship = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    default:
      return internship;
  }
};

export default reducer;
