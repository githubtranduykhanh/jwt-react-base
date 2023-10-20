import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';

import NavUser from './layouts/NavUser';
import { Fragment } from 'react';
import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';
import IsPrivate from './Routes/PrivateRoutes/IsPrivate';

function App() {

  return (
    
    <div className='app-contaner'>
      <BrowserRouter>
        
        <PublicRoutes/>
        <PrivateRoutes/>
       
        
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
