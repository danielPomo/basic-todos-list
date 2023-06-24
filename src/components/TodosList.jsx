/* eslint-disable react/prop-types */
import { ListGroup } from "react-bootstrap";
import TodosListItem from "./TodosListItem";

const TodosList = ({ todos, deleteTodo }) => {
  return (
    <ListGroup>
      {todos.map((todo, pos) => (
        <TodosListItem
          todo={todo}
          deleteTodo={deleteTodo}
              key={pos}
              pos = {pos}
        ></TodosListItem>
      ))}
    </ListGroup>
  );
};

export default TodosList;
