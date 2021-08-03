export function addEvents(logs) {
  return {
    type: "ADD",
    payload: [logs],
  };
}
