import { ListGroup } from "react-bootstrap";
import TodosListItem from "./TodosListItem";

const TodosList = () => {
  return (
    <ListGroup>
      <TodosListItem/>
    </ListGroup>
  );
};

export default TodosList;
