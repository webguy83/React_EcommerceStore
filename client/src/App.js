import React, { useContext, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import styled from 'styled-components/macro';
import { UserContext } from './contexts/user';
import Spinner from './components/UI/Spinner';

// css
const Container = styled.div`
    max-width: 118rem;
    margin: 0 auto;
`
// jsx

const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import('./pages/Checkout'));
const SignInRegistration = lazy(() => import('./pages/SignInRegistration'));
const Shop = lazy(() => import('./pages/Shop'));
const Contact = lazy(() => import('./pages/Contact'));

const App = () => {
  const { currentUser, userStatus, registerUserStatus } = useContext(UserContext);
  return (
    <Container>
      {userStatus && registerUserStatus ?
        <>
          <Header />
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/shop" component={Shop} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/signinregistration" render={() => currentUser ? <Redirect to="/" /> : <SignInRegistration />} />
            </Switch>
          </Suspense>
        </>
        :
        <Spinner />
      }
    </Container>
  );
}

export default App;