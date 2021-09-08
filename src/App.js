import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <HashRouter basename="">
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/about" component={About} />
          { /* Catch all routes */ }
          <Route path="*" component={NotFound} status={404} />
        </Switch>
    </HashRouter>
  );
};

export default App;