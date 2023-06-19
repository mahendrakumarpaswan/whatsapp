import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Footer Start */}
    <footer id="rs-footer" className="rs-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 footer-widget">
              <div className="footer-logo mb-30">
                <a href="index.php">
                  <img src="assets/images/logo-dark.png" alt="" />
                </a>
              </div>
              <div className="textwidget pb-30">
                <p>
                  HTSM Technologies Pvt. Ltd. a web design and development company
                  in Kolkata has been providing professional website...
                  <a href="#.">View More</a>
                </p>
              </div>
              <ul className="footer-social md-mb-30">
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
            <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
              <h3 className="widget-title">MODULES</h3>
              <ul className="site-map">
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
                  <a href="sales-distribution.php">SALES &amp; DISTRIBUTION</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 pl-45 md-pl-15 md-mb-30">
              <h3 className="widget-title">INDUSTRIES</h3>
              <ul className="site-map">
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
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 md-mb-30">
              <h3 className="widget-title">Contact Info</h3>
              <ul className="address-widget">
                <li>
                  <i className="flaticon-location" />
                  <div className="desc">
                    Module No. 301, 3rd Floor, Tower-II, BN 9, Webel IT Park,
                    Sector V, Bidhannagar, Kolkata 700091
                  </div>
                </li>
                <li>
                  <i className="flaticon-call" />
                  <div className="desc">
                    <a href="tel:03341816636">033 41816636</a>
                  </div>
                </li>
                <li>
                  <i className="flaticon-email" />
                  <div className="desc">
                    <a href="mailto:support@wowerp.com">support@wowerp.com</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row y-middle">
            <div className="col-lg-6 text-right md-mb-10 order-last">
              <ul className="copy-right-menu">
                <li>
                  <a href="index.php">Home</a>
                </li>
                <li>
                  <a href="about-us.php">About Us</a>
                </li>
                <li>
                  <a href="solution.php">Solution</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Blog</a>
                </li>
                <li>
                  <a href="contact-us.php">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="copyright">
                <p>Copyright © 2022 wowero.com All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer End */}
    {/* start scrollUp  */}
    <div id="scrollUp" className="orange-color">
      <i className="fa fa-angle-up" />
    </div>
    {/* End scrollUp  */}
    {/* modernizr js */}
  </>
  
  )
}

export default Footer
