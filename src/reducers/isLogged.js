const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "Sign_In":
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
