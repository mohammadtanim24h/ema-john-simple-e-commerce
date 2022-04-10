import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [error, setError] = useState("");
    const handleNameBlur = (event) => {
        setName(event.target.value);
    };

    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    };
    const handleShipping = (event) => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    };

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleShipping}>
                    <div className="input-group-custom">
                        <label htmlFor="name">Name</label>
                        <input
                            onBlur={handleNameBlur}
                            type="text"
                            name="name"
                            id="name"
                            required
                        />
                    </div>
                    <div className="input-group-custom">
                        <label htmlFor="email">Email</label>
                        <input
                            value={user && user.email}
                            readOnly
                            type="email"
                            name="email"
                            id="email"
                            required
                        />
                    </div>
                    <div className="input-group-custom">
                        <label htmlFor="address">Address</label>
                        <input
                            onBlur={handleAddressBlur}
                            type="text"
                            name="address"
                            id="address"
                            required
                        />
                    </div>
                    <div className="input-group-custom">
                        <label htmlFor="Phone">Phone</label>
                        <input
                            onBlur={handlePhoneBlur}
                            type="Number"
                            name="Phone"
                            id="Phone"
                            required
                        />
                    </div>
                    <p className="text-center text-danger">{error}</p>
                    <p className="text-center text-danger"></p>
                    <div className="text-center m-3">
                        <input
                            className="submit-btn"
                            type="submit"
                            value="Ship"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Shipment;
