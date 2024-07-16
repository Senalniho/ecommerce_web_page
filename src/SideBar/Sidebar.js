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
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}
export default Sidebar;
