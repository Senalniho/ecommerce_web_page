import "../Colors/Colors.css";

function Colors({ handleChange }) {
  const options = [
    { value: "", label: "All" },
    { value: "black", label: "Black", color: "black" },
    { value: "blue", label: "Blue", color: "blue" },
    { value: "red", label: "Red", color: "red" },
    { value: "green", label: "Green", color: "green" },
    { value: "white", label: "White", color: "white" },
  ];

  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      {options.map((option, index) => (
        <label key={index} className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value={option.value}
            name="test1"
          />
          <span
            className="checkmark"
            style={{
              background: option.color,
              border: option.color === "white" ? "2px solid black" : "",
            }}
          ></span>
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default Colors;
