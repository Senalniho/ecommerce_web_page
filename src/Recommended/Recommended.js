import React from "react";
import Buttons from "../components/Buttons";
import "../Recommended/Recommended.css";
function Recommended({ handleClick }) {
  return (
    <div className="recommended-container">
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={() => handleClick("")} title="All Products" />
        <Buttons onClickHandler={() => handleClick("Nike")} title="Nike" />
        <Buttons onClickHandler={() => handleClick("Adidas")} title="Adidas" />
        <Buttons onClickHandler={() => handleClick("Puma")} title="Puma" />
        <Buttons onClickHandler={() => handleClick("Vans")} title="Vans" />
      </div>
    </div>
  );
}
export default Recommended;
