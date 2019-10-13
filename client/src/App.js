import React, { useContext } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInRegistration from './pages/SignInRegistration';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
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

const App = () => {
  const { currentUser, userStatus, registerUserStatus } = useContext(UserContext);

  return (
    <Container>
      {userStatus && registerUserStatus ?
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/signinregistration" render={() => currentUser ? <Redirect to="/" /> : <SignInRegistration />} />
          </Switch>
        </>
        :
        <Spinner />
      }
    </Container>
  );
}

export default App;