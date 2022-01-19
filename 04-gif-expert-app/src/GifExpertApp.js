import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
    const categories = ["One Punch", "Danmachi", "Dragon Maid"];
    // const [categories, setCategories] = useState([
    //     "One Punch",
    //     "Danmachi",
    //     "Dragon Maid",
    // ]);

    // const handleAdd = () => {
    //     //setCategories(["YuGioH", ...categories]);
    //     setCategories((cats) => [...categories, "YuGioH"]);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr />
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>;
                })}
            </ol>
        </>
    );
};

export default GifExpertApp;
