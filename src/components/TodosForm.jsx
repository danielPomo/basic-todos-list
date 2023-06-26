/* eslint-disable no-unused-vars */
import { Form, Button } from "react-bootstrap";
import TodosList from "./TodosList";
import { useState, useEffect } from "react";

const TodosForm = () => {
  const todosAlreadyInLocalStorage =
    JSON.parse(localStorage.getItem("todosList")) || [];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(todosAlreadyInLocalStorage);

  useEffect(() => {
    localStorage.setItem("todosList", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (todoPos) => {
    let todosCopy = todos.filter((todo, pos) => pos !== todoPos);
    setTodos(todosCopy);
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
      <TodosList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default TodosForm;
