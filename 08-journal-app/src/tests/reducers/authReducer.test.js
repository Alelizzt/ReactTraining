import { authReducer } from "./../../reducers/authReducer";
import { types } from "./../../types/types";
describe("Pruebas en authReducer", () => {
    test("debe de hacer login", () => {
        const initState = {};
        const action = {
            type: types.login,
            payload: { uid: "abd", displayName: "Alex" },
        };
        const state = authReducer(initState, action);

        expect(state).toEqual({ uid: "abd", name: "Alex" });
    });

    test("debe de hacer logout", () => {
        const initState = {};
        const action = {
            type: types.logout,
        };
        const state = authReducer(initState, action);

        expect(state).toEqual({});
    });
    test("no debe de hacer cambios en el state", () => {
        const initState = {};
        const action = {
            type: "idontknow",
        };
        const state = authReducer(initState, action);

        expect(state).toEqual(initState);
    });
});
