
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/SignIn" component ={SignIn}/>
      <Route exact path="/SignUp" component ={SignUp}/>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
