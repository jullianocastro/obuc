export default function navGlobalReducer(state = "Local de Trabalho", action) {
  const AP = action.payload;

  switch (action.type) {
    case "NAV1":
      return AP[0];

    case "NAV2":
      return AP[0];

    case "NAV3":
      return AP[0];

    case "NAV4":
      return AP[0];

    case "NAV5":
      return AP[0];

    case "NAV6":
      return AP[0];

    case "NAV7":
      return AP[0];

    default:
      return state;
  }
}
