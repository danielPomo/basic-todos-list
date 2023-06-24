import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Container className="my-5 main">
        <section className="text-light">
          <h1 className="text-center ">Todos List</h1>
          <hr />
        </section>
      </Container>
      <footer className="bg-dark text-center text-light py-4">
        <p>&copy; All rights reserved</p>
      </footer>
    </>
  );
}

export default App;
