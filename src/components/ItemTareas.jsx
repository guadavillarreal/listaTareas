import { Button, ListGroup } from "react-bootstrap";
//({ nombreTarea , borrarTarea}):::Indica q recibo props y cuales-esta desestructurado 
const ItemTareas = ({ nombreTarea , borrarTarea}) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      {/*borrarTarea(nombreTarea): props desestructurado */}
      <Button variant="danger" onClick={() => borrarTarea(nombreTarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTareas;
