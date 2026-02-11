import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BrowseByCategory = () => {
    useEffect(() => {
      AOS.init()
    })
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i
                className="fa fa-image"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
              ></i>
              <span data-aos="fade-left" data-aos-easing="ease-in-out">
                Art
              </span>
            </Link>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i
                className="fa fa-music"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
              ></i>
              <span data-aos="fade-left" data-aos-easing="ease-in-out">
                Music
              </span>
            </Link>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i
                className="fa fa-search"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
              ></i>
              <span data-aos="fade-left" data-aos-easing="ease-in-out">
                Domain Names
              </span>
            </Link>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i
                className="fa fa-globe"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
              ></i>
              <span data-aos="fade-left" data-aos-easing="ease-in-out">
                Virtual Worlds
              </span>
            </Link>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i
                className="fa fa-vcard"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
              ></i>
              <span data-aos="fade-left" data-aos-easing="ease-in-out">
                Trading Cards
              </span>
            </Link>
          </div>
          <div
            className="col-md-2 col-sm-4 col-6 mb-sm-30"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="500"
          >
            <Link to="/explore" className="icon-box style-2 rounded">
              <i
                className="fa fa-th"
                data-aos="fade-left"
                data-aos-easing="ease-in-out"
              ></i>
              <span data-aos="fade-left" data-aos-easing="ease-in-out">
                Collectibles
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
