import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTareas from "./components/FormularioTareas";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    {/*mainPageclase: que creo para poder bajar el footer*/}
      <Container className="my-4 mainPage">
        <h1 className="text-center display-3">Lista de Tareas</h1>
        <FormularioTareas />
      </Container>
      <Footer></Footer>
      {/*agregarle estilo lo que sea necesario para bajar el footer  */}
    </>
  );
}

export default App;
