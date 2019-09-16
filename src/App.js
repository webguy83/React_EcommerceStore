import React, { useEffect } from 'react';
import { container } from './App.module.scss';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignInRegistration from './pages/SignInRegistration/SignInRegistration';
import Checkout from './pages/Checkout/Checkout';

import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';

import { auth, createUserDoc } from './helpers/firebase';

import { setCurrentUser } from './store/actions/user';
import { connect } from 'react-redux';

import { selectCurrentUser } from './store/selectors';
import { createStructuredSelector } from 'reselect';

const App = ({ setCurrentUser, currentUser }) => {
  console.log(container)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        })
      }

      setCurrentUser(userAuth);
    });
    return () => {
      unsubscribe();
    }
  }, [setCurrentUser]);

  return (
    <div className={container}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/signinregistration" render={() => currentUser ? <Redirect to="/" /> : <SignInRegistration />} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);