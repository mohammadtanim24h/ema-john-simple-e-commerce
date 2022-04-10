import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value);
    };

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        if (user) {
            navigate("/shop");
        }
    });

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form onSubmit={handleUserSignIn}>
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
                    <p className="text-center text-danger">
                        {error && error.message}
                    </p>
                    {loading && <p>Loading.....</p>}
                    <div className="text-center">
                        <input
                            className="submit-btn"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
                <div className="text-center new-account">
                    <p>
                        New to Ema-john?{" "}
                        <Link className="form-link" to="/signup">
                            {" "}
                            Create an Account
                        </Link>
                    </p>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Login;
