import React, { useEffect } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInRegistration from './pages/SignInRegistration';
import Checkout from './pages/Checkout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { selectAllCollections } from './store/selectors'
import { connect } from 'react-redux';
import { selectCurrentUser } from './store/selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './store/actions/user';
import styled from 'styled-components/macro';

// css
const Container = styled.div`
    max-width: 118rem;
    margin: 0 auto;
`
// jsx

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signinregistration" render={() => currentUser ? <Redirect to="/" /> : <SignInRegistration />} />
      </Switch>
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collections: selectAllCollections
})

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => {
      dispatch(checkUserSession())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);