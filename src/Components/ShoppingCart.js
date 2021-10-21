import React, { createContext } from "react";

import { PRODUCTS } from "../API/Products";

const JBR = createContext();

function ShoppingCart(props) {
    const idProducts = PRODUCTS.Lacteos.concat(PRODUCTS.Carnicos)
        .concat(PRODUCTS.Otros)

        .map((e) => (e = e.id));
    let initialStateCart = {};
    for (let i of idProducts) {
        initialStateCart[i] = 0;
    }

    const [cart, setCart] = React.useState(initialStateCart);

    const increase = (e) => {
        setCart({
            ...cart,
            [e.target.dataset.product]: cart[e.target.dataset.product] + 1,
        });
    };

    const decrease = (e) => {
        if (cart[e.target.dataset.product] > 0) {
            setCart({
                ...cart,
                [e.target.dataset.product]: cart[e.target.dataset.product] - 1,
            });
        }
    };

    return (
        <JBR.Provider value={{ PRODUCTS, cart, increase, decrease }}>
            {props.children}
        </JBR.Provider>
    );
}

export { ShoppingCart, JBR };
