const initState = {
    sections: [{
        id: 1,
        title: "Malaysia",
        image: "./Assets/malaysia_cover.jpg",
        size: "small"
    },
    {
        id: 2,
        title: "Thailand",
        image: "./Assets/thailand_cover.jpg",
        size: "small"
    },
    {
        id: 3,
        title: "South Korea",
        image: "./Assets/southkorea_cover.jpg",
        size: "small"
    },
    {
        id: 4,
        title: "China",
        image: "./Assets/china_cover.jpg",
        size: "big"
    },
    {
        id: 5,
        title: "India",
        image: "./Assets/india_cover.jpg",
        size: "small"
    }]
}

export default (state = initState) => {
    return state;
}