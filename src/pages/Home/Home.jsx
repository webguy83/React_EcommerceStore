import React from 'react';

import styled from 'styled-components';

import ShopMenu from '../../components/ShopMenu/ShopMenu';

// css
const HomeContainer = styled.div`
    max-width: 128rem;
    margin: 2rem auto 0;
`

// jsx
const Home = () => {
    return (
        <HomeContainer>
            <ShopMenu />
        </HomeContainer>
    );
};

export default Home;
