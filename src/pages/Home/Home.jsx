import React from 'react';
import { home } from './Home.module.scss';

import ShopMenu from '../../components/ShopMenu/ShopMenu';

const Home = () => {
    return (
        <div className={home}>
            <ShopMenu />
        </div>
    );
};

export default Home;
