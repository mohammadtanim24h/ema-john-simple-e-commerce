import React, { useState } from "react";
import { Link } from "react-router-dom";

const Shipment = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    // const navigate = useNavigate();
    const handleNameBlur = (event) => {
        setName(event.target.value);
    };

    const handleAddressBlur = (event) => {
        setAddress(event.target.value);
    };

    const handleCityBlur = (event) => {
        setCity(event.target.value);
    };
    const handleShipping = (event) => {
        event.preventDefault();
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
                        <label htmlFor="city">
                            City
                        </label>
                        <input
                            onBlur={handleCityBlur}
                            type="text"
                            name="city"
                            id="city"
                            required
                        />
                    </div>
                    <p className="text-center text-danger">{error}</p>
                    <p className="text-center text-danger">
                    </p>
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
