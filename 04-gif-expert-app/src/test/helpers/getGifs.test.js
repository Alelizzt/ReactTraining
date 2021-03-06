import { getGifs } from "../../helpers/getGifs";
import "@testing-library/jest-dom";

describe("Pruebas con getGifs Fetch", () => {
    test("debe de traer 10 elementos", async () => {
        const gifs = await getGifs("Dragon Maid");

        expect(gifs.length).toBe(10);
    });

    test("debe de traer arreglo vacío", async () => {
        const gifs = await getGifs("");

        expect(gifs.length).toBe(0);
    });
});
