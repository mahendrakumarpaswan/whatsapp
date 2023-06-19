import React from 'react'
import "../CSS/animate.css"
import "../CSS/bootstrap.min.css"
import "../CSS/custom.css"

import "../CSS/font-awesome.min.css"

import "../CSS/magnific-popup.css"
import "../CSS/off-canvas.css"

import "../CSS/owl.carousel.css"

import "../CSS/responsive.css"
import "../CSS/rs-spacing.css"
import "../CSS/rsmenu-main.css"
import "../CSS/slick.css";

import "../CSS/style.css"
import "./header.css"

import logo_light from "../images/logo-light.png"
import logo_dark from "../images/logo-light.png"
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            {/*Preloader area start here*/}
            {/* <div id="loader" className="loader">
                <div className="loader-container" />
            </div> */}
          
  {/*Preloader area End here*/}
  {/* Main content Start */}
  <div className="main-content">
    {/*Full width header Start*/}
    <div className="full-width-header">
      {/*Header Start*/}
      <header
        id="rs-header"
        className="rs-header style3 modify2 header-transparent"
      >
        {/* Menu Start */}
        <div className="menu-area menu-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2">
                <div className="logo-part">
                  <a href="index.php">
                    <img
                      className="normal-logo"
                      src={logo_light}
                      alt="logo"
                    />
                    <img
                      className="sticky-logo"
                      src={logo_dark}
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="mobile-menu">
                  <a href="#" className="rs-menu-toggle rs-menu-toggle-close">
                    <i className="fa fa-bars" />
                  </a>
                </div>
              </div>
              <div className="col-lg-10 text-right">
                <div className="rs-menu-area">
                  <div className="main-menu">
                    <nav className="rs-menu pr-100 lg-pr-50 md-pr-0">
                      <ul className="nav-menu">
                        <li>
                          <a href="index.php">HOME</a>
                        </li>
                        <li>
                          <a href="solution.php">SOLUTION</a>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="javascript:void(0)">MODULES</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="accounting.php">ACCOUNTING</a>
                            </li>
                            <li>
                              <a href="purchase.php">PURCHASE</a>
                            </li>
                            <li>
                              <a href="inventory.php">INVENTORY</a>
                            </li>
                            <li>
                              <a href="production.php">PRODUCTION</a>
                            </li>
                            <li>
                              <a href="sales-distribution.php">
                                SALES &amp; DISTRIBUTION
                              </a>
                            </li>
                            <li>
                              <a href="sales-team-management.php">
                                SALES TEAM MANAGEMENT
                              </a>
                            </li>
                            <li>
                              <a href="quality-control.php">QUALITY CONTROL</a>
                            </li>
                            <li>
                              <a href="system-administration.php">
                                SYSTEM ADMINISTRATION
                              </a>
                            </li>
                            <li>
                              <a href="compliance-management.php">
                                COMPLIANCE MANAGEMENT
                              </a>
                            </li>
                            <li>
                              <a href="crm.php">CRM</a>
                            </li>
                            <li>
                              <a href="payroll.php">PAYROLL</a>
                            </li>
                            <li>
                              <a href="reports.php">REPORTS</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="javascript:void(0)">INDUSTRIES</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="manufacturing.php">MANUFACTURING</a>
                            </li>
                            <li>
                              <a href="engineering.php">ENGINEERING</a>
                            </li>
                            <li>
                              <a href="fmcg.php">FMCG</a>
                            </li>
                            <li>
                              <a href="textile.php">TEXTILE</a>
                            </li>
                            <li>
                              <a href="packaging.php">PACKAGING</a>
                            </li>
                            <li>
                              <a href="trading.php">TRADING</a>
                            </li>
                            <li>
                              <a href="pharmaceutical.php">PHARMACEUTICAL</a>
                            </li>
                            <li>
                              <a href="real-estate.php">REAL ESTATE</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact-us.php">CONTACT US</a>
                        </li>
                        <li>
                          <Link to="/login">
                            <button id='SignIN'>Sign In</button>
                          </Link>
                        </li>
                        <li>
                          <Link to="/register">
                            <button id='SignIN'>Register</button>
                          </Link>
                        </li>
                        
                      </ul>{" "}
                      {/* //.nav-menu */}
                    </nav>
                  </div>{" "}
                  {/* //.main-menu */}
                  <div className="expand-btn-inner search-icon hidden-md">
                    <ul>
                      <li>
                        <a
                          id="nav-expander"
                          className="humburger nav-expander"
                          href="#"
                        >
                          <span className="dot1" />
                          <span className="dot2" />
                          <span className="dot3" />
                          <span className="dot4" />
                          <span className="dot5" />
                          <span className="dot6" />
                          <span className="dot7" />
                          <span className="dot8" />
                          <span className="dot9" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu End */}
      </header>
      {/*Header End*/}
      {/* Canvas Menu start */}
      <nav className="right_menu_togle hidden-md">
        <div className="close-btn">
          <div className="nav-link">
            <a id="nav-close" className="humburger nav-expander" href="#">
              <span className="dot1" />
              <span className="dot2" />
              <span className="dot3" />
              <span className="dot4" />
              <span className="dot5" />
              <span className="dot6" />
              <span className="dot7" />
              <span className="dot8" />
              <span className="dot9" />
            </a>
          </div>
        </div>
        <div className="canvas-logo">
          <a href="index.html">
            <img src={logo_dark} alt="logo" />
          </a>
        </div>
        <div className="offcanvas-text">
          <p>
            HTSM Technologies Pvt. Ltd. a web Development Company has been
            providing professional software... <a href="#.">View More</a>
          </p>
        </div>
        <div className="canvas-contact">
          <div className="address-area">
            <div className="address-list">
              <div className="info-icon">
                <i className="flaticon-location" />
              </div>
              <div className="info-content">
                <h4 className="title">Address</h4>
                <em>
                  Module No. 301, 3rd Floor, Tower-II, BN 9, Webel IT Park,
                  Sector V, Bidhannagar, Kolkata 700091
                </em>
              </div>
            </div>
            <div className="address-list">
              <div className="info-icon">
                <i className="flaticon-email" />
              </div>
              <div className="info-content">
                <h4 className="title">Email</h4>
                <em>
                  <a href="mailto:support@htsm.in">support@htsm.in</a>
                </em>
              </div>
            </div>
            <div className="address-list">
              <div className="info-icon">
                <i className="flaticon-call" />
              </div>
              <div className="info-content">
                <h4 className="title">Phone</h4>
                <em>033 41816636</em>
              </div>
            </div>
          </div>
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/htsmtechnologies/"
                target="_blank"
              >
                <i className="fa fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/KPrakashHTSM" target="_blank">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/htsm-technologies-pvt-ltd"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://in.pinterest.com/htsmtechnologies/"
                target="_blank"
              >
                <i className="fa fa-pinterest" />
              </a>
            </li>
            <li>
              <a
                href="https://www.flickr.com/photos/htsmtechnologies/"
                target="_blank"
              >
                <i className="fa fa-flickr" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/htsmtechnologies/"
                target="_blank"
              >
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Canvas Menu end */}
    </div>
    {/*Full width header End*/}
  </div>


        </>
    )
}

export default Header
