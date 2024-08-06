import React from "react";

const Sidebar = () => {
  return (
    <div>
      
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="index.html"><img src="assets/images/logo.png" alt="logo" /></a>
      </div>
      <ul className="nav">
        <li className="nav-item active menu-items">
          <a className="nav-link " href="index.html">
            <span className="menu-icon">
              <i className="fa fa-home"></i>
            </span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link"  href="#ui-basic">
            <span className="menu-icon">
              <i className="fa fa-bar-chart "></i>
            </span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="#!">
            <span className="menu-icon">
              <i className="mdi mdi-comment-check-outline"></i>
            </span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="#!">
            <span className="menu-icon">
              <i className="mdi mdi-wallet-outline"></i>
            </span>
          </a>
        </li>
        <li className="nav-item menu-items">
          <a className="nav-link" href="#!">
            <span className="menu-icon">
              <i className="mdi mdi-shopping"></i>
            </span>
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Sidebar;
