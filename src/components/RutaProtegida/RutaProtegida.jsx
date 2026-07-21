import { Navigate } from 'react-router-dom';
import { Encabezado } from '../../components/Encabezado/Encabezado';

export const RutaProtegida = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to='/login' replace />;
  }

  return (
    <>
      <Encabezado />

      {children}
    </>
  );
};
