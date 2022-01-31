import React from "react";
import { Link } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__tittle">Register</h3>
            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                />
                <button className="btn btn-primary mb-5" type="submit">
                    Register
                </button>

                <Link to={"/auth/login"} className="link">
                    Already registered?
                </Link>
            </form>
        </>
    );
};
