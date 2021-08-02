export default function navGlobalReducer(state = "", action) {
  const AP = action.payload;

  switch (action.type) {
    case "NAV":
      return AP[0];

    case "NAV2":
      return AP[0];

    default:
      return state;
  }
}
