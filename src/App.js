import React, { useState, useEffect } from 'react';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignInRegistration from './pages/SignInRegistration/SignInRegistration';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';

import { auth, createUserDoc } from './helpers/firebase';

// const CountryPage = (props) => {
//   return (
//     <h1>{props.match.params.country}</h1>
//   )
// }

export default () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        const userRef = createUserDoc(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          })      
      } else {
        setCurrentUser(userAuth)
      }
      
    });
    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="container">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/signup" component={SignInRegistration} />
        {/* <Route path="/:country" component={CountryPage} /> */}
      </Switch>
    </div>
  );
}