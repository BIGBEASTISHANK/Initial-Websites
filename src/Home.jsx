import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Img/logo.png";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Update!
                    <strong className="brand-name"> New website found! </strong>
                  </h1>
                  <h2 className="my-3">
                    The owner of this website has switch to another language "Python". So this website will not recive any futher updates. All the content is still up on the website. If you want to see new website please check the link below.
                  </h2>
                  <div className="mt-3 mb-5">
                    <a href="https://bigbeastishank.herokuapp.com" className="btn-main">
                      Updated Website
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <NavLink to="./owner">
                    <img src={logo} className="img-fluid animated" alt="..." />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
