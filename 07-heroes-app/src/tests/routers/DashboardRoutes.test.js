import "@testing-library/jest-dom";
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <DashboardRoutes />", () => {
    const contextValue = {
        user: {
            logged: true,
            name: "Lorena",
        },
    };

    test("debe de mostrarse correctamente - Marvel", () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/"]}>
                    <DashboardRoutes />;
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".text-info").text().trim()).toBe("Lorena");
        expect(wrapper.find("h1").text().trim()).toBe("MarvelScreen");
    });

    test("debe de mostrarse correctamente - DC", () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/dc"]}>
                    <DashboardRoutes />;
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("h1").text().trim()).toBe("DC Screen");
    });
});
