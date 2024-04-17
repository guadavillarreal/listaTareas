import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
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
      </Form>
    </section>
  );
};

export default FormularioTareas;
