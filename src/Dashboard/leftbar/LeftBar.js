import React, { useState } from "react";
import "./leftbar.css";
import {useEffect} from 'react';
import { Link ,useLocation} from "react-router-dom";
import dashboard from "../image/icons/dashboard.svg";
import product from "../image/icons/product.svg";
import sales1 from "../image/icons/sales1.svg";

const LeftBar = () => {
  const location = useLocation();
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isSmsSubMenuOpen, setSmsSubMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [offactive, setOffactive] = useState(false);
  const [twillio,setTwillio] = useState(false);

  useEffect(() => {
    const storedActive = localStorage.getItem("user") ==="/robotics";
    const storedOffactive = localStorage.getItem("user") ==="/officialpage";
    const storedTwillio = localStorage.getItem("user") ==="/twilliopage";
    // console.log("storedActive..",localStorage.getItem("user") ==="/robotics");
    setActive(storedActive);
    setOffactive(storedOffactive);
    setTwillio(storedTwillio);
  }, []);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
    setSmsSubMenuOpen(false);
  };

  const toggleSmsSubMenu = () => {
    setSmsSubMenuOpen(!isSmsSubMenuOpen);
    setSubMenuOpen(false);
  };

  const toggleBuyPlan = () => {
    setSubMenuOpen(false);
    setSmsSubMenuOpen(false);
  };

  const togglePayment = () => {
    setSubMenuOpen(false);
    setSmsSubMenuOpen(false);
  };

  const toggleSupport = () => {
    setSubMenuOpen(false);
    setSmsSubMenuOpen(false);
  };

  const toggleSubMenuContent = (content) => {
    console.log('content..',content);
    // setActive(content === "/robotics");
    // setOffactive(content === "/officialpage");
    // setTwillio(content === "/twilliopage");
    localStorage.setItem("user" ,content);
    // // localStorage.setItem("offactive", content);
    if(content === "/robotics"){
      setTwillio(false);
      setActive(true);
      setOffactive(false);
    }else if(content === "/officialpage"){
      setTwillio(false);
      setActive(false);
      setOffactive(true);
    }else if(content === "/twilliopage"){
      setTwillio(true);
      setActive(false);
      setOffactive(false);
    }
    else if(content!=="/robotics" ||content!=="/officialpage"||content!=="/twilliopage"){
      setTwillio(false);
      setActive(false);
      setOffactive(false);
    }

  };

  console.log(location.pathname);

  return (
    <div>
      {/* left sidebar part start here */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="active">
                <Link to="">
                  <img src={dashboard} alt="" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="submenu">
                <Link onClick={toggleSubMenu}>
                  <img src={product} alt="" />
                  <span>Whatsapp Messaging</span>
                  <span
                    className={`menu-arrow ${
                      isSubMenuOpen ? "rotate-down" : ""
                    }`}
                  ></span>
                </Link>
                {isSubMenuOpen && (
                  <ul>
                    <li className={active == true ? "selected" : ""}>
                      <Link
                        to="/robotics"
                        onClick={() => toggleSubMenuContent("/robotics")}
                      >
                        Whatsapp Robotics
                      </Link>
                    </li>
                    <li className={offactive == true ? "selected1" : ""}>
                      <Link
                        to="/officialpage"
                        onClick={() => toggleSubMenuContent("/officialpage")}
                      >
                        Whatsapp Official
                      </Link>
                    </li>
                    <li className={twillio == true ? "selected2" : ""}>
                      <Link 
                      to="/twilliopage"
                      onClick={() => toggleSubMenuContent("/twilliopage")}
                      >
                      Whatsapp Twillio</Link>
                    </li>
                    <li>
                      <Link to="/customergroup">Customer Group</Link>
                    </li>
                    <li>
                      <Link to="/customerlist">Customer List</Link>
                    </li>
                    <li>
                      <Link to="/sendmessagepage">Send Message</Link>
                    </li>
                    <li>
                      <Link to="/messagehistory">Message History</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="submenu" onClick={toggleSmsSubMenu}>
                <Link>
                  <img src={sales1} alt="" />
                  <span>SMS Messaging</span>
                  <span
                    className={`menu-arrow ${
                      isSmsSubMenuOpen ? "rotate-down" : ""
                    }`}
                  ></span>
                </Link>
                {isSmsSubMenuOpen && (
                  <ul>
                    <li>
                      <Link to="/bulkmailingpage">Bulk Mailing</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="submenu" onClick={() => toggleBuyPlan()}>
                <Link to="/buyplanpage">
                  <img src={sales1} alt="" />
                  <span>Buy Plan</span>
                  <span className="menu-arrow"></span>
                </Link>
              </li>
              <li className="submenu" onClick={() => togglePayment()}>
                <Link to="/paymentpage">
                  <img src={sales1} alt="" />
                  <span>Payment</span>
                  <span className="menu-arrow"></span>
                </Link>
              </li>
              <li className="submenu" onClick={() => toggleSupport()}>
                <Link to="/supportpage">
                  <img src={sales1} alt="" />
                  <span>Support</span>
                  <span className="menu-arrow"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* left sidebar part end here */}
    </div>
  );
};

export default LeftBar;
