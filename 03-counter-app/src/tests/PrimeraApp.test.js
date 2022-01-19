import { render } from "@testing-library/react";
import React from "react";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp />", () => {
    test('debe de mostrar el mensaje " Hola Peter', () => {
        const saludo = "Hola Peter!";
        const { getByText } = render(<PrimeraApp saludo={saludo} />);
        expect(getByText(saludo)).toBeInTheDocument();
    });
});
