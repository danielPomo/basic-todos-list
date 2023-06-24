/* eslint-disable no-unused-vars */
import { Form, Button } from "react-bootstrap";
import TodosList from "./TodosList";
import { useState } from "react";

const TodosForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("")
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex gap-2" controlId="todosForm">
          <Form.Control
            type="text"
            placeholder="Take Peggy to the vet"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form.Group>
      </Form>
      <TodosList />
    </>
  );
};

export default TodosForm;
