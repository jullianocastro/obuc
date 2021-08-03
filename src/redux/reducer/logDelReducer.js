export default  function LogDelReducer(state = [], action) {
    const AP = action.payload;
  
    switch (action.type) {
      case "DEL":
        return AP[0] 
  
      default:
        return state;
    }
  }
  
  
  