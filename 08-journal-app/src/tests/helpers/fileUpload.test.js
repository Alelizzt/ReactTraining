import "core-js";
import cloudinary from "cloudinary";
import { fileUpload } from "./../../helpers/fileUpload";

cloudinary.config({
    cloud_name: "dwswmmtt4",
    api_key: "292412878912727",
    api_secret: "LD4J8gH8ikxyWhFmPTbJP542Zes",
    secure: true,
});

describe("Pruebas en fileUpload", () => {
    test("debe de cargar un archivo y retornar el URL", async () => {
        const resp = await fetch(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/425px-Pac-Man_Cutscene.svg.png"
        );

        const blob = await resp.blob();
        const file = new File([blob], "imagen.png");
        const url = await fileUpload(file);

        expect(typeof url).toBe("string");
        //Borrar imagen por ID
        const segments = url.split("/");
        const imageId = segments[segments.length - 1].replace(".png", "");

        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            //done();
        });
    });

    test("debe de retornar un error", async () => {
        const file = new File([], "imagen.png");
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});
