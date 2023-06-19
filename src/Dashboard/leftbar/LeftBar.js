import React, { useState } from 'react';
import './leftbar.css';
import { Link } from 'react-router-dom';
import dashboard from '../image/icons/dashboard.svg';
import product from '../image/icons/product.svg';
import sales1 from '../image/icons/sales1.svg';

const LeftBar = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const [isSmsSubMenuOpen, setSmsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
    setSmsSubMenuOpen(false); // Close the SMS submenu when WhatsApp submenu is opened
  };

  const toggleSmsSubMenu = () => {
    setSmsSubMenuOpen(!isSmsSubMenuOpen);
    setSubMenuOpen(false); // Close the WhatsApp submenu when SMS submenu is opened
  };

  const toggleBuyPlan = () =>{
    setSubMenuOpen(false); // Close the WhatsApp submenu when SMS submenu is opened
    setSmsSubMenuOpen(false); // Close the SMS submenu when WhatsApp submenu is opened
            
  }

 const togglePayment = () =>{
  setSubMenuOpen(false); // Close the WhatsApp submenu when SMS submenu is opened
  setSmsSubMenuOpen(false); // Close the SMS submenu when WhatsApp submenu is opened
 }

 const toggleSupport = () =>{
     
  setSubMenuOpen(false); // Close the WhatsApp submenu when SMS submenu is opened
  setSmsSubMenuOpen(false); // Close the SMS submenu when WhatsApp submenu is opened

 }


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
                  <span className={`menu-arrow ${isSubMenuOpen ? 'rotate-down' : ''}`}></span>
                </Link>
                {isSubMenuOpen && (
                  <ul>
                    <li>
                      <Link to="/robotics">Whatsapp Robotics</Link>
                    </li>
                    <li>
                      <Link to="/officialpage">Whatsapp Official</Link>
                    </li>
                    <li>
                      <Link to="/twilliopage">Whatsapp Twillio</Link>
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
                  <span className={`menu-arrow ${isSmsSubMenuOpen ? 'rotate-down' : ''}`}></span>
                </Link>
                {isSmsSubMenuOpen && (
                  <ul>
                    <li>
                      <Link to="/bulkmailingpage">Bulk Mailing</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="submenu" onClick={()=>toggleBuyPlan()}>
                <Link to="/buyplanpage">
                  <img src={sales1} alt="" />
                  <span>Buy Plan</span>
                  <span className="menu-arrow"></span>
                </Link>
              </li>
              <li className="submenu" onClick={()=>togglePayment()}>
                <Link to="/paymentpage">
                  <img src={sales1} alt="" />
                  <span>Payment</span>
                  <span className="menu-arrow"></span>
                </Link>
              </li>
              <li className="submenu" onClick={()=>toggleSupport()}>
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
