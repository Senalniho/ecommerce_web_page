import "../Category/Category.css";
import Inputs from "../../components/Inputs";

// function Category({ handleChange }) {
//   const options = [
//     { value: "All", label: "All" },
//     { value: "Sneakers", label: "Sneakers" },
//     { value: "Flats", label: "Flats" },
//     { value: "Sandals", label: "Sandals" },
//     { value: "Heels", label: "Heels" },
//   ];

//   return (
//     <div>
//       <h2 className="sidebar-title">Category</h2>
//       {options.map((option, index) => (
//         <label key={index} className="sidebar-label-container">
//           <input
//             onChange={handleChange}
//             type="radio"
//             value={option.value}
//             name="test"
//           />
//           <span className="checkmark"></span>
//           {option.label}
//         </label>
//       ))}
//     </div>
//   );
// }
// export default Category;

// import React, { useState } from "react";

// function Category() {
//   const [selectedValue, setSelectedValue] = useState("All");

//   const options = [
//     { value: "All", label: "All" },
//     { value: "Sneakers", label: "Sneakers" },
//     { value: "Flats", label: "Flats" },
//     { value: "Sandals", label: "Sandals" },
//     { value: "Heels", label: "Heels" },
//   ];

//   const handleChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <h2 className="sidebar-title">Category</h2>
//       {options.map((option) => (
//         <label key={option.value} className="sidebar-label-container">
//           <input
//             checked={option.value === selectedValue}
//             onChange={handleChange}
//             type="radio"
//             value={option.value}
//             name="category"
//           />
//           <span className="checkmark"></span>
//           {option.label}
//         </label>
//       ))}
//     </div>
//   );
// }

// export default Category;

// Category.js
import "../Category/Category.css";
import React, { useState } from "react";

function Category({ handleChange }) {
  const [selectedValue, setSelectedValue] = useState("All");

  const options = [
    { value: "All", label: "All" },
    { value: "Sneakers", label: "Sneakers" },
    { value: "Flats", label: "Flats" },
    { value: "Sandals", label: "Sandals" },
    { value: "Heels", label: "Heels" },
  ];

  const internalHandleChange = (event) => {
    setSelectedValue(event.target.value);
    handleChange(event); // Notify parent component of the change
  };

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      {options.map((option) => (
        <label key={option.value} className="sidebar-label-container">
          <input
            checked={option.value === selectedValue}
            onChange={internalHandleChange}
            type="radio"
            value={option.value}
            name="category"
          />
          <span className="checkmark"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default Category;
