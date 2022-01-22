import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";
import "@testing-library/jest-dom";

describe("Pruebas en <GifExpertApp />", () => {
    test("debe mostrarse correctamente", () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test("debe mostrar una lista de categorías", () => {
        const categories = ["Dragon Maid"];
        const wrapper = shallow(
            <GifExpertApp defaultCategories={categories} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe(categories.length);
    });
});
