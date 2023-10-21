import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  BrowserRouter,
  
} from "react-router-dom";

import PublicRoutes from './Routes/PublicRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';


function App() {

  return (
    
    <div className='app-contaner'>
      <BrowserRouter>
        <PrivateRoutes/> 
        <PublicRoutes/>
        
       
        
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
