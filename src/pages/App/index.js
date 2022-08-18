import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Homepage from '../Homepage';
import Signup from '../Signup';
import Login from '../Login';
import ResetPassword from '../ResetPassword';
import ProtectedRoute from '../ProtectedRoute';
import About from '../About';
import OurWork from '../OurWork';
import OurBlog from '../OurBlog';
import Clients from '../Clients';
import ContactUs from '../ContactUs';
import BlogDetails from '../BlogDetails';
import Animation from '../Animation';

import A from '../A';
import B from '../B';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route
            path='signup'
            element={
              <ProtectedRoute isPublicRoute={true}>
                <Signup />
              </ProtectedRoute>
            }
          />

          <Route
            path='login'
            element={
              <ProtectedRoute isPublicRoute={true}>
                <Login />
              </ProtectedRoute>
            }
          />

          <Route
            path='reset-password'
            element={
              <ProtectedRoute isPublicRoute={true}>
                <ResetPassword />
              </ProtectedRoute>
            }
          />

          {/* Protected Route */}

          <Route
            path='/'
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
              // <A
              //   propName1='PropsValue1'
              //   propName2='PropsValue2'
              //   propName3='PropsValue3'
              //   propName4='PropsValue4'
              //   propName5='PropsValue5'
              //   iAmEvent1={() => {
              //     console.log('I am event 1');
              //   }}
              // >
              //   {/* <B /> */}
              //   {/* <B />
              //   <B />
              //   <Login /> */}

              //   <div>Hi I am a div</div>
              //   <div>Hi I am a div</div>
              //   <div>Hi I am a div</div>
              //   <div>Hi I am a div</div>
              //   <div>Hi I am a div</div>
              //   <div>Hi I am a div</div>
              // </A>
            }
          />

          <Route
            path='about'
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />

          <Route
            path='our-work'
            element={
              <ProtectedRoute>
                <OurWork />
              </ProtectedRoute>
            }
          />

          <Route
            path='clients'
            element={
              <ProtectedRoute>
                <Clients />
              </ProtectedRoute>
            }
          />

          {/* 
            our-blog/a
            our-blog/blog
            our-blog/asdfgh 
          */}

          <Route
            path='our-blog/animation'
            element={
              <ProtectedRoute>
                <Animation />
              </ProtectedRoute>
            }
          />

          <Route
            path='our-blog/:blogId'
            element={
              <ProtectedRoute>
                <BlogDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path='our-blog'
            element={
              <ProtectedRoute>
                <OurBlog />
              </ProtectedRoute>
            }
          />

          <Route
            path='contact-us'
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />

          <Route path='*' element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
};

export default App;
