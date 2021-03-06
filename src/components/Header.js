import React from "react";
import LoginButton from "../components/LoginButton";
import MyAccountButton from "./MyAccountButton";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
const Header = props => {
  return (
    
    <>
      {/*<!-- Start Header Area -->*/}
      <header className="header_area sticky-header">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light main_box">
            <div className="container">
              {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
              <a className="navbar-brand logo_h" href="/">
                <img src="/yoshiniLogo.png" alt="" height="60px" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to={"/categorypage"} text="Category Page" />
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/productDetail">
                          Product Details
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="checkout.html">
                          Product Checkout
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="cart.html">
                          Shopping Cart
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="confirmation.html">
                          Confirmation
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <NavLink to="/login" text="Login" />
                      </li>
                      <li className="nav-item">
                        <NavLink to="/tracking" text="Tracking" />
                      </li>
                      <li className="nav-item">
                        <NavLink to="/elements" text="Elements" />
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" text="Contact" />
                  </li>
                  {props.auth.isAuthenticated() ? (
                    <MyAccountButton {...props} />
                  ) : (
                    <LoginButton {...props} />
                  )}
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <a href="#" className="cart">
                      <span className="ti-bag"></span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="search">
                      <span className="lnr lnr-magnifier" id="search"></span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between" onSubmit={props.sub}>
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
                onChange={props.searchSomething}
                
              ></input>
              <button type="submit" className="btn"></button>
              <span
                className="lnr lnr-cross"
                id="close_search"
                title="Close Search"
              ></span>
            </form>
          </div>
        </div>
      </header>
      {/*<!-- End Header Area -->*/}
    </>
  );
};

export default Header;

