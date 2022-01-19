import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
    // test('debe de mostrar el mensaje " Hola Peter', () => {
    //     const saludo = "Hola Peter!";
    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test("debe de mostrar <PrimeraApp /> correctamente", () => {
        const saludo = "Hola Peter";
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });
});
