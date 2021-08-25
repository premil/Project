
import './App.css';
import {BrowserRouter  as Router, Switch, Route}  from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './page/Home';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact pathe='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;