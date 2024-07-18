import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import "../Products/Products.css";

function Cards({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <section className="card">
      <img src={img} alt={title} className="card-img" />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          {star} {star} {star} {star}
          <span className="total-review"> {reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice} </del>
            {newPrice}
          </div>

          <div className="bag">
            <IoBag className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Cards;
