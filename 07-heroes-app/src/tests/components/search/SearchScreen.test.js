import "@testing-library/jest-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("Pruebas en <SearchScreen />", () => {
    test("debe de mostrarse correctamente con valores por defecto", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".alert-info").text().trim()).toBe(
            "Search for a hero"
        );
    });

    test("debe de mostrar a Batman y el input con el valor del queryString", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper.find("input").prop("value")).toBe("batman");
    });

    test("debe de mostrar un error si no se encuentra el heroe", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=mariobros"]}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper.find(".alert-danger").text().trim()).toBe(
            `No results for mariobros`
        );
    });

    test("debe de llamar el navigate a la nueva pantalla", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchScreen />
            </MemoryRouter>
        );

        wrapper.find("input").simulate("change", {
            target: {
                name: "searchText",
                value: "Batman",
            },
        });

        wrapper.find("form").prop("onSubmit")({
            preventDefault: () => {},
        });

        expect(mockNavigate).toHaveBeenCalledWith("?q=Batman");
    });
});
