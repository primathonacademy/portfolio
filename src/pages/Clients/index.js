import { useNavigate } from 'react-router-dom';

import { removeStorageData, USER_DATA } from '../../services/storage';

import Header from '../../components/Header';

const Clients = () => {
  let navigate = useNavigate();

  const onLogout = () => {
    removeStorageData(USER_DATA);
    navigate('/login');
  };

  return (
    <>
      <Header onLogout={onLogout} />
      <h1>Clients</h1>
    </>
  );
};

export default Clients;
