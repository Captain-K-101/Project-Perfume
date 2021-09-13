import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import style from "./header.module.css";
import "./header.css";
const Header = () => {
  const { cartSize } = useContext(CartContext);
  const [menu, setmenu] = useState(false);
  return (
    <header className={!document.location.pathname.includes('admin')?style.header:"hidden"}>
      <div className="custombg w-100 h-auto shadow-lg mb-2 -mt-4">
      <div className="p-5">
        <div className="flex justify-between mx-20 text-center items-center">
          <div class="font-semibold text-gray-500">Call us 0012804227</div>
          <div className="flex gap-8">
          <div className="flex gap-10 font-semibold text-gray-500">
            <NavLink to="/"  className="text-center cursor-pointer">Home</NavLink>
            <NavLink to="/" className="text-center cursor-pointer">Shop</NavLink>
            <NavLink to="/contact" className="text-center cursor-pointer">Contact Us</NavLink>
          </div>|
          <div>
            {localStorage.getItem("token")?.split(".").length == 2 ? (
              <div class="font-semibold text-gray-500">
                <NavLink to="/logout">logout</NavLink>
              </div>
            ) : (
              <div class="font-semibold text-gray-500">
                <NavLink to="/auth">Login/Register</NavLink>
              </div>
            )}
          </div>
          </div>
        </div>
        </div>
      </div>
      <div className={style.container}>
        <nav className={style.header_nav}>
          <div className={style.brand}>
            <NavLink className={style.text_logo} to="/">
              SD Perfumes
            </NavLink>
          </div>
          <div class={style.header_nav2}>
            <div class={style.text_nav}>
            {localStorage.getItem("token")?.split(".").length == 2 ? (
              <div class="">
                <NavLink to="/">{atob(localStorage.getItem("token")?.split(".")[1])}</NavLink>
              </div>
            ) : (
              <div class="font-semibold text-gray-500">
                <NavLink to="/auth"></NavLink>
              </div>
            )}
            </div>
            <NavLink to="/cart" className={style.cart}>
              {cartSize || (
                <span className="material-icons">shopping_cart</span>
              )}
            </NavLink>
          </div>
          <div
            class="md:hidden flex-col flex items-center space-x-1"
            onClick={() => setmenu(!menu)}
          >
            X
          </div>
        </nav>
      </div>
      <div
        class={
          menu ? "md:hidden flex-col flex items-center space-x-1" : "hidden"
        }
      >
        <a
          href=""
          class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold "
        >
          Home
        </a>
        <a
          href=""
          class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
        >
          Services
        </a>
        <a
          href=""
          class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
        >
          About
        </a>
        <a
          href="/contact"
          class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
