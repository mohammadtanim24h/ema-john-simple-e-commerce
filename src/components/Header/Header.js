import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className="header">
            <img src={logo} alt="" />
            <ul>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/orders">Orders</Link>
                </li>
                <li>
                    <Link to="/inventory">Inventory</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                {user ? (
                    <button
                        className="btn btn-outline-light"
                        onClick={() =>
                            signOut(auth).then(() =>
                                console.log("Sign-out successful")
                            )
                        }
                    >
                        Log Out
                    </button>
                ) : (
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Header;
