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
            src="https://1000logos.net/wp-content/uploads/2020/07/Foot-Shop-Logo1.jpg"
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
