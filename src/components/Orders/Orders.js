import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest);
        removeFromDb(product.id);
    }
    return (
        <div className="review-container">
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem product={product} handleRemoveProduct={handleRemoveProduct} key={product.id}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><h3>hello from order</h3></Cart>
            </div>
        </div>
    );
};

export default Orders;
