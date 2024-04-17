import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
//rsc: para crear el esqueleto del arch
const FormularioTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Ingresa tus tareas</Form.Label> */}
          {/*txt area */}
          <Form.Control type="text" placeholder="Ej: tarea 1" minLength={3} maxLength={50} />
          {/*btn */}
          <Button variant="success" className="mx-2" type="submit">Agregar Tarea</Button>
        </Form.Group>
        <ListaTareas/>
      </Form>
    </section>
  );
};

export default FormularioTareas;
