import React, { useState } from 'react';
import ShopItem from '../ShopItem/ShopItem';

import './ShopMenu.scss';

import MalaysiaImg from './Assets/malaysia_cover.jpg';
import ThailandImg from './Assets/thailand_cover.jpg';
import SouthKoreaImg from './Assets/korea_cover.jpg';
import ChinaImg from './Assets/china_cover.jpg';
import IndiaImg from './Assets/india_cover.jpg';

export default () => {

    const [shopItems, setShopItems] = useState([{
        id: 1,
        title: "Malaysia",
        image: MalaysiaImg,
        size: "small"
    },
    {
        id: 2,
        title: "Thailand",
        image: ThailandImg,
        size: "small"
    },
    {
        id: 3,
        title: "South Korea",
        image: SouthKoreaImg,
        size: "small"
    },
    {
        id: 4,
        title: "China",
        image: ChinaImg,
        size: "big"
    },
    {
        id: 5,
        title: "India",
        image: IndiaImg,
        size: "small"
    }])

    return (
        <div className="shop-menu">
            {shopItems.map(({ id, title, image, size }) => {
                return <ShopItem key={id} title={title} image={image} size={size} />
            })}
        </div>
    );
};