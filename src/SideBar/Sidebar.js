import "../SideBar/Sidebar.css";
import Category from "../SideBar/Category/Category";
import Price from "../SideBar/Price/Price";
import Colors from "../SideBar/Colors/Colors";

function Sidebar({ handleChange }) {
  console.log(handleChange);
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          {/* <h1>Arsen Shoes🛒</h1> */}
          <img
            src="https://i.pinimg.com/originals/ba/5d/d4/ba5dd445504b80df283e90ebadb57d0b.gif"
            alt="Logo"
          />{" "}
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}
export default Sidebar;
