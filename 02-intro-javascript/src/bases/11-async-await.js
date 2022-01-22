const getImagen = async () => {
    try {
        const apiKey = "h1749A5kBlb9kO8jerkATHG63RNkZvNz";
        const resp = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }
};

getImagen();
