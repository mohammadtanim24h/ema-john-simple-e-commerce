import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Login</h2>
                <form>
                    <div className="input-group-custom">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-group-custom">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="text-center">
                        <input
                            className="submit-btn"
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
                <div className="text-center new-account">
                    <p>New to Ema-john? <Link className="form-link" to='/signup'>Create an Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
