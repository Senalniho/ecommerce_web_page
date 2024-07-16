import { useState } from "react";

import Navigaton from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import Cards from "./components/Cards";

import products from "../src/db/data";
import Category from "./SideBar/Category/Category";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-------------Input Filter--------------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //-------------Radio Filter--------------

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //-------------Buttons Filter--------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //Filtering Input items

    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          product.category === selected ||
          product.color === selected ||
          product.company === selected ||
          product.newPrice === selected ||
          product.title === selected
        );
      });
      return filteredProducts.map(
        ({ img, title, star, reviews, newPrice, prevPrice }) => (
          <Cards
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            newPrice={newPrice}
            prevPrice={prevPrice}
          />
        )
      );
    }
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigaton />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
