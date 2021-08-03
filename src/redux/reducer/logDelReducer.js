export default  function LogDelReducer(state = [], action) {
    const AP = action.payload;
  
    switch (action.type) {
      case "DEL":
      if(AP[0].length === 0){
        return;
      } 

      return AP[0]
  
      default:
        return state;
    }
  }
  
  
  