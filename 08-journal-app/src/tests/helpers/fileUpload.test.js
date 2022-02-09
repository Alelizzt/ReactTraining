import { fileUpload } from "./../../helpers/fileUpload";

describe("Pruebas en fileUpload", () => {
    test("debe de cargar un archivo y retornar el URL", async () => {
        const resp = await fetch(
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pac-Man_Cutscene.svg/425px-Pac-Man_Cutscene.svg.png"
        );

        const blob = await resp.blob();
        const file = new File([blob], "imagen.png");
        const url = await fileUpload(file);

        expect(typeof url).toBe("string");
    });

    test("debe de retornar un error", async () => {
        const file = new File([], "imagen.png");
        const url = await fileUpload(file);

        expect(url).toBe(null);
    });
});
