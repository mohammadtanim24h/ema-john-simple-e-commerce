import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
    // const [products, setProducts] = useProducts();
    

    const [cart, setCart] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [activePage, setActivePage] = useState(0);
    const [size, setSize] = useState(10);

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${activePage}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [activePage, size])


    useEffect(() => {
        fetch("http://localhost:5000/productCount")
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            });
    }, []);

    

    // get local storage cart
    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find((product) => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products]);

    // handle addtocart
    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(
            (product) => product._id === selectedProduct._id
        );
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(
                (product) => product._id !== selectedProduct._id
            ); // jei product ta already ase oita chara bakigula ke nise tarpor jeita ase oitar quantity baraise. tarpor baki product er array ta ke spread kore ager product ta jug kore dise. eita kora hoise jate product ta copy na hoye jay.
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    };
    return (
        <div className="shop-container">
            <div className="product-container">
                {products.map((product) => (
                    <Product
                        product={product}
                        handleAddToCart={handleAddToCart}
                        key={product._id}
                    ></Product>
                ))}
                <div
                    className="p-3 shadow rounded pagination"
                    style={{ height: "75px" }}
                >
                    {[...Array(pageCount).keys()].map((number) => (
                        <button
                            key={number}
                            onClick={() => setActivePage(number)}
                            className={`mx-1 ${
                                activePage === number ? "selected" : ""
                            }`}
                        >
                            {number}
                        </button>
                    ))}

                    <select onChange={e => setSize(e.target.value)} className="ms-2 form-select">
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/orders">
                        <button className="review-order-btn">
                            Review Order
                            <FontAwesomeIcon
                                icon={faArrowRight}
                            ></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
