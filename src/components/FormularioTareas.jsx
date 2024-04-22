//import { Button, from} from "react-bootstrap"; */
//puedo import de esta manera o mas simplificado -arriba- cuando forman parte de la misma libreria*/
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
//rsc: para crear el esqueleto del arch
const FormularioTareas = () => {
  //la logica del componente-- "tarea y tareas" son hooks y por lo consecuente estados
  //state´s:funciones
  const [tarea, setTarea] = useState("");
  //en el montage siempr carga como array vacio xloq se crea una var para que guarde y inicalice deacuerdo lo que tenga guardado
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("listaTareas")) || [];
  //array que guarda las tareas---cuando cambia el estado quiero hacer algo con el periodo de vida del comp, xloq invoco a useEffect
  const [tareas, setTareas] = useState(tareasLocalStorage);

  //func useEffect-c/q cambia el montage se ejecuta-si necesito ejecutar un codigo en montage y en act de todos los estados
  useEffect(() => {
    console.log("aqui deberia guardar en el local Storage");
    //si slo lo quiero usar en montaje seria: "},[])" -
    //tambien se puede aclarar para que estado me interesa actualizarlo: "},[nombreState])"
    localStorage.setItem("listaTareas", JSON.stringify(tareas));
  }, [tareas]);
  //func que maneja ele vento submit
  const handleSubmit = (e) => {
    //console.log("desde el evento submit");
    e.preventDefault();
    //tareas.push(asd); no se puede modificar directamente xloq buscamos una alternativa
    setTareas([...tareas, tarea]);
    //limpiar el formulario- solo 1 elem
    setTarea("");
  };
  //creo la func borrar tarea desde el padre porq no puedo enviar info desde el hijo al padre
  const borrarTarea = (nombreTarea) => {
    //siempre verificar los metodos mutables o inmutables para que no modifiquen mi obj, por ej ahora el array
    const copiaTareas = tareas.filter((tarea) => tarea !== nombreTarea);
    setTareas(copiaTareas);
  };
  return (
    <section>
      {/*llamada ala func handleSubmit para guardar los cambio por el evento submit */}
      <Form onSubmit={handleSubmit}>
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
            onChange={(e) =>
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
        {/*envio de props: <ListaTareas tareas={tarea}/>: izq: nombProps={valorqguardo}*/}
      </Form>
      {/*tareas={tareas}: declaracion del prosp a enviar al hijo */}
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea} />
    </section>
  );
};

export default FormularioTareas;
