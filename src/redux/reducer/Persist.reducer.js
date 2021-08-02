import { REHYDRATE } from 'redux-persist/lib/constants'; 

export default function PersistReducer(state={}, action){
switch(action.type){
    case REHYDRATE:
      return { ...state, persistedState: action.payload };
    default:
        return state;
    }
}