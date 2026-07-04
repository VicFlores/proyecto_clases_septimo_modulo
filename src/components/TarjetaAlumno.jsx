function TarjetaAlumno({ nombre, grado, seccion }) {
  return (
    <div>
      <h2>Nombre: {nombre}</h2>
      <p>
        Grado: {grado} / Seccion: {seccion}
      </p>
    </div>
  );
}

export default TarjetaAlumno;
