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
    (product) =>
      product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
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

    // Filtering by query
    if (query) {
      filteredProducts = filteredProducts.filter((product) => {
        return (
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
        );
      });
    }

    // Filtering by selected category
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
    }

    // Return filtered products as Cards components

    return filteredProducts.map((product, index) => (
      <Cards
        key={`${product.title}-${index}`} // Use a combination of unique properties and index
        img={product.img}
        title={product.title}
        star={product.star}
        reviews={product.reviews}
        newPrice={product.newPrice}
        prevPrice={product.prevPrice}
      />
    ));
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigaton query={query} handleChange={handleChange} />
      <Recommended handleChange={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
