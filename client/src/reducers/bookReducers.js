import {
   BOOK_DETAILS_FAIL,
   BOOK_DETAILS_REQUEST,
   BOOK_DETAILS_SUCCESS,
   BOOK_LIST_FAIL,
   BOOK_LIST_REQUEST,
   BOOK_LIST_SUCCESS,
} from "../actions/types";

export const bookListReducer = (state = { books: [] }, action) => {
   switch (action.type) {
      case BOOK_LIST_REQUEST:
         return { loading: true, books: [] };
      case BOOK_LIST_SUCCESS:
         return { loading: false, books: action.payload };
      case BOOK_LIST_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};

export const bookDetailsReducer = (state = { book: {} }, action) => {
   switch (action.type) {
      case BOOK_DETAILS_REQUEST:
         return { ...state, loading: true };
      case BOOK_DETAILS_SUCCESS:
         return { loading: false, book: action.payload };
      case BOOK_DETAILS_FAIL:
         return { loading: false, error: action.payload };
      default:
         return state;
   }
};
