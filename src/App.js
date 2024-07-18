// import React, { useState } from "react";
// import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
// import Navigation from "./Navigation/Nav";
// import Products from "./Products/Products";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./SideBar/Sidebar";
// import Cards from "./components/Cards";
// import products from "../src/db/data";
// import Category from "./SideBar/Category/Category";
// import ProductDetails from "./ProductDetails/ProductDetails";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState("");
//   // Function to capitalize the first letter of a string and lowercase the rest
//   function capitalizeFirstLetter(str) {
//     if (str.length === 0) return str;
//     return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//   }
//   // Handle input change for search query
//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };
//   // Handle category change for radio buttons or buttons
//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };
//   // Handle recommended category click
//   const handleClick = (value) => {
//     setSelectedCategory(value);
//   };
//   // Function to filter products based on selected category and query
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
//     return filteredProducts;
//   }
//   // Get filtered products based on current state
//   const filteredProducts = filteredData(products, selectedCategory, query);

//   // Map filtered products to Cards components
//   // const result = filteredProducts.map((product, index) => (
//   //   <Cards
//   //     key={`${product.title}-${index}`}
//   //     img={product.img}
//   //     title={product.title}
//   //     star={product.star}
//   //     reviews={product.reviews}
//   //     newPrice={product.newPrice}
//   //     prevPrice={product.prevPrice}
//   //   />
//   // ));

//   const result = filteredProducts.map((product, index) => (
//     <Link to={`/product/${product.id}`} key={`${product.title}-${index}`}>
//       <Cards
//         img={product.img}
//         title={product.title}
//         star={product.star}
//         reviews={product.reviews}
//         newPrice={product.newPrice}
//         prevPrice={product.prevPrice}
//       />
//     </Link>
//   ));

//   // return (
//   //   <>
//   //     <Sidebar handleChange={handleChange} />
//   //     <Navigation query={query} handleChange={handleInputChange} />
//   //     <Recommended handleClick={handleClick} />
//   //     <Products result={result} />
//   //   </>
//   // );

//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/" exact>
//           <Sidebar handleChange={handleChange} />
//           <Navigation query={query} handleChange={handleInputChange} />
//           <Recommended handleClick={handleClick} />
//           <Products result={result} />
//         </Route>
//         <Route path="/product/:id">
//           <ProductDetails />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// }
// export default App;

// File: src/App.js

// File: src/App.js

// import React, { useState } from "react";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Navigation from "./Navigation/Nav";
// import Products from "./Products/Products";
// import Recommended from "./Recommended/Recommended";
// import Sidebar from "./SideBar/Sidebar";
// import Cards from "./components/Cards";
// import products from "../src/db/data";
// import Category from "./SideBar/Category/Category";
// import ProductDetails from "./ProductDetails/ProductDetails";

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [query, setQuery] = useState("");

//   // Function to capitalize the first letter of a string and lowercase the rest
//   function capitalizeFirstLetter(str) {
//     if (str.length === 0) return str;
//     return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
//   }

//   // Handle input change for search query
//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   // Handle category change for radio buttons or buttons
//   const handleChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };

//   // Handle recommended category click
//   const handleClick = (value) => {
//     setSelectedCategory(value);
//   };

//   // Function to filter products based on selected category and query
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
//           product.title === selected ||
//           product.company === selected
//         );
//       });
//     }

//     return filteredProducts;
//   }

//   // Get filtered products based on current state
//   const filteredProducts = filteredData(products, selectedCategory, query);

//   // Map filtered products to Cards components
//   const result = filteredProducts.map((product, index) => (
//     <Link to={`/product/${product.id}`} key={`${product.title}-${index}`}>
//       <Cards
//         img={product.img}
//         title={product.title}
//         star={product.star}
//         reviews={product.reviews}
//         newPrice={product.newPrice}
//         prevPrice={product.prevPrice}
//         company={product.company}
//       />
//     </Link>
//   ));

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Sidebar handleChange={handleChange} />
//               <Navigation query={query} handleChange={handleInputChange} />
//               <Recommended handleClick={handleClick} />
//               <Products result={result} />
//             </>
//           }
//         />
//         <Route path="/product/:id" element={<ProductDetails />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./SideBar/Sidebar";
import Cards from "./components/Cards";
import products from "../src/db/data";
import Category from "./SideBar/Category/Category";
import ProductDetails from "./ProductDetails/ProductDetails";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  function capitalizeFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (value) => {
    setSelectedCategory(value);
  };

  const handleClear = () => {
    setSelectedCategory(null);
    setQuery("");
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

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

  const filteredProducts = filteredData(products, selectedCategory, query);

  const generateProductId = (index, title) =>
    `${index}-${title.replace(/\s+/g, "-").toLowerCase()}`;

  const result = filteredProducts.map((product, index) => (
    <Link
      to={`/product/${generateProductId(index, product.title)}`}
      key={`${product.title}-${index}`}
    >
      <Cards
        img={product.img}
        title={product.title}
        star={product.star}
        reviews={product.reviews}
        newPrice={product.newPrice}
        prevPrice={product.prevPrice}
      />
    </Link>
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sidebar handleChange={handleChange} handleClear={handleClear} />
              <Navigation query={query} handleChange={handleInputChange} />
              <Recommended handleClick={handleClick} />
              <Products result={result} />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
