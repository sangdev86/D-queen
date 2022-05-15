import { actionSlice } from "../components/reducer/actions.slice";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
	actions: actionSlice.reducer,
});
export default rootReducer;
