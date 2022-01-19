import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridIdem } from "./GifGridIdem";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category).then((imgs) => setImages(imgs));
    }, [category]);

    return (
        <>
            <h3> {category}</h3>
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridIdem key={img.id} {...img} />
                ))}
            </div>
        </>
    );
};
