import React from 'react';
import "./dashboard.css";
import Error from '../../Components/error/Error';

//*******  common css file for dashboard design start *******//
import "../css/bootstrap.min.css";
import "../css/animate.css";
import "../css/dataTables.bootstrap4.min.css";
import "../plugins/fontawesome/css/fontawesome.min.css";
import "../plugins/fontawesome/css/all.min.css";
import "../css/style.css";
import "../css/custom.css";
//************ images path work *************/
import dash1 from "../image/icons/dash1.svg"
import dash2 from "../image/icons/dash2.svg"
import dash3 from "../image/icons/dash3.svg"
import dash4 from "../image/icons/dash4.svg"
//*******  common css for dashboard design file end *******//

import Navbar from '../navbar/Navbar';
import LeftBar from '../leftbar/LeftBar';

const MainDashboard = () => {
  return (
    <>
    {/* page loader start */}
    {/* <div id="global-loader">
      <div class="whirly-loader"> </div>
    </div> */}
    {/* page loader end */}
    
    {/* main wrapper start here */}
    {localStorage.getItem("user") == null?<div><Error/></div>: <div class="main-wrapper">
    
    
      {/************* body part start *************/}
      <div class="page-wrapper">
        <div class="content">
        <div class="row">
                      <div class="col-lg-3 col-sm-6 col-12">
                          <div class="dash-widget">
                              <div class="dash-widgetimg">
                                  <span><img src={dash1} alt='' /></span>
                              </div>
                              <div class="dash-widgetcontent">
                                  <h5>$<span class="counters"
                                          data-count="307144.00">$307,144.00</span></h5>
                                  <h6>Total Purchase Due</h6>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                          <div class="dash-widget dash1">
                              <div class="dash-widgetimg">
                                  <span><img src={dash2} alt='' /></span>
                              </div>
                              <div class="dash-widgetcontent">
                                  <h5>$<span class="counters"
                                          data-count="4385.00">$4,385.00</span></h5>
                                  <h6>Total Sales Due</h6>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                          <div class="dash-widget dash2">
                              <div class="dash-widgetimg">
                                  <span><img src={dash3} alt='' /></span>
                              </div>
                              <div class="dash-widgetcontent">
                                  <h5>$<span class="counters"
                                          data-count="385656.50">385,656.50</span></h5>
                                  <h6>Total Sale Amount</h6>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12">
                          <div class="dash-widget dash3">
                              <div class="dash-widgetimg">
                                  <span><img src={dash4} alt='' /></span>
                              </div>
                              <div class="dash-widgetcontent">
                                  <h5>$<span class="counters"
                                          data-count="40000.00">400.00</span></h5>
                                  <h6>Total Sale Amount</h6>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12 d-flex">
                          <div class="dash-count">
                              <div class="dash-counts">
                                  <h4>100</h4>
                                  <h5>Customers</h5>
                              </div>
                              <div class="dash-imgs">
                                  <i data-feather="user"></i>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12 d-flex">
                          <div class="dash-count das1">
                              <div class="dash-counts">
                                  <h4>100</h4>
                                  <h5>Suppliers</h5>
                              </div>
                              <div class="dash-imgs">
                                  <i data-feather="user-check"></i>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12 d-flex">
                          <div class="dash-count das2">
                              <div class="dash-counts">
                                  <h4>100</h4>
                                  <h5>Purchase Invoice</h5>
                              </div>
                              <div class="dash-imgs">
                                  <i data-feather="file-text"></i>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-3 col-sm-6 col-12 d-flex">
                          <div class="dash-count das3">
                              <div class="dash-counts">
                                  <h4>105</h4>
                                  <h5>Sales Invoice</h5>
                              </div>
                              <div class="dash-imgs">
                                  <i data-feather="file"></i>
                              </div>
                          </div>
                      </div>
                  </div>
        </div>
      </div>
      {/************* body part end *************/}
    </div>}
      {/* main wrapper end here */}
    </>
  )
}

export default MainDashboard
