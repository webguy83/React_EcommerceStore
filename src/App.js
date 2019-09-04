import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignInRegistration from './pages/SignInRegistration/SignInRegistration';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

import { auth, createUserDoc } from './helpers/firebase';

import { setCurrentUser } from './store/actions/user';
import { connect } from 'react-redux';

// const CountryPage = (props) => {
//   return (
//     <h1>{props.match.params.country}</h1>
//   )
// }

const App = ({ setCurrentUser }) => {

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
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signinregistration" component={SignInRegistration} />
        {/* <Route path="/:country" component={CountryPage} /> */}
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => {
       dispatch(setCurrentUser(user));
    }
  }
}

export default connect(null, mapDispatchToProps)(App);