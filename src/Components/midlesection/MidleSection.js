import React from 'react'
import img1 from "../images/partner/style2/1.png"
import img2 from "../images/partner/style2/2.png"
import img3 from "../images/partner/style2/3.png"
import img4 from "../images/partner/style2/4.png"
import img5 from "../images/partner/style2/5.png"
import img6 from "../images/partner/style2/6.png"
import img7 from "../images/partner/style2/7.png"
import img8 from "../images/partner/style2/8.png"
// import img9 from "./images/partner/style2/9.png"
import main1 from "../images/services/style3/main-img/1.png"
import main2 from "../images/services/style3/main-img/2.png"
import main3 from "../images/services/style3/main-img/3.png"
import main4 from "../images/services/style3/main-img/4.png"
// hover img
import hover1 from "../images/services/style3/hover-img/1.png"
import hover2 from "../images/services/style3/hover-img/2.png"
import hover3 from "../images/services/style3/hover-img/3.png"
import hover4 from "../images/services/style3/hover-img/4.png"
//
import about5 from "../images/about/about-5.png"
//
import main1A from "../images/services/style2/main-img/1.png"
import main2A from "../images/services/style2/main-img/2.png"
import main3A from "../images/services/style2/main-img/3.png"
import main4A from "../images/services/style2/main-img/4.png"
import main5A from "../images/services/style2/main-img/5.png"
import main6A from "../images/services/style2/main-img/6.png"
// hover img
import hover1A from "../images/services/style2/hover-img/1.png"
import hover2A from "../images/services/style2/hover-img/2.png"
import hover3A from "../images/services/style2/hover-img/3.png"
import hover4A from "../images/services/style2/hover-img/4.png"
import hover5A from "../images/services/style2/hover-img/5.png"
import hover6A from "../images/services/style2/hover-img/6.png"
// Choose us img 
import choose2 from "../images/choose/2.png"
import dotted2 from "../images/choose/dotted-2.png"
import dotted1 from "../images/choose/dotted-1.png"
// choose icons img 
import icons1 from "../images/choose/icons/style2/1.png"
import icons2 from "../images/choose/icons/style2/2.png"
import icons3 from "../images/choose/icons/style2/3.png"
//
import mainHome1 from "../images/blog/main-home/1.jpg"
import mainHome2 from "../images/blog/main-home/2.jpg"
import mainHome3 from "../images/blog/main-home/3.jpg"
import mainHome4 from "../images/blog/main-home/4.jpg"
import mainHome5 from "../images/blog/main-home/5.jpg"
import mainHome6 from "../images/blog/main-home/6.jpg"
//
import quote2 from "../images/testimonial/main-home/quote2.png"
import girl from "../images/testimonial/main-home/1.jpg"
//
import testimonial3 from "../images/testimonial/main-home/3.jpg"
import testimonial2 from "../images/testimonial/testimonial-2.png"

