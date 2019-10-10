import React from 'react';
import styled from 'styled-components/macro';
import ShopItem from '../ShopItem';

import malaysiaImg from "./Assets/malaysia_cover.jpg";
import thailandImg from "./Assets/thailand_cover.jpg";
import southkoreaImg from "./Assets/southkorea_cover.jpg";
import chinaImg from "./Assets/china_cover.jpg";
import indiaImg from "./Assets/india_cover.jpg";

const ShopMenuContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-auto-rows: calc(47vh - 4.7rem);
    grid-gap: 3rem;
    grid-auto-flow: dense;
`

const sections = [{
    id: 1,
    title: "Malaysia",
    image: malaysiaImg,
    size: "small"
},
{
    id: 2,
    title: "Thailand",
    image: thailandImg,
    size: "small"
},
{
    id: 3,
    title: "South Korea",
    image: southkoreaImg,
    size: "small"
},
{
    id: 4,
    title: "China",
    image: chinaImg,
    size: "big"
},
{
    id: 5,
    title: "India",
    image: indiaImg,
    size: "small"
}]

const ShopMenu = () => {
    return (
        <ShopMenuContainer>
            {sections.map(({ id, title, image, size }) => {
                return <ShopItem key={id} title={title} image={image} size={size} />
            })}
        </ShopMenuContainer>
    );
};

export default ShopMenu;