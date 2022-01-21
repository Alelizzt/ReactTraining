import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGridIdem } from "../../components/GifGridIdem";

describe("Pruebas en <GifGridItem />", () => {
    const url = "https://localhost/something.jpg";
    const title = "Un titulo";

    const wrapper = shallow(<GifGridIdem url={url} title={title} />);

    test("debe mostrar <GifGridItem /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("debe tener la imagen igual al url y alt de los props", () => {
        const img = wrapper.find("img");
        //console.log(img.html);
        //console.log(img.props);
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
    });

    test("debe de tener un párrafo con el titulo", () => {
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);
    });

    test("debe de tener animate__fadeIn", () => {
        const div = wrapper.find("div");
        const className = div.prop("className");

        expect(className.includes("animate__fadeIn")).toBe(true);
    });
});
