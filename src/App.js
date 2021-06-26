import history from './services/history';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import {HomePage, NotFoundPage} from './navigation';


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/404' component={NotFoundPage}/>
        <Redirect to='/404'/>
      </Switch>
    </Router>
  );
}

export default App;
