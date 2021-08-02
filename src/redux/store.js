import RootReducer from "./reducer/rootReducer";
import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };
