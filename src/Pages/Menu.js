import React, { useContext } from "react";
import { Appclau } from "../Components/ShoppingCart";
import MenuStyle from "../Components/MenuStyle";

function Menu() {
    const { PRODUCTS, cart, increase, decrease } = useContext(Appclau);
    const [list, setList] = React.useState(PRODUCTS.Lacteos);
    const [search, setSearch] = React.useState("");
    let filteredList = PRODUCTS.lacteos;

    function clickCategories(e) {
        setList(PRODUCTS[e.target.dataset.category]);
    }

    function handleChange(e) {
        setList(
            PRODUCTS.Lacteos.concat(PRODUCTS.Carnicos).concat(PRODUCTS.Otros)
        );

        setSearch(e.target.value);
    }

    search
        ? (filteredList = list.filter((element) => {
              return `${element.name} ${element.description}`;
              /* .toLowerCase()
                  .includes(search.toLowerCase()); */
          }))
        : (filteredList = list);

    const total = Object.values(cart).reduce((accum, curr) => accum + curr);

    return (
        <MenuStyle
            handleChange={handleChange}
            /*  clickRightArrow={clickRightArrow} */
            /*   clickLeftArrow={clickLeftArrow} */
            categories={PRODUCTS.general}
            clickCategories={clickCategories}
            list={filteredList}
            increase={increase}
            decrease={decrease}
            amount={cart}
            totalAmount={total}
        />
    );
}

export default Menu;
