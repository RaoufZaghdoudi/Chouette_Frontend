import React from 'react';
import PublicationListView from './Views/PublicationListView';
import LoginView from './Components/Login/LoginView';
import {Switch, Route} from 'react-router-dom';
import SearchAppBar from './Components/Navbar';

const App = () => {
  return (
      <div >
      <Switch>
          <Route exact path="/" component={PublicationListView} />
          <Route path="/login" component={LoginView} />
      </Switch>
      </div>
  );
}

export default App;
