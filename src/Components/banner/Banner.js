import React from 'react'
import banner4 from "../images/banner/banner-4.png"

const Banner = () => {
    return (
        <>
            {/* Banner Section Start */}
            <div className="rs-banner style3 rs-rain-animate modify1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-content">
                                <div className="rs-videos">
                                    <div className="animate-border white-color style3">
                                        <a
                                            className="popup-border popup-videos"
                                            href="https://www.youtube.com/watch?v=YLN1Argi7ik"
                                        >
                                            <i className="fa fa-play" />
                                        </a>
                                    </div>
                                </div>
                                <h1 className="title">
                                    We Are Digital Agency &amp; Technology Solution{" "}
                                </h1>
                                <p className="desc">
                                    We are leading technology solutions providing company all over the
                                    world doing over 40 years.
                                </p>
                                <ul className="banner-btn">
                                    <li>
                                        <a className="readon started" href="about.html">
                                            Get Started
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="images-part hidden-md">
                    <img src={banner4} className='img-fluid' alt="" />
                </div>
                <div className="line-inner style2">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
            </div>
            {/* Banner Section End */}
        </>

    )
}

export default Banner
