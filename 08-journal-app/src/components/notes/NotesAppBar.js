import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNotes } from "../../actions/notes";
import { startUploading } from "./../../actions/notes";

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const { active } = useSelector((state) => state.notes);
    const handleSave = () => {
        dispatch(startSaveNotes(active));
    };
    const handlePictureClick = () => {
        document.querySelector("#fileSelector").click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            dispatch(startUploading(file));
        }
    };
    return (
        <div className="notes__appbar">
            <span> August 18th 2022</span>

            <input
                id="fileSelector"
                type="file"
                name="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            <div>
                <button className="btn-primary" onClick={handlePictureClick}>
                    Picture
                </button>
                <button className="btn-primary" onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    );
};
