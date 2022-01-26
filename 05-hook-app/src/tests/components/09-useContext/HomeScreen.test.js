import React from "react";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import { HomeScreen } from "./../../../components/09-useContext/HomeScreen";
describe("Pruebas en <HomeScreen />", () => {
    const user = {
        name: "Alex",
        email: "alex@gmail.com",
    };
    const wrapper = mount(
        <UserContext.Provider
            value={{
                user,
            }}
        >
            <HomeScreen />
        </UserContext.Provider>
    );
    test("Debe mostrarse correctamente", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
