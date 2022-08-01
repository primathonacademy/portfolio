import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from '../ProtectedRoute';
import Homepage from '../Homepage';
import Signup from '../Signup';
import Login from '../Login';

import { getStorageData, USER_DATA } from '../../services/storage';

const App = () => {
  const isAlreadyLogin = !!getStorageData(USER_DATA);

  return (
    <Router>
      <Routes>
        <Route
          path='login'
          element={
            // <ProtectedRoute redirectPath='/' isAllowed={!isAlreadyLogin}>
            <Login />
            // </ProtectedRoute>
          }
        />

        <Route
          path='signup'
          element={
            // <ProtectedRoute redirectPath='/' isAllowed={!isAlreadyLogin}>
            <Signup />
            // </ProtectedRoute>
          }
        />

        <Route
          index
          element={
            // <ProtectedRoute redirectPath='/login' isAllowed={isAlreadyLogin}>
            <Homepage />
            // </ProtectedRoute>
          }
        />

        <Route path='*' element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </Router>
  );
};

export default App;
