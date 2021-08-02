export default function WorkplaceGlobal(state = [], action) {
  const APMS = action.payload;

  switch (action.type) {
    case "ARRLOCALTRABALHO":
      return APMS[0];

    default:
      return state;
  }
}
