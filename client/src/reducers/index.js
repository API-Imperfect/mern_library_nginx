import { combineReducers } from "redux";
import { bookListReducer } from "./bookReducers";

export default combineReducers({
   bookList: bookListReducer,
});
