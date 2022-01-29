import "@testing-library/jest-dom";
import { types } from "../../types/types";
import { authReducer } from "./../../auth/authReducer";

describe("Pruebas eb authReducer", () => {
    test("debe de retornar el estado por defecto", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('debe de autenticar y colocar el "name" del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: "Alex",
            },
        };

        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            name: "Alex",
        });
    });

    test("debe de borrar el name del usuario y el logged en false", () => {
        const action = {
            type: types.logout,
        };

        const state = authReducer({ logged: true }, action);

        expect(state).toEqual({ logged: false });
    });
});
