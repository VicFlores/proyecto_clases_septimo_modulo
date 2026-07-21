import { useNavigate } from 'react-router-dom';

export const Encabezado = () => {
  const navigate = useNavigate();
  const usuarioGuardado = localStorage.getItem('usuario');
  const usuario = usuarioGuardado ? JSON.parse(usuarioGuardado) : null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    navigate('/login');
  };

  return (
    <header>
      <h1>Colegio San Marcos - Sistema de Gestion</h1>

      <p>Usuario activo: {usuario.nombre}</p>

      <button onClick={handleLogout}>Cerrar Sesion</button>
    </header>
  );
};
