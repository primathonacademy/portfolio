import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from '../Homepage';
import Signup from '../Signup';
import Login from '../Login';
import ResetPassword from '../ResetPassword';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />

          <Route path='signup' element={<Signup />} />

          <Route path='login' element={<Login />} />

          <Route path='reset-password' element={<ResetPassword />} />

          <Route path='hello' element={<h2>Hi - Hello </h2>} />

          <Route path='*' element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
};

export default App;
