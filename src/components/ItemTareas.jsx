import { ListGroup } from "react-bootstrap";

const ItemTareas = ({ nombreTarea }) => {
  return (
  <ListGroup.Item>
    {nombreTarea}
    
  </ListGroup.Item>
    );
};

export default ItemTareas;
