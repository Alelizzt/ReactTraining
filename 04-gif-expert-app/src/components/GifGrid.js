import React, { useState, useEffect } from "react";
import { GifGridIdem } from "./GifGridIdem";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs();
    }, []);
    const getGifs = async () => {
        const apiKey = "h1749A5kBlb9kO8jerkATHG63RNkZvNz";
        const serie = "Rick+and+Morty";
        const resp = await fetch(
            `https://api.giphy.com/v1/gifs/search?q=${serie}&limit=10&api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const gifs = data.map((img) => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            };
        });
        console.log(gifs);
        setImages(gifs);
    };

    return (
        <div>
            <h3> {category}</h3>

            {images.map((img) => (
                <GifGridIdem key={img.id} {...img} />
            ))}
        </div>
    );
};
