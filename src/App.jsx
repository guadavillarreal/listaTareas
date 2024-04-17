import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import FormularioTareas from './components/FormularioTareas';
import { Container } from 'react-bootstrap';

function App() {

  return (
    <Container className='my-4'>
      <h1 className='text-center display-3'>Lista de Tareas</h1>
      <FormularioTareas/>
    </Container>
  )
}

export default App
