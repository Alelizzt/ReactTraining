import React from "react";
import PropTypes from "prop-types";

export const GifGridIdem = ({ title, url }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

GifGridIdem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};
