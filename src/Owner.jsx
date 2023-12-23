import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Img/logo.png";

const Owner = () => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    A Self-Taught Programmer, Freak
                    <strong className="brand-name"> BIG BEAST ISHANK </strong>
                  </h1>
                  <h2 className="my-3">
                    A 15 year old boy who is super interested in Software
                    Engineering.
                  </h2>
                  <div className="mt-3 mb-5">
                    <NavLink to="/about" className="btn-main">
                      About Me
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={logo} className="img-fluid animated" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Owner;
