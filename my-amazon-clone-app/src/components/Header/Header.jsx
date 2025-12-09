import React from "react";
import classes from "./header.module.css";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import LowerHeader from "./LowerHeader";

const Header = () => {
  return (
    <>
      <section className={classes.header_container}>
        <div className={classes.logo_container}>
          <a href="#">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
              alt="Amazon Logo"
            />
          </a>
          <div className={classes.delivery}>
            <span>
              <IoLocationOutline size={25} />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* second section start here i.e search bar  */}
        <div className={classes.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Product" />
          <FaSearch size={25} />
        </div>
        {/* third section (right-side div) starts here */}
        <div className={classes.order_container}>
          <a href="" className={classes.language}>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
              alt="country flag"
            />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          {/* for orders */}
          <a href="">
            <div>
              <p>returns</p>
              <span>& Orders</span>
            </div>
          </a>

          {/* for cart */}
          <a href="" className={classes.cart}>
            <LuShoppingCart size={25} />
            <span>0</span>
          </a>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
