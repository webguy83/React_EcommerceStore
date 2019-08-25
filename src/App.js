import React from 'react';
import Home from './pages/Home';

import { Route, Switch } from 'react-router-dom';

const CountryPage = (props) => {
  return (
    <h1>{props.match.params.country}</h1>
  )
}

export default () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:country" component={CountryPage} />
      </Switch>
    </div>
  );
}