import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGridIdem } from "../../components/GifGridIdem";

describe("Pruebas en <GifGridItem />", () => {
    let wrapper = shallow(<GifGridIdem />);
    beforeEach(() => {
        wrapper = shallow(<GifGridIdem />);
    });
    test("debe mostrar <GifGridItem /> correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
