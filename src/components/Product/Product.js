import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const { name, img, seller, price, ratings } = product;
    return (
        <div className="product">
            <Card className="product-card" style={{ width: "18rem" }}>
                <Image fluid variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className="details">Price: ${price}</Card.Text>
                    <Card.Text className="details">Manufacturer: {seller}</Card.Text>
                    <Card.Text className="details">Rating: {ratings}</Card.Text>
                    <button onClick={() => handleAddToCart(product)} className="btn-cart">Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;
