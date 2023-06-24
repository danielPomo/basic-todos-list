import { ListGroup, Button } from "react-bootstrap";

const TodosListItem = () => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      Go to the groceries store
      <Button variant="danger">Delete</Button>
    </ListGroup.Item>
  );
};

export default TodosListItem;
