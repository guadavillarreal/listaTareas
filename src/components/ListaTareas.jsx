import { ListGroup } from "react-bootstrap";
import ItemTareas from "./ItemTareas";
//const ListaTareas = ({tareas}) => {//llamada al props desestructurada mente
//const ListaTareas = (props) => {//llamada al props estructuradamente
const ListaTareas = (props) => {
  return (
    <ListGroup>
      {/*--no toma esta func {
        
        //desestructuradamente: tareas.map(() => (
        props.tareas.map(() => (<ItemTareas />))} */}
      {//las llaves indican que hare logica de js
        props.tareas.map((elementoTarea, posocionTarea)=><ItemTareas key={posocionTarea} />)
      }
    </ListGroup>
  );
};

export default ListaTareas;
