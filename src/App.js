// import { useState } from "react";

// import Navigation from "./Navigation/Nav";
// import Products from "./Products/Products";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./SideBar/Sidebar";
// import Cards from "./components/Cards";

// import products from "../src/db/data";
// import Category from "./SideBar/Category/Category";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState("");

//   //-------------Input Filter--------------

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const filteredItems = products.filter(
//     (product) =>
//       product.title.toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
//   );

//   //-------------Radio Filter--------------

//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }

//   //-------------Buttons Filter--------------
//   const handleClick = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   function filteredData(products, selected, query) {
//     let filteredProducts = products;

//     // Filtering by query
//     if (query) {
//       const formattedQuery = capitalizeFirstLetter(query);
//       filteredProducts = filteredProducts.filter((product) => {
//         const formattedTitle = capitalizeFirstLetter(product.title);
//         const formattedDescription = capitalizeFirstLetter(product.description);
//         return (
//           formattedTitle.includes(formattedQuery) ||
//           formattedDescription.includes(formattedQuery)
//         );
//       });
//     }

//     // Filtering by selected category
//     if (selected) {
//       filteredProducts = filteredProducts.filter((product) => {
//         return (
//           product.category === selected ||
//           product.color === selected ||
//           product.company === selected ||
//           product.newPrice === selected ||
//           product.title === selected
//         );
//       });
//     }

//     // Return filtered products as Cards components

//     return filteredProducts.map((product, index) => (
//       <Cards
//         key={`${product.title}-${index}`}
//         img={product.img}
//         title={product.title}
//         star={product.star}
//         reviews={product.reviews}
//         newPrice={product.newPrice}
//         prevPrice={product.prevPrice}
//       />
//     ));
//   }

//   const result = filteredData(products, selectedCategory, query);

//   return (
//     <>
//       <Sidebar handleChange={handleChange} />
//       <Navigation query={query} handleChange={handleChange} />
//       <Recommended handleChange={handleClick} />
//       <Products result={result} />
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import Cards from "./components/Cards";
import products from "../src/db/data";
import Category from "./SideBar/Category/Category";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  // Function to capitalize the first letter of a string and lowercase the rest
  function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }
  // Handle input change for search query
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  // Handle category change for radio buttons or buttons
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // Handle recommended category click
  const handleClick = (value) => {
    setSelectedCategory(value);
  };
  // Function to filter products based on selected category and query
  function filteredData(products, selected, query) {
    let filteredProducts = products;
    // Filtering by query
    if (query) {
      const formattedQuery = capitalizeFirstLetter(query);
      filteredProducts = filteredProducts.filter((product) => {
        const formattedTitle = capitalizeFirstLetter(product.title);
        const formattedDescription = capitalizeFirstLetter(product.description);
        return (
          formattedTitle.includes(formattedQuery) ||
          formattedDescription.includes(formattedQuery)
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
    return filteredProducts;
  }
  // Get filtered products based on current state
  const filteredProducts = filteredData(products, selectedCategory, query);
  // Map filtered products to Cards components
  const result = filteredProducts.map((product, index) => (
    <Cards
      key={`${product.title}-${index}`}
      img={product.img}
      title={product.title}
      star={product.star}
      reviews={product.reviews}
      newPrice={product.newPrice}
      prevPrice={product.prevPrice}
    />
  ));
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}
export default App;
