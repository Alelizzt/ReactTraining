// const state = {
//     name: "Alex",
//     logged: true,
// }

import { types } from "../types/types";

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types:
            return {
                ...action.payload,
                logged: true,
            };
        case types.logout:
            return {
                logged: false,
            };
        default:
            return state;
    }
};
