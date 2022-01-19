export const getGifs = async (category) => {
    const apiKey = "h1749A5kBlb9kO8jerkATHG63RNkZvNz";
    const resp = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
            category
        )}&limit=10&api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        };
    });
    return gifs;
};
