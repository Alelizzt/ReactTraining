import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
export const RegisterScreen = () => {
    const [formValues, handleInputChange] = useForm({
        name: "alex",
        email: "alex@gmail.com",
        password: "123456",
        password2: "123456",
    });

    const { name, email, password, password2 } = formValues;
    const handleRegister = (e) => {
        e.preventDefault();
        if (isValidForm()) {
            console.log("chingawhat");
        }
    };

    const isValidForm = () => {
        if (name.trim().length === 0) {
            console.log("Name is required");
            return false;
        } else if (!validator.isEmail(email)) {
            console.log("Email isn't valid");
            return false;
        } else if (password !== password2 && password.length < 5) {
            console.log(
                "Password should be at least 6 characters and match each other"
            );
            return false;
        }

        return true;
    };
    return (
        <>
            <h3 className="auth__tittle">Register</h3>
            <form onSubmit={handleRegister}>
                <div className="auth__alert-error">Hola bb</div>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    className="auth__input"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
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
