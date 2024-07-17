import "../Price/Price.css";

import "../../Products/Products.css";

function Price({ handleChange }) {
  const options = [
    { value: "", label: "All" },
    { value: 50, label: "$0 - 50" },
    { value: 100, label: "$50 - 100" },
    { value: 150, label: "$100 - 150" },
    { value: 200, label: "Over $150" },
  ];

  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      {options.map((option, index) => (
        <label key={index} className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value={option.value}
            name="test2"
          />
          <span className="checkmark"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
}
export default Price;
