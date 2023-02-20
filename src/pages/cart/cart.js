import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmout = getTotalCartAmount();
    const navigate = useNavigate();

    return (
        <div className="cart">
            <div>
                <h1>Your cart items</h1>
            </div>
            <div className="cart__cart">
                {
                    PRODUCTS && PRODUCTS.length > 0 &&
                    PRODUCTS.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem data={product} />
                        }
                    })}
            </div>
            {totalAmout > 0 ? (
                <div className="cart__checkout">
                    <p>Subtotal: ${totalAmout}</p>
                    <button onClick={() => navigate("/")}>
                        Continue Shopping
                    </button>
                    <button onClick={() => {
                        checkout();
                        navigate("/checkout");
                    }}>
                        Checkout
                    </button>
                </div>
            ) : (
                <h1>Your shopping cart is empty</h1>
            )}
        </div>
    );
};
