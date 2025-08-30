import { combineReducers, createStore } from "redux";
import { dataReducer } from "./reducer/DataReducer";
import { setting } from "./reducer/SettingReducer";

const rootReducer = combineReducers({
  dataReducer: dataReducer,
  settings: setting,
});

export const store = createStore(rootReducer);
