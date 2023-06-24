/* eslint-disable react/prop-types */
import { ListGroup, Button } from "react-bootstrap";

const TodosListItem = ({ todo, deleteTodo, pos }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {todo}
      <Button variant="danger" onClick={() => deleteTodo(pos)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default TodosListItem;
