import malaysiaImg from "../../components/ShopMenu/Assets/malaysia_cover.jpg";
import thailandImg from "../../components/ShopMenu/Assets/thailand_cover.jpg";
import southkoreaImg from "../../components/ShopMenu/Assets/southkorea_cover.jpg";
import chinaImg from "../../components/ShopMenu/Assets/china_cover.jpg";
import indiaImg from "../../components/ShopMenu/Assets/india_cover.jpg";


const initState = {
    sections: [{
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
}

export default (state = initState) => {
    return state;
}