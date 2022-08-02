import { Navigate, Outlet } from 'react-router-dom';
import { getStorageData, USER_DATA } from '../../services/storage';

const ProtectedRoute = (props) => {
  const isAlreadyLogin = !!getStorageData(USER_DATA);

  if (isAlreadyLogin && false) {
    return <Navigate to={props.redirectPath} />;
  }

  return props.children ? props.children : null;
};

export default ProtectedRoute;
