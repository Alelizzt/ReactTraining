import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNotes } from "../../actions/notes";

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);
    const handleSave = () => {
        dispatch(startSaveNotes(active));
    };
    return (
        <div className="notes__appbar">
            <span> August 18th 2022</span>
            <div>
                <button className="btn-primary">Picture</button>
                <button className="btn-primary" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};
