import axios from "axios";
import { BOOK_LIST_FAIL, BOOK_LIST_REQUEST, BOOK_LIST_SUCCESS } from "./types";

export const listBooks = () => async (dispatch) => {
   try {
      dispatch({ type: BOOK_LIST_REQUEST });
      const { data } = await axios.get("/api/v1/books");
      dispatch({
         type: BOOK_LIST_SUCCESS,
         payload: data,
      });
   } catch (error) {
      dispatch({
         type: BOOK_LIST_FAIL,
         payload:
            error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
      });
   }
};
