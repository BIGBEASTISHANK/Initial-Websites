import React from "react";
import { NavLink } from "react-router-dom";
import error from "../src/Img/error.png";

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
                    <strong className="brand-name"> 404 Page not found </strong>
                  </h1>
                  <h2 className="my-3">
                    We could not find what you were looking for. Please contact
                    the owner of the site that linked you to the original URL
                    and let them know their link is broken.
                  </h2>
                  <div className="mt-3 mb-5">
                    <NavLink to="/" className="btn-main">
                      Go Back
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={error} className="img-fluid animated" alt="..." />
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
