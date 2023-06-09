/**
 * reducer function, process action
 */

const initState = {
  value: "default",
};
const reducer = (state = initState, action) => {
  console.log("reducer:", state, action);
  switch (action.type) {
    case "send_type":
      return Object.assign({}, state, action);

    default:
      return state;
  }
};

module.exports = {
  reducer,
};
