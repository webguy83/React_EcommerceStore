import React, { useEffect } from 'react';
import Home from './pages/Home';
import Shop from './pages/Shop';
import SignInRegistration from './pages/SignInRegistration';
import Checkout from './pages/Checkout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { auth, createUserDoc } from './helpers/firebase';
import { setCurrentUser } from './store/actions/user';
import { connect } from 'react-redux';
import { selectCurrentUser } from './store/selectors';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components/macro';

// css
const Container = styled.div`
    max-width: 118rem;
    margin: 0 auto;
`

// jsx

const App = ({ setCurrentUser, currentUser }) => {
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