import React from 'react';
import './Home.scss';

import ShopMenu from '../../components/ShopMenu/ShopMenu';

const Home = (props) => {
    return (
        <div className="home">
            <ShopMenu />
        </div>
    );
};

export default Home;
