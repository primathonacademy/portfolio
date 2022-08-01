import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = (props) => {
  if (!props.isAllowed) {
    return <Navigate to={props.redirectPath} replace />;
  }

  return props.children ? props.children : <Outlet />;
};

export default ProtectedRoute;
