import React from "react";
import PropTypes from "prop-types";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    return (
        <li key={todo.id} className="list-group-item">
            <p
                className={`${todo.done && "complete"}`}
                onClick={() => handleToggle(todo.id)}
            >
                {index + 1}. {todo.desc}
            </p>
            <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    );
};
TodoListItem.propTypes = {
    todo: PropTypes.array,
    index: PropTypes.number,
    handleDelete: PropTypes.func,
    handleToggle: PropTypes.func,
};
