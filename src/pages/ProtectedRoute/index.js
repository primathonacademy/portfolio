import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorageData, USER_DATA } from '../../services/storage';

const ProtectedRoute = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getStorageData(USER_DATA);
    console.log('Protected: ', user);
    // .......................
    if (props.isPublicRoute) {
      if (!!user) {
        navigate('/');
      }
    } else {
      if (!user) {
        navigate('/login');
      }
    }
  }, []);

  return props.children;
};

export default ProtectedRoute;
