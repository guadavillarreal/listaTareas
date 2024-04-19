import { Button, ListGroup } from "react-bootstrap";

const ItemTareas = ({ nombreTarea }) => {
  return (
  <ListGroup.Item className="d-flex justify-content-between">
    {nombreTarea}
    <Button variant="danger">Borrar</Button>
  </ListGroup.Item>
    );
};

export default ItemTareas;
