import { combineReducers } from "redux";
import { bookDetailsReducer, bookListReducer } from "./bookReducers";

export default combineReducers({
   bookList: bookListReducer,
   bookDetails: bookDetailsReducer,
});
