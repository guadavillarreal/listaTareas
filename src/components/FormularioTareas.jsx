{
  /*import { Button, from} from "react-bootstrap"; */
}
{
  /*puedo import de esta manera o mas simplificado -arriba- cuando forman parte de la misma libreria*/
}
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";
//rsc: para crear el esqueleto del arch
const FormularioTareas = () => {
  //la logica del componente
  //state´s:funciones
  const [tarea, setTarea] = useState("");
  //array que guarda las tareas
  const [tareas, setTareas] = useState([])

  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 d-flex"
          controlId="exampleForm.ControlInput1"
        >
          {/* <Form.Label>Ingresa tus tareas</Form.Label> */}
          {/*txt area */}
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e)=>
//para ver el valor que trae el e.target.value:  console.log(e.target.value)
//lo comento porq me da error puede que sea porq tiene que ser una func de una linea:console.log(e.target.value)
            setTarea(e.target.value)
          }
          value={tarea}
          />
          {/*btn */}
          <Button variant="success" className="mx-2" type="submit">
            Agregar Tarea
          </Button>
        </Form.Group>
        <ListaTareas />
      </Form>
    </section>
  );
};

export default FormularioTareas;
