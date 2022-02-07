import React, { useEffect, useRef } from "react";
import { NotesAppBar } from "./NotesAppBar";
import { useSelector } from "react-redux";
import { useForm } from "./../../hooks/useForm";

export const NoteScreen = () => {
    const { active: note } = useSelector((state) => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);

    const { body, title } = formValues;

    const activeId = useRef(note.id); //Guarda la referencia de la nota a re dibujar
    useEffect(() => {
        if (note.id !== activeId.current) {
            reset(note);
            activeId.current = note.id; //Actualiza la referencia
        }
    }, [note, reset]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {note.url && (
                    <div className="notes__image">
                        <img
                            src="https://naigate.com/properties/wp-content/uploads/2020/12/Land-for-Sale-NaiGate.jpg"
                            alt="land"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
