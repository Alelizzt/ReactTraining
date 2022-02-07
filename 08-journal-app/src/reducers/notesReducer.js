/*
    {
        notes: [],
        active: null,
        active: {
            id: "1231b1j12n",
            title : "",
            body: "",
            imageUrl: "",
            date: 1234501
        }
    }
*/

const initialState = {
    notes: [],
    active: null,
};

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
