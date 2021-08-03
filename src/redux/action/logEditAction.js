export function editEvents(logedits) {
  return {
    type: "EDIT",
    payload: [logedits],
  };
}
