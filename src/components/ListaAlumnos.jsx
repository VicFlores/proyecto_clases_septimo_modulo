import { useState } from 'react';
import { TarjetaAlumno } from './TarjetaAlumno';

export const ListaAlumnos = () => {
  const [busqueda, setBusqueda] = useState('');
  const [gradoFiltro, setGradoFiltro] = useState('Todos');

  const alumnos = [
    { id: 1, nombre: 'María Fernández', grado: '9°', seccion: 'A' },
    { id: 2, nombre: 'Carlos Hernández', grado: '8°', seccion: 'B' },
    { id: 3, nombre: 'Ana López', grado: '9°', seccion: 'A' },
  ];

  const alumnosFiltrados = alumnos.filter((alumno) => {
    const coincideNombre = alumno.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideGrado =
      gradoFiltro === 'Todos' || alumno.grado === gradoFiltro;

    return coincideNombre && coincideGrado;
  });

  return (
    <div>
      <input
        type='text'
        placeholder='Buscar alumno por nombre...'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <select
        value={gradoFiltro}
        onChange={(e) => setGradoFiltro(e.target.value)}
      >
        <option value='Todos'>Todos los grados</option>
        <option value='7°'>7° grado</option>
        <option value='8°'>8° grado</option>
        <option value='9°'>9° grado</option>
      </select>

      <p>
        Mostrando: {alumnosFiltrados.length} alumnos de {alumnos.length}
      </p>

      {alumnosFiltrados.map((alumno) => (
        <TarjetaAlumno
          key={alumno.id}
          nombre={alumno.nombre}
          grado={alumno.grado}
          seccion={alumno.seccion}
        />
      ))}
    </div>
  );
};
