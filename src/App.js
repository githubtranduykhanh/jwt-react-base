import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './components/Navigation';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';

function App() {
  return (
    
    <div className='app-contaner'>
      
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            404 Not Found
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
