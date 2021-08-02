import { combineReducers } from "redux";
import WorkplaceReducer from "./workplaceReducer";
import PersistReducer from "./Persist.reducer";
import navReducer from './NavReducer';

const RootReducer = combineReducers({
  WorkplaceReducer: WorkplaceReducer,
  PersistReducer: PersistReducer,
  navReducer:navReducer,

});
export default RootReducer;
