import "../Category/Category.css";
import Inputs from "../../components/Inputs";

function Category({ handleChange }) {
  const options = [
    { value: "", label: "All" },
    { value: "", label: "Sneakers" },
    { value: "", label: "Flats" },
    { value: "", label: "Sandals" },
    { value: "", label: "Heels" },
  ];

  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      {options.map((option, index) => (
        <label key={index} className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value={option.value}
            name="test"
          />
          <span className="checkmark"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
}
export default Category;
