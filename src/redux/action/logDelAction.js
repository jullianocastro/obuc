export function delEvents(logrms) {
  return {
    type: "DEL",
    payload: [logrms],
  };
}
