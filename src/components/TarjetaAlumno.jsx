import { useState } from 'react';

export const TarjetaAlumno = ({ nombre, grado, seccion }) => {
  const [matriculaActiva, setMatriculaActiva] = useState(true);

  const toggleMatricula = () => setMatriculaActiva((prevState) => !prevState);

  return (
    <div>
      <h2>Nombre: {nombre}</h2>

      <p>
        Grado: {grado} / Seccion: {seccion}
      </p>

      <p>Estado de matricula: {matriculaActiva ? 'Activa' : 'Inactiva'}</p>

      <button onClick={toggleMatricula}>
        {matriculaActiva ? 'Desactivar matricula' : 'Activar matricula'}
      </button>
    </div>
  );
};
