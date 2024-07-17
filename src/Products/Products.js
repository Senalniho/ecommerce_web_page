import "../Products/Products.css";
import { IoStarSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";

function Products({ result }) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
}

export default Products;
