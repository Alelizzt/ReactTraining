import React, { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {
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
        //SetImg
    };

    return (
        <div>
            <h3> {category}</h3>
        </div>
    );
};
