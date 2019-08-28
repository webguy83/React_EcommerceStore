import React from 'react';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignUpRegistration from './pages/SignUpRegistration/SignUpRegistration';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

const CountryPage = (props) => {
  return (
    <h1>{props.match.params.country}</h1>
  )
}

export default () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signup" component={SignUpRegistration} />
        <Route path="/:country" component={CountryPage} />
      </Switch>
    </div>
  );
}