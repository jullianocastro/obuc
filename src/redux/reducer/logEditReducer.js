

export default  function LogEditReducer(state = ["0","b"], action) {
    const AP = action.payload;
  
    switch (action.type) {
      case "EDIT":
        return AP[0] 
  
      default:
        return state;
    }
  }
  
  
  