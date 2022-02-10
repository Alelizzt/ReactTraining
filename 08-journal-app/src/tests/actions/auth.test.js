import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import "@testing-library/jest-dom";

import {
    login,
    logout,
    startLoginEmailPassword,
    startLogout,
} from "./../../actions/auth";
import { types } from "./../../types/types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

// Nuestro store
let store = mockStore(initState);

describe("Pruebas con las acciones de auth", () => {
    // Limpiar las acciones o dispatch que almacena el store
    beforeEach(() => {
        store = mockStore(initState);
    });

    test("login y logout debe de crear la acción respectiva", () => {
        const uid = "ABC123";

        const displayName = "alex";

        const loginAction = login(uid, displayName);
        const logoutAction = logout();

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName,
            },
        });

        expect(logoutAction).toEqual({
            type: types.logout,
        });
    });

    test("debe realizar el startLogout", async () => {
        await store.dispatch(startLogout());

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout,
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning,
        });
    });

    test("debe iniciar startLoginEmailPassword", async () => {
        await store.dispatch(
            startLoginEmailPassword("test@testing.com", "123456")
        );
        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: "U7xYP0RfiohDdttZNCvTgYiCDgq2",
                displayName: null,
            },
        });
    });
});
