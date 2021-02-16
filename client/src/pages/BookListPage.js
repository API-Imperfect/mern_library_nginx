import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listBooks } from "../actions/bookActions";
import Book from "../components/Book";

const BookListPage = () => {
   const dispatch = useDispatch();
   const bookList = useSelector((state) => state.bookList);
   const { loading, error, books } = bookList;

   useEffect(() => {
      dispatch(listBooks());
   }, [dispatch]);
   return (
      <>
         <h1>The Books in My Library</h1>
         {loading ? (
            <h3>Loading...</h3>
         ) : error ? (
            <h3>{error}</h3>
         ) : (
            <>
               <Row>
                  {books.map((book) => (
                     <Col key={book._id} sm={12} md={6} lg={4}>
                        <Book book={book} />
                     </Col>
                  ))}
               </Row>
            </>
         )}
      </>
   );
};

export default BookListPage;
