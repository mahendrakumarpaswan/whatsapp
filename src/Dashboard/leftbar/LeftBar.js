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
  const [isProductSubMenuOpen,setisProductSubMenuOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [offactive, setOffactive] = useState(false);
  const [twillio,setTwillio] = useState(false);
  const [custgrp,setCustgrp] = useState(false);
  const [custlist,setCustlist] = useState(false);
  const [sendmsge,setSendmsge] = useState(false);
  const [messagehistory,setMessagehistory] = useState(false);

  useEffect(() => {
    const storedActive = localStorage.getItem("user") ==="/robotics";
    const storedOffactive = localStorage.getItem("user") ==="/officialpage";
    const storedTwillio = localStorage.getItem("user") ==="/twilliopage";
    const customergroup = localStorage.getItem("user") ==="/customergroup";
    const customerslist = localStorage.getItem("user") === "/customerlist";
    const sendmessage =  localStorage.getItem("user") === "/sendmessagepage";
    const messagehistory = localStorage.getItem("user") === "/messagehistory";
    setActive(storedActive);
    setOffactive(storedOffactive);
    setTwillio(storedTwillio);
    setCustgrp(customergroup);
    setCustlist(customerslist);
    setSendmsge(sendmessage);
    setMessagehistory(messagehistory);
  }, []);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
    setSmsSubMenuOpen(false);
    setisProductSubMenuOpen(false);
  };

  const toggleSmsSubMenu = () => {
    setSmsSubMenuOpen(!isSmsSubMenuOpen);
    setSubMenuOpen(false);
    setisProductSubMenuOpen(false);
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

  const productManagement  = () =>{
    setisProductSubMenuOpen(!isProductSubMenuOpen)
    setSmsSubMenuOpen(false);
    console.log("Hello this is test---")

  }

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
      setCustgrp(false);
      setCustlist(false);
      setSendmsge(false);
      setMessagehistory(false);
    }else if(content === "/officialpage"){
      setTwillio(false);
      setActive(false);
      setCustgrp(false);
      setCustlist(false);
      setOffactive(true);
      setSendmsge(false);
      setMessagehistory(false);
    }else if(content === "/twilliopage"){
      setTwillio(true);
      setCustgrp(false);
      setActive(false);
      setOffactive(false);
      setCustlist(false);
      setSendmsge(false);
      setMessagehistory(false);
    }else if(content === "/customergroup"){
      setTwillio(false);
      setActive(false);
      setOffactive(false);
      setCustlist(false);
      setCustgrp(true);
      setSendmsge(false);
      setMessagehistory(false);

    }else if(content === "/customerlist"){
      setTwillio(false);
      setActive(false);
      setOffactive(false);
      setCustgrp(false);
      setCustlist(true);
      setSendmsge(false);
      setMessagehistory(false);

    }else if(content === "/sendmessagepage"){
      setTwillio(false);
      setActive(false);
      setOffactive(false);
      setCustgrp(false);
      setCustlist(false);
      setSendmsge(true);
      setMessagehistory(false);

    }else if(content === "/messagehistory"){
      setTwillio(false);
      setActive(false);
      setOffactive(false);
      setCustgrp(false);
      setCustlist(false);
      setSendmsge(false);
      setMessagehistory(true);

    }


    else if(content!=="/robotics" ||content!=="/officialpage"||content!=="/twilliopage"){
      setTwillio(false);
      setActive(false);
      setOffactive(false);
      setCustlist(false);
      console.log("Finally not get any url then call then condition is execude here!")
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
                    <li className={custgrp == true ? "selected3" : ""}>
                      <Link 
                        to="/customergroup"
                      onClick={()=>toggleSubMenuContent("/customergroup")}
                      >
                        Customer Group</Link>
                    </li>
                    <li className={custlist == true ? "selected4" : ""}>
                      <Link 
                       to="/customerlist"
                       onClick={()=>toggleSubMenuContent("/customerlist")}
                       >
                        Customer List</Link>
                    </li>
                    
                    <li className={sendmsge == true ? "selected5" : ""}>
                      <Link 
                         to="/sendmessagepage"
                         onClick={()=>toggleSubMenuContent("/sendmessagepage")}
                         >Send Message</Link>
                    </li>
                    <li className={messagehistory == true ? "selected6": ""}>
                      <Link 
                          to="/messagehistory"
                          onClick={()=>toggleSubMenuContent("/messagehistory")}
                          >Message History</Link>
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
              <li className="submenu" onClick={() => productManagement()}>
                <Link to="/productpage">
                  <img src={sales1} alt="" />
                  <span>Product Management</span>
                  <span className="menu-arrow"></span>
                </Link>
              </li>           
    
              <li className="submenu">
                <Link onClick={productManagement}> 
                  <img src={sales1} alt="" />
                  <span>Purchase</span>
                  <span
                    className={`menu-arrow ${
                      isProductSubMenuOpen ? "rotate-down" : ""
                    }`}
                  ></span>
                </Link>
                {isProductSubMenuOpen && (
                  <ul>
                    <li>
                      <Link to="/purchasepage">Purchase</Link>
                    </li>
                    <li>
                      <Link to="/purchasereturnpage">Purchase Return</Link>
                    </li>
                  </ul>
                )}
              </li>


              <li className="submenu">
              <Link onClick={()=>productManagement()}> 
                <img src={sales1} alt="" />
                <span>Sale</span>
                <span
                  className={`menu-arrow ${
                    isProductSubMenuOpen ? "rotate-down" : ""
                  }`}
                ></span>
              </Link>
              {isProductSubMenuOpen && (
                <ul>
                  <li>
                    <Link to="/salepage">Sale</Link>
                  </li>
                  <li>
                    <Link to="/salereturnpage">Sale Return</Link>
                  </li>
                  <li>
                      <Link to="/quotationnpage">Quotation</Link>
                </li>
                </ul>
              )}
            </li>

    
              
            <li className="submenu" onClick={() => togglePayment()}>
                <Link to="/transferpage">
                  <img src={sales1} alt="" />
                  <span>Transfer</span>
                  <span className="menu-arrow"></span>
                </Link>
              </li>




              <li className="submenu">
              <Link onClick={()=>productManagement()}> 
                <img src={sales1} alt="" />
                <span>Setting </span>
                <span
                  className={`menu-arrow ${
                    isProductSubMenuOpen ? "rotate-down" : ""
                  }`}
                ></span>
              </Link>
              {isProductSubMenuOpen && (
                <ul>
                  <li>
                    <Link to="/productcategory">Product category</Link>
                  </li>
                  <li>
                    <Link to="/productsubcategory">Product Subcategory</Link>
                  </li>
                  <li>
                      <Link to="/brandmaster">Brand Master</Link>
                </li>
                <li>
                      <Link to="/warehouse">WareHouse</Link>
                </li>
                </ul>
              )}
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
