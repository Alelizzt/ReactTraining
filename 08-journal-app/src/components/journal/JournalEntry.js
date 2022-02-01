import React from "react";

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: "cover",
                    backgroundImage:
                        "url(https://millmanland.com/wp-content/uploads/2021/01/open-field.png)",
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">A new day!</p>
                <p className="journal__entry-content">
                    Loren ipsum dolor de espalda.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    );
};
