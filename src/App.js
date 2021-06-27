import history from './services/history';
import { Router, Route, Switch, Redirect } from "react-router-dom";

import {
  HomePage, 
  NotFoundPage, 
  ViewItemsPage, 
  CreateItemPage,
} from './navigation';


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path='/' component={HomePage}/>
        <Route exact={true} path='/home' component={HomePage}/>
        <Route exact={true} path='/view' component={ViewItemsPage}/>
        <Route exact={true} path='/create' component={CreateItemPage}/>
        <Route exact={true} path='/404' component={NotFoundPage}/>
        <Redirect to='/404'/>
      </Switch>
    </Router>
  );
}

export default App;
 