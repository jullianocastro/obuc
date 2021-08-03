

export default  function LogReduceradd(state = [], action) {
  const AP = action.payload;

  switch (action.type) {
    case "ADD":
      return AP[0]

    default:
      return state;
  }
}


