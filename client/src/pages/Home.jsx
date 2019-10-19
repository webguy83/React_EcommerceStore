import React from 'react';

import styled from 'styled-components/macro';

import ShopMenu from '../components/ShopMenu/ShopMenu';

// css

const HomeHeader = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
`

const HomeContainer = styled.div`
    max-width: 128rem;
    margin: 2rem auto 0;
`

// jsx
const Home = () => {
    return (
        <HomeContainer>
            <HomeHeader>Welcome to Photos of Asia. Please shop around!</HomeHeader>
            <ShopMenu />
        </HomeContainer>
    );
};

export default Home;
