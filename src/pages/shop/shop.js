import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div className="shop__title">
                <h1>Basic Shop</h1>
            </div>

            <div className="shop__products">
                {
                    PRODUCTS && PRODUCTS.length > 0 && PRODUCTS.map(
                        (product) => (
                            <Product data={product} />
                        )
                    )
                }
            </div>
        </div>
    )
}
