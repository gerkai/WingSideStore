import { useState } from "react";
import { logo } from "../assets";
// import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
  HiMenuAlt3,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const untoggleMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section className="is-relative is-clipped has-background-light">
      <nav
        className="navbar has-background-light is-transparent is-fixed-top"
        style={{ borderBottom: "1px solid #cfd5e2" }}
      >
        <div className="navbar-brand is-align-items-center">
          <a className="navbar-item" href="#" onClick={untoggleMenu}>
            <img src={logo} alt="Logo" />
          </a>
          <a
            className="navbar-item button is-ghost is-no-focus-outline is-hidden-desktop"
            href="#"
            style={{ marginLeft: "30%" }}
            onClick={untoggleMenu}
          >
            <span className="icon">
              <HiOutlineHeart className="is-size-4" />
            </span>
          </a>
          <a
            className="navbar-item button is-ghost is-no-focus-outline is-hidden-desktop"
            href="#"
            onClick={untoggleMenu}
          >
            <HiOutlineShoppingBag className="is-size-4" />
            <span
              className="has-background-warning has-text-weight-bold"
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
              }}
            >
              3
            </span>
          </a>

          <button
            role="button"
            className={`navbar-burger ${menuOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenuH"
            onClick={toggleMenu}
          >
            <HiMenuAlt3 className="is-size-3 mr-0" />
          </button>
        </div>
        <div
          id="navbarMenuH"
          className={`navbar-menu ${
            menuOpen ? "is-active" : ""
          }`}
        >
          <div className="navbar-end">
            <a className="navbar-item mobile-menu" href="#" onClick={untoggleMenu}>
              Home
            </a>
            <a className="navbar-item mobile-menu" href="#" onClick={untoggleMenu}>
              Contact Us
            </a>
            <hr className="navbar-divider is-hidden-desktop" />
            <a className="navbar-item mobile-menu is-hidden-desktop" href="#" onClick={untoggleMenu}>
             Login
            </a>
            <a className="navbar-item mobile-menu is-hidden-desktop " href="#" onClick={untoggleMenu}>
              Register
            </a>
            <a className="navbar-item mobile-menu is-hidden-desktop " href="#" onClick={untoggleMenu}>
              My Orders
            </a>
          </div>
          
          <div className="navbar-end is-hidden-mobile is-hidden-tablet-only">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a className="button is-ghost is-no-focus-outline" href="#">
                  Login
                  </a>
                </p>
                <p className="control">
                  <a className="button is-ghost is-no-focus-outline" href="#">
                  Register
                  </a>
                </p>
                <p className="control">
                  <a className="button is-ghost is-no-focus-outline" href="#">
                  My Orders
                  </a>
                </p>
                <p className="control">
                  <a className="button is-ghost is-no-focus-outline" href="#">
                    Cart
                    <HiOutlineShoppingBag className="is-size-4" />
                    <span
                      className="has-background-warning has-text-weight-bold"
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                      }}
                    >
                      3
                    </span>
                  </a>
                </p>
                {/* <p className="control">
                  <a className="button is-ghost is-no-focus-outline" href="#">
                    <span className="icon-text">
                      <span className="icon">
                        <HiOutlineUser className="is-size-4" />
                      </span>
                      <span>Sign In</span>
                    </span>
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
