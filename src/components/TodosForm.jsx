import { Form, Button } from "react-bootstrap";
import TodosList from "./TodosList";

const TodosForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 d-flex gap-2" controlId="todosForm">
          <Form.Control type="text" placeholder="Take Peggy to the vet" />
          <Button variant="primary">Create</Button>
        </Form.Group>
      </Form>
      <TodosList />
    </>
  );
};

export default TodosForm;
