import React from "react";
import { Button, Container, Jumbotron } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
   return (
      <Router>
         <Header />
         <main className="py-3">
            <Container>
               <Jumbotron>
                  <h1 className="text-center">Welcome to My Library!</h1>
                  <p className="text-center">
                     This is a simple Fullstack MERN Application to demonstrate
                     how Nginx and Docker can be used in this workflow
                  </p>
                  <p className="text-center">
                     <LinkContainer to="/books">
                        <Button variant="success" size="lg">
                           My Books
                        </Button>
                     </LinkContainer>
                  </p>
               </Jumbotron>
            </Container>
         </main>
         <Footer />
      </Router>
   );
};

export default App;
