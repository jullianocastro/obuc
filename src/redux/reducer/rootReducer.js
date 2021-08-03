import { combineReducers } from "redux";
import WorkplaceReducer from "./workplaceReducer";
import PersistReducer from "./Persist.reducer";
import navReducer from './NavReducer';
import LogReduceradd  from './logReducer'
import LogEditReducer from './logEditReducer'
import LogDelReducer from './logDelReducer'
const RootReducer = combineReducers({
  WorkplaceReducer: WorkplaceReducer,
  PersistReducer: PersistReducer,
  navReducer:navReducer,
  LogReduceradd:LogReduceradd,
  LogEditReducer:LogEditReducer,
  LogDelReducer:LogDelReducer
  



 

});
export default RootReducer;