const MidleSection = () => {
    return (
        <>
            {/* Partner Start */}
            <div className="rs-partner style2 pt-50 pb-50">
                <div className="container">

                    <div
                        className="rs-carousel owl-carousel"
                        data-loop="true"
                        data-items={5}
                        data-margin={30}
                        data-autoplay="true"
                        data-hoverpause="true"
                        data-autoplay-timeout={5000}
                        data-smart-speed={800}
                        data-dots="false"
                        data-nav="false"
                        data-nav-speed="false"
                        data-center-mode="false"
                        data-mobile-device={2}
                        data-mobile-device-nav="false"
                        data-mobile-device-dots="false"
                        data-ipad-device={4}
                        data-ipad-device-nav="false"
                        data-ipad-device-dots="false"
                        data-ipad-device2={3}
                        data-ipad-device-nav2="false"
                        data-ipad-device-dots2="false"
                        data-md-device={5}
                        data-md-device-nav="false"
                        data-md-device-dots="false"
                    >
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img1} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img2} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img3} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img4} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img5} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img6} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img7} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="">
                                    <img src={img8} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Partner End */}
            {/* About Section Start */}
            <div id="rs-about" className="rs-about pt-120 md-pt-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="sec-title mb-50">
                                <div className="sub-text style4-bg">About Us</div>
                                <h2 className="title pb-20">
                                    Over 25+ Years Helping Brands to Reach Full Potential
                                </h2>
                                <div className="desc">
                                    Over 25 years working in IT services developing software
                                    applications and mobile apps for clients all over the world. From
                                    its medieval origins to the digital era, learn everything there is
                                    to know about the ubiquitous lorem ipsum passage. Creation
                                    timelines for the standard lorem ipsum passage vary, with some
                                    citing the 15th century
                                </div>
                            </div>
                            {/* Counter Section Start */}
                            <div className="rs-counter style3">
                                <div className="container">
                                    <div className="counter-top-area">
                                        <div className="row">
                                            <div className="col-sm-6 sm-pr-0 sm-pl-0 xs-mb-30">
                                                <div className="counter-list">
                                                    <div className="counter-text">
                                                        <div className="count-number">
                                                            <span className="rs-count plus orange-color">
                                                                450
                                                            </span>
                                                        </div>
                                                        <h3 className="title">Happy Clients</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 sm-pr-0 sm-pl-0">
                                                <div className="counter-list">
                                                    <div className="counter-text">
                                                        <div className="count-number">
                                                            <span className="rs-count plus">750</span>
                                                        </div>
                                                        <h3 className="title">Project Delivered</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Counter Section End */}
                        </div>
                        <div className="col-lg-7">
                            {/* Services Section Start */}
                            <div className="rs-services style3 md-pt-50">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 pr-10 pt-40 sm-pt-0 sm-pr-0 sm-pl-0">
                                            <div className="services-item mb-20">
                                                <div className="services-icon">
                                                    <div className="image-part">
                                                        <img
                                                            className="main-img"
                                                            src={main1}
                                                            alt=""
                                                        />
                                                        <img
                                                            className="hover-img"
                                                            src={hover1}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="services-content">
                                                    <div className="services-text">
                                                        <h3 className="title">
                                                            <a href="web-development.html">High-quality Code</a>
                                                        </h3>
                                                    </div>
                                                    <div className="services-desc">
                                                        <p>
                                                            At vero eos et accusamus etiusto odio praesentium
                                                            accusamus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-item cyan-bg">
                                                <div className="services-icon">
                                                    <div className="image-part">
                                                        <img
                                                            className="main-img"
                                                            src={main2}
                                                            alt=""
                                                        />
                                                        <img
                                                            className="hover-img"
                                                            src={hover2}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="services-content">
                                                    <div className="services-text">
                                                        <h3 className="title">
                                                            <a href="web-development.html">Full-stack teams</a>
                                                        </h3>
                                                    </div>
                                                    <div className="services-desc">
                                                        <p>
                                                            At vero eos et accusamus etiusto odio praesentium
                                                            accusamus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 pl-10 sm-pr-0 sm-pl-0 sm-mt-20">
                                            <div className="services-item gold-bg mb-20">
                                                <div className="services-icon">
                                                    <div className="image-part">
                                                        <img
                                                            className="main-img"
                                                            src={main3}
                                                            alt=""
                                                        />
                                                        <img
                                                            className="hover-img"
                                                            src={hover3}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="services-content">
                                                    <div className="services-text">
                                                        <h3 className="title">
                                                            <a href="web-development.html">Agile Approach</a>
                                                        </h3>
                                                    </div>
                                                    <div className="services-desc">
                                                        <p>
                                                            At vero eos et accusamus etiusto odio praesentium
                                                            accusamus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="services-item blue-bg">
                                                <div className="services-icon">
                                                    <div className="image-part">
                                                        <img
                                                            className="main-img"
                                                            src={main4}
                                                            alt=""
                                                        />
                                                        <img
                                                            className="hover-img"
                                                            src={hover4}
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="services-content">
                                                    <div className="services-text">
                                                        <h3 className="title">
                                                            <a href="web-development.html">High-quality Code</a>
                                                        </h3>
                                                    </div>
                                                    <div className="services-desc">
                                                        <p>
                                                            At vero eos et accusamus etiusto odio praesentium
                                                            accusamus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Services Section End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section End */}
            {/* About Section Start */}
            <div className="rs-about style2 modify1 pt-120 pb-120 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 hidden-md">
                            <div className="images">
                                <img src={about5} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-60 md-pl-15">
                            <div className="sec-title mb-30">
                                <div className="sub-text style4-bg">About Us</div>
                                <h2 className="title pb-20">
                                    We Are Increasing Business Success With Technology
                                </h2>
                                <div className="desc">
                                    Over 25 years working in IT services developing software
                                    applications and mobile apps for clients all over the world.
                                </div>
                            </div>
                            {/* Skillbar Section Start */}
                            <div className="rs-skillbar style1 home4">
                                <div className="cl-skill-bar">
                                    {/* Start Skill Bar */}
                                    <span className="skillbar-title">Software Development</span>
                                    <div className="skillbar" data-percent={92}>
                                        <p className="skillbar-bar" />
                                        <span className="skill-bar-percent" />
                                    </div>
                                    {/* Start Skill Bar */}
                                    <span className="skillbar-title">Cyber Security</span>
                                    <div className="skillbar" data-percent={80}>
                                        <p className="skillbar-bar paste-bg" />
                                        <span className="skill-bar-percent" />
                                    </div>
                                    {/* Start Skill Bar */}
                                    <span className="skillbar-title">Artificial Intelligence</span>
                                    <div className="skillbar" data-percent={95}>
                                        <p className="skillbar-bar blue-bg" />
                                        <span className="skill-bar-percent" />
                                    </div>
                                    {/* Start Skill Bar */}
                                    <span className="skillbar-title">Web Development</span>
                                    <div className="skillbar" data-percent={78}>
                                        <p className="skillbar-bar pink-bg" />
                                        <span className="skill-bar-percent" />
                                    </div>
                                    <div className="btn-part mt-45">
                                        <a className="readon started" href="contact.html">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Skillbar Section End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* About Section End */}
            {/* Services Section Start */}
            <div className="rs-services style3 rs-rain-animate gray-color pt-120 pb-120 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="row md-mb-60">
                        <div className="col-lg-6 mb-60 md-mb-20">
                            <div className="sec-title2 md-center">
                                <span className="sub-text">Services</span>
                                <h2 className="title testi-title">
                                    What Solutions We Provide to Our Valued Customers
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-60 md-mb-0">
                            <div className="btn-part text-right mt-60 md-mt-0 md-center">
                                <a className="readon started" href="web-development.html">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-20">
                            <div className="services-item">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img
                                            className="main-img"
                                            src={main1A}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={hover1A}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="title">
                                            <a href="software-development.html">Software Development</a>
                                        </h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus
                                            etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                    <div className="serial-number">01</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-20">
                            <div className="services-item pink-bg">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img
                                            className="main-img"
                                            src={main2A}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={hover2A}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="title">
                                            <a href="web-development.html">Web Development</a>
                                        </h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus
                                            etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                    <div className="serial-number">02</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-20">
                            <div className="services-item aqua-bg">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img
                                            className="main-img"
                                            src={main3A}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={hover3A}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="title">
                                            <a href="analytic-solutions.html">Analytic Solutions</a>
                                        </h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus
                                            etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                    <div className="serial-number">03</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 md-mb-20">
                            <div className="services-item paste-bg">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img
                                            className="main-img"
                                            src={main4A}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={hover4A}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="title">
                                            <a href="cloud-and-devops.html">Clould &amp; DevOps</a>
                                        </h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus
                                            etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                    <div className="serial-number">04</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 sm-mb-20">
                            <div className="services-item blue-bg">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img
                                            className="main-img"
                                            src={main5A}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={hover5A}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="title">
                                            <a href="product-design.html">Product &amp; Design</a>
                                        </h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus
                                            etiusto odio data center for managing database.
                                        </p>x
                                    </div>
                                    <div className="serial-number">05</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="services-item green-bg">
                                <div className="services-icon">
                                    <div className="image-part">
                                        <img
                                            className="main-img"
                                            src={main6A}
                                            alt=""
                                        />
                                        <img
                                            className="hover-img"
                                            src={hover6A}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="services-content">
                                    <div className="services-text">
                                        <h3 className="title">
                                            <a href="data-center.html">Data Center</a>
                                        </h3>
                                    </div>
                                    <div className="services-desc">
                                        <p>
                                            At vero eos et accusamus etiusto odio praesentium accusamus
                                            etiusto odio data center for managing database.
                                        </p>
                                    </div>
                                    <div className="serial-number">06</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-inner">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
            {/* Services Section End */}
            {/* Choose Section Start */}
            <div className="rs-why-choose pt-120 pb-120 md-pt-70 md-pb-75">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 hidden-md">
                            <div className="image-part">
                                <img src={choose2} alt="" />
                            </div>
                            <div className="animation style2">
                                <div className="top-shape">
                                    <img
                                        className="dance"
                                        src={dotted2}
                                        alt="images"
                                    />
                                </div>
                                <div className="bottom-shape">
                                    <img
                                        className="dance2"
                                        src={dotted1}
                                        alt="images"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-60 md-pl-15">
                            <div className="sec-title mb-40">
                                <div className="sub-text style4-bg left">Why Choose Us</div>
                                <h2 className="title pb-20">
                                    We Create Result-Oriented Dynamic Applications
                                </h2>
                                <div className="desc">
                                    Over 25 years working in IT services developing software
                                    applications and mobile apps for clients all over the world.
                                </div>
                            </div>
                            <div className="services-wrap mb-25">
                                <div className="services-icon">
                                    <img src="assets/images/choose/icons/1.png" alt="" />
                                </div>
                                <div className="services-text">
                                    <h3 className="title">
                                        <a href="#">First Growing Process</a>
                                    </h3>
                                    <p className="services-txt">
                                        {" "}
                                        At vero eos et accusamus etiusto odio praesentium.
                                    </p>
                                </div>
                            </div>
                            <div className="services-wrap mb-25">
                                <div className="services-icon">
                                    <img src="assets/images/choose/icons/2.png" alt="" />
                                </div>
                                <div className="services-text">
                                    <h3 className="title">
                                        <a href="#">Clean code</a>
                                    </h3>
                                    <p className="services-txt">
                                        {" "}
                                        At vero eos et accusamus etiusto odio praesentium.
                                    </p>
                                </div>
                            </div>
                            <div className="services-wrap">
                                <div className="services-icon">
                                    <img src="assets/images/choose/icons/3.png" alt="" />
                                </div>
                                <div className="services-text">
                                    <h3 className="title">
                                        <a href="#">Well Documentation</a>
                                    </h3>
                                    <p className="services-txt">
                                        {" "}
                                        At vero eos et accusamus etiusto odio praesentium.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Choose Section End */}
            {/* Choose Section Start */}
            <div className="rs-why-choose style2 gray-color rs-rain-animate pt-120 pb-120 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 md-mb-30">
                            <div className="sec-title mb-40">
                                <div className="sub-text style4-bg left">Let's Talk</div>
                                <h2 className="title pb-20">Speak With Expert Engineers.</h2>
                                <div className="desc">
                                    From its medieval origins to the digital era, learn everything
                                    there
                                    <br />
                                    is to know about the ubiquitous lorem ipsum passage.
                                </div>
                            </div>
                            <div className="services-wrap mb-25">
                                <div className="services-icon">
                                    <img src={icons1} alt="img" />
                                </div>
                                <div className="services-text">
                                    <h3 className="title">
                                        <a href="#">Email</a>
                                    </h3>
                                    <p className="services-txt">support@rstheme.com</p>
                                </div>
                            </div>
                            <div className="services-wrap mb-25">
                                <div className="services-icon">
                                    <img src={icons2} alt="" />
                                </div>
                                <div className="services-text">
                                    <h3 className="title">
                                        <a href="#">Call Us</a>
                                    </h3>
                                    <p className="services-txt"> (+01) 555 - 9811 - 444</p>
                                </div>
                            </div>
                            <div className="services-wrap">
                                <div className="services-icon">
                                    <img src={icons3} alt="" />
                                </div>
                                <div className="services-text">
                                    <h3 className="title">
                                        <a href="#">Office Address</a>
                                    </h3>
                                    <p className="services-txt">
                                        374 FA Tower, William S Blvd
                                        <br /> 2721, IL, USA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="rs-contact mod1">
                                <div className="contact-wrap">
                                    <div className="content-part mb-25">
                                        <h2 className="title mb-15">Schedule Appointment</h2>
                                        <p className="desc">We here to help you 24/7 with experts</p>
                                    </div>
                                    <div id="appointment-messages" />
                                    <form
                                        id="appointment-form"
                                        method="post"
                                        action="../../../../external.html?link=https://rstheme.com/products/html/braintech/appointment.php"
                                    >
                                        <fieldset>
                                            <div className="row">
                                                <div className="col-lg-12 mb-15">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="appointment_name"
                                                        name="appointment_name"
                                                        placeholder="Name"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-lg-12 mb-15">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="appointment_email"
                                                        name="appointment_email"
                                                        placeholder="E-Mail"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-lg-12 mb-15">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="appointment_phone"
                                                        name="appointment_phone"
                                                        placeholder="Phone Number"
                                                        required=""
                                                    />
                                                </div>
                                                <div className="col-lg-12 mb-25">
                                                    <input
                                                        className="from-control"
                                                        type="text"
                                                        id="appointment_website"
                                                        name="appointment_website"
                                                        placeholder="Your Website"
                                                        required=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group mb-0">
                                                <input
                                                    className="submit-btn"
                                                    type="submit"
                                                    defaultValue="Submit Now"
                                                />
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-inner">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
            {/* Choose Section End */}
            {/* Blog Section Start */}
            <div id="rs-blog" className="rs-blog pt-120 pb-120 md-pt-70 md-pb-80">
                <div className="container">
                    <div className="sec-title2 text-center mb-30">
                        <span className="sub-text">Blogs</span>
                        <h2 className="title testi-title">Latest Tips &amp;Tricks</h2>
                        <div className="desc">
                            We've been building creative tools together for over a decade and have
                            a deep appreciation for software applications
                        </div>
                    </div>
                    <div
                        className="rs-carousel owl-carousel"
                        data-loop="true"
                        data-items={3}
                        data-margin={30}
                        data-autoplay="true"
                        data-hoverpause="true"
                        data-autoplay-timeout={5000}
                        data-smart-speed={800}
                        data-dots="false"
                        data-nav="false"
                        data-nav-speed="false"
                        data-center-mode="false"
                        data-mobile-device={1}
                        data-mobile-device-nav="false"
                        data-mobile-device-dots="false"
                        data-ipad-device={2}
                        data-ipad-device-nav="false"
                        data-ipad-device-dots="false"
                        data-ipad-device2={2}
                        data-ipad-device-nav2="false"
                        data-ipad-device-dots2="false"
                        data-md-device={3}
                        data-md-device-nav="false"
                        data-md-device-dots="false"
                    >
                        <div className="blog-item">
                            <div className="image-wrap">
                                <a href="blog-details.htm">
                                    <img src={mainHome1} alt="" />
                                </a>
                                <ul className="post-categories">
                                    <li>
                                        <a href="blog-details.html">Software Development</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="date">
                                        <i className="fa fa-calendar-check-o" /> 16 Nov 2020
                                    </li>
                                    <li className="admin">
                                        <i className="fa fa-user-o" /> admin
                                    </li>
                                </ul>
                                <h3 className="blog-title">
                                    <a href="blog-details.html">
                                        Necessity May Give Us Your Best Virtual Court System
                                    </a>
                                </h3>
                                <p className="desc">
                                    We denounce with righteous indige nation and dislike men who are
                                    so beguiled...
                                </p>
                                <div className="blog-button">
                                    <a href="blog-details.html">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="image-wrap">
                                <a href="blog-details.htm">
                                    <img src={mainHome2} alt="" />
                                </a>
                                <ul className="post-categories">
                                    <li>
                                        <a href="blog-details.html"> Web Development</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="date">
                                        <i className="fa fa-calendar-check-o" /> 20 December 2020
                                    </li>
                                    <li className="admin">
                                        <i className="fa fa-user-o" /> admin
                                    </li>
                                </ul>
                                <h3 className="blog-title">
                                    <a href="blog-details.html">
                                        Tech Products That Makes Its Easier to Stay at Home
                                    </a>
                                </h3>
                                <p className="desc">
                                    We denounce with righteous indige nation and dislike men who are
                                    so beguiled...
                                </p>
                                <div className="blog-button">
                                    <a href="blog-details.html">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="image-wrap">
                                <a href="blog-details.htm">
                                    <img src={mainHome3} alt="" />
                                </a>
                                <ul className="post-categories">
                                    <li>
                                        <a href="blog-details.html">It Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="date">
                                        <i className="fa fa-calendar-check-o" /> 22 December 2020
                                    </li>
                                    <li className="admin">
                                        <i className="fa fa-user-o" /> admin
                                    </li>
                                </ul>
                                <h3 className="blog-title">
                                    <a href="blog-details.html">
                                        Open Source Job Report Show More Openings Fewer
                                    </a>
                                </h3>
                                <p className="desc">
                                    We denounce with righteous indige nation and dislike men who are
                                    so beguiled...
                                </p>
                                <div className="blog-button">
                                    <a href="blog-details.html">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="image-wrap">
                                <a href="blog-details.htm">
                                    <img src={mainHome4} alt="" />
                                </a>
                                <ul className="post-categories">
                                    <li>
                                        <a href="blog-details.html">Artifical Intelligence</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="date">
                                        <i className="fa fa-calendar-check-o" /> 26 December 2020
                                    </li>
                                    <li className="admin">
                                        <i className="fa fa-user-o" /> admin
                                    </li>
                                </ul>
                                <h3 className="blog-title">
                                    <a href="blog-details.html">
                                        Types of Social Proof What its Makes Them Effective
                                    </a>
                                </h3>
                                <p className="desc">
                                    We denounce with righteous indige nation and dislike men who are
                                    so beguiled...
                                </p>
                                <div className="blog-button">
                                    <a href="blog-details.html">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="image-wrap">
                                <a href="blog-details.htm">
                                    <img src={mainHome5} alt="" />
                                </a>
                                <ul className="post-categories">
                                    <li>
                                        <a href="blog-details.html">Digital Technology</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="date">
                                        <i className="fa fa-calendar-check-o" /> 28 December 2020
                                    </li>
                                    <li className="admin">
                                        <i className="fa fa-user-o" /> admin
                                    </li>
                                </ul>
                                <h3 className="blog-title">
                                    <a href="blog-details.html">
                                        Tech Firms Support Huawei Restriction, Balk at Cost
                                    </a>
                                </h3>
                                <p className="desc">
                                    We denounce with righteous indige nation and dislike men who are
                                    so beguiled...
                                </p>
                                <div className="blog-button">
                                    <a href="blog-details.html">Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="image-wrap">
                                <a href="blog-details.htm">
                                    <img src={mainHome6} alt="" />
                                </a>
                                <ul className="post-categories">
                                    <li>
                                        <a href="blog-details.html">It Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="blog-content">
                                <ul className="blog-meta">
                                    <li className="date">
                                        <i className="fa fa-calendar-check-o" /> 30 December 2020
                                    </li>
                                    <li className="admin">
                                        <i className="fa fa-user-o" /> admin
                                    </li>
                                </ul>
                                <h3 className="blog-title">
                                    <a href="blog-details.html">
                                        Servo Project Joins The Linux Foundation Fold Desco
                                    </a>
                                </h3>
                                <p className="desc">
                                    We denounce with righteous indige nation and dislike men who are
                                    so beguiled...
                                </p>
                                <div className="blog-button">
                                    <a href="blog-details.html">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog Section End */}
            {/* Testimonial Section Start */}
            <div className="rs-testimonial main-home rs-rain-animate style4 gray-color modify1 md-fixing">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 hidden-md">
                            <div className="testi-image">
                                <img
                                //  src="assets/images/testimonial/testimonial-2.png" 
                                src={testimonial2}
                                 alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pl-50 md-pl-15">
                            <div className="sec-title mb-50">
                                <div className="sub-text style4-bg left testi">Testimonials</div>
                                <h2 className="title pb-20">What Customer Saying</h2>
                                <div className="desc">
                                    Over 25 years working in IT services developing software
                                    applications and mobile apps for clients all over the world.
                                </div>
                            </div>
                            <div
                                className="rs-carousel owl-carousel"
                                data-loop="true"
                                data-items={1}
                                data-margin={30}
                                data-autoplay="true"
                                data-hoverpause="true"
                                data-autoplay-timeout={5000}
                                data-smart-speed={800}
                                data-dots="true"
                                data-nav="false"
                                data-nav-speed="false"
                                data-md-device={1}
                                data-md-device-nav="false"
                                data-md-device-dots="false"
                                data-center-mode="false"
                                data-ipad-device2={1}
                                data-ipad-device-nav2="false"
                                data-ipad-device-dots2="false"
                                data-ipad-device={1}
                                data-ipad-device-nav="false"
                                data-ipad-device-dots="true"
                                data-mobile-device={1}
                                data-mobile-device-nav="false"
                                data-mobile-device-dots="false"
                            >
                                <div className="testi-item">
                                    <div className="author-desc">
                                        <div className="desc">
                                            <img
                                                className="quote"
                                                // src="assets/images/testimonial/main-home/quote2.png"
                                                src={quote2}
                                                alt=""
                                            />
                                            Capitalize on low hanging fruit to identify a ballpark value
                                            added activity to beta test. Override the digital divide with
                                            additional clickthroughs from DevOps. Nanotechnology immersion
                                            along the information highway.
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="author-img">
                                            <img
                                                //  src="assets/images/testimonial/main-home/1.jpg" 
                                                src={girl}
                                                alt="" />
                                        </div>
                                        <div className="author-part">
                                            <a className="name" href="#">
                                                Mariya Khan
                                            </a>
                                            <span className="designation">CEO, Brick Consulting</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testi-item">
                                    <div className="author-desc">
                                        <div className="desc">
                                            <img
                                                className="quote"
                                                // src="assets/images/testimonial/main-home/quote2.png"
                                                src={quote2}
                                                alt=""
                                            />
                                            Capitalize on low hanging fruit to identify a ballpark value
                                            added activity to beta test. Override the digital divide with
                                            additional clickthroughs from DevOps. Nanotechnology immersion
                                            along the information highway.
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="author-img">
                                            <img
                                                // src="assets/images/testimonial/main-home/2.jpg"
                                                src={mainHome2}
                                                alt="" />
                                        </div>
                                        <div className="author-part">
                                            <a className="name" href="#">
                                                Sonia Akther
                                            </a>
                                            <span className="designation">CEO, Keen IT Solution</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testi-item">
                                    <div className="author-desc">
                                        <div className="desc">
                                            <img
                                                className="quote"
                                                // src="assets/images/testimonial/main-home/quote2.png"
                                                src={quote2}
                                                alt=""
                                            />
                                            Capitalize on low hanging fruit to identify a ballpark value
                                            added activity to beta test. Override the digital divide with
                                            additional clickthroughs from DevOps. Nanotechnology immersion
                                            along the information highway.
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="author-img">
                                            <img
                                            //  src="assets/images/testimonial/main-home/3.jpg" 
                                            src={testimonial3}
                                             alt="" />
                                        </div>
                                        <div className="author-part">
                                            <a className="name" href="#">
                                                Felando
                                            </a>
                                            <span className="designation">Web Developer</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="testi-item">
                                    <div className="author-desc">
                                        <div className="desc">
                                            <img
                                                className="quote"
                                                // src="assets/images/testimonial/main-home/quote2.png"
                                                src={quote2}
                                                alt=""
                                            />
                                            Capitalize on low hanging fruit to identify a ballpark value
                                            added activity to beta test. Override the digital divide with
                                            additional clickthroughs from DevOps. Nanotechnology immersion
                                            along the information highway.
                                        </div>
                                    </div>
                                    <div className="testimonial-content">
                                        <div className="author-img">
                                            <img src="assets/images/testimonial/main-home/4.jpg" alt="" />
                                        </div>
                                        <div className="author-part">
                                            <a className="name" href="#">
                                                Neymar Vuya
                                            </a>
                                            <span className="designation">Arist</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line-inner">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
            {/* Testimonial Section End */}
            {/* Partner Start */}
            <div className="rs-partner pt-80 pb-70">
                <div className="container">
                    <div
                        className="rs-carousel owl-carousel"
                        data-loop="true"
                        data-items={5}
                        data-margin={30}
                        data-autoplay="true"
                        data-hoverpause="true"
                        data-autoplay-timeout={5000}
                        data-smart-speed={800}
                        data-dots="false"
                        data-nav="false"
                        data-nav-speed="false"
                        data-center-mode="false"
                        data-mobile-device={2}
                        data-mobile-device-nav="false"
                        data-mobile-device-dots="false"
                        data-ipad-device={3}
                        data-ipad-device-nav="false"
                        data-ipad-device-dots="false"
                        data-ipad-device2={3}
                        data-ipad-device-nav2="false"
                        data-ipad-device-dots2="false"
                        data-md-device={5}
                        data-md-device-nav="false"
                        data-md-device-dots="false"
                    >
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/1.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/1.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/2.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/2.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/3.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/3.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/4.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/4.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/5.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/5.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/6.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/6.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/7.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/7.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/8.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/8.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="partner-item">
                            <div className="logo-img">
                                <a href="../../../../external.html?link=https://rstheme.com/">
                                    <img
                                        className="hover-logo"
                                        src="assets/images/partner/9.png"
                                        alt=""
                                    />
                                    <img
                                        className="main-logo"
                                        src="assets/images/partner/9.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Partner End */}
        </>

    )
}

export default MidleSection
