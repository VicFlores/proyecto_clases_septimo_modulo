import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import { Encabezado } from './components/Encabezado';
import { ListaAlumnos } from './components/ListaAlumnos';
import './App.css';

function App() {
  const nombreEstudiante = 'Vic Flores';
  const horaActual = new Date().getHours();

  return (
    <>
      <Encabezado usuarioActivo={'Vic Flores'} />

      <ListaAlumnos />
    </>
  );
}

export default App;
