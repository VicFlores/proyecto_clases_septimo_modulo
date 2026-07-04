import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import heroImg from './assets/hero.png';
import Encabezado from './components/Encabezado';
import TarjetaAlumno from './components/TarjetaAlumno';
import './App.css';

function App() {
  const nombreEstudiante = 'Vic Flores';
  const horaActual = new Date().getHours();

  const alumnos = [
    { id: 1, nombre: 'María Fernández', grado: '9°', seccion: 'A' },
    { id: 2, nombre: 'Carlos Hernández', grado: '8°', seccion: 'B' },
    { id: 3, nombre: 'Ana López', grado: '9°', seccion: 'A' },
  ];

  return (
    <div>
      <Encabezado />
    </div>
  );
}

export default App;
