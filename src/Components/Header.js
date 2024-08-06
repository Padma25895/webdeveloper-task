import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="navbar p-0 fixed-top d-flex flex-row">
        <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
          <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo.png"
              alt="logo" /></a>
        </div>
        <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
          <ul className="navbar-nav w-100">
            <li className="nav-item w-100">
              <form className="nav-link search mt-2 mt-md-0 d-none d-lg-flex search">
                <span className="fa fa-search"></span><input type="text" className="form-control" placeholder="Search products"/>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav notify navbar-nav-right">
            <li className="nav-item  ">
              <a className="nav-link count-indicator"
                aria-expanded="false">
                <i className="mdi mdi-email"></i>
              </a>
            </li>
            <li className="nav-item nav-settings d-lg-block">
              <a className="nav-link" href="#">
                <i className="mdi mdi-settings"></i>
              </a>
            </li>
            <li className="nav-item  ">
              <a className="nav-link count-indicator" >
                <i className="mdi mdi-bell"></i>
                <span class="count bg-primary"></span>
              </a>
            </li>
            <li className="nav-item navim ">
                <div className="navbar-profile">
                  <img className="img-xs rounded-circle" src="assets/images/faces/face15.jpg" alt=""/>
                </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
