import { todoReducer } from "../../../components/08-useReducer/todoReducer";

import { demoTodos } from "../../fixtures/demoTodos";
describe("Pruebas en todoReducer", () => {
    test("Debe de retornar el estado por defecto", () => {
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test("Debe de agregar un todo", () => {
        const newTodo = {
            id: 3,
            desc: "Aprender Express",
            done: false,
        };

        const addAction = {
            type: "add",
            payload: newTodo,
        };
        const state = todoReducer(demoTodos, addAction);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test("Debe de eliminar un todo", () => {
        const deleteAction = {
            type: "delete",
            payload: 1,
        };
        const state = todoReducer(demoTodos, deleteAction);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
    });

    test("Debe de hacer el toggle del todo", () => {
        const toggleAction = {
            type: "toggle",
            payload: 1,
        };
        const state = todoReducer(demoTodos, toggleAction);
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);
    });
});
