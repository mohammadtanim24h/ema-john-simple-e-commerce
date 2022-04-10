import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./SignUp.css";
import auth from "../../firebase.init";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user, loading, hookError] =
        useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError("Your Passwords didn't match");
            return;
        }
        if (password.length < 6) {
            setError("Password Length Must be at least 6 characters");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };
    useEffect(() => {
        if (user) {
            navigate("/");
        }
    });

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group-custom">
                        <label htmlFor="email">Email</label>
                        <input
                            onBlur={handleEmailBlur}
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="input-group-custom">
                        <label htmlFor="password">Password</label>
                        <input
                            onBlur={handlePasswordBlur}
                            type="password"
                            name="password"
                            id="password"
                            required
                        />
                    </div>
                    <div className="input-group-custom">
                        <label htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            onBlur={handleConfirmPasswordBlur}
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            required
                        />
                    </div>
                    <p className="text-center text-danger">{error}</p>
                    <p className="text-center text-danger">
                        {hookError && hookError.message}
                    </p>
                    <div className="text-center">
                        <input
                            className="submit-btn"
                            type="submit"
                            value="Sign Up"
                        />
                    </div>
                </form>
                <div className="text-center new-account">
                    <p>
                        Already have an account?
                        <Link className="form-link" to="/login">
                            {" "}
                            Login
                        </Link>
                    </p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default SignUp;
