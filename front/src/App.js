
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import SignUp from './components/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/SignUp" render= {(props)=> <SignUp/>}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
