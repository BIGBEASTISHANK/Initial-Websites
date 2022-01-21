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
                    An Untold-Story of a Developer
                    <strong className="brand-name"> BIG BEAST ISHANK </strong>
                  </h1>
                  <h2 className="my-3">
                    <div className="contentabout">
                      Hi! I am <strong>Pranjal</strong> aka
                      <strong>BIG_BEAST_ISHANK</strong>. My intrest in
                      programming raise up in class 7, firstly I started
                      learning programming on school computer and from
                      <strong>YouTube</strong>. In year 2019 I got my first
                      computer and made an quiz app named
                      <strong>Quizard</strong>, it almost took me an year to
                      make the app but at the end I deleted the app not because
                      it was difficult because I was not satisfied. My app was
                      fully ready. Once I started <strong>Discord</strong> and a
                      friend of mine
                      <strong>
                        <a href="https://github.com/BruceMacGary">
                          BruceMacGary
                        </a>
                      </strong>
                      said that he is making a discord bot from there I started
                      doing projects on <strong>JavaScript</strong>.
                    </div>
                  </h2>
                  <div className="mt-3 mb-5">
                    <NavLink to="/project" className="btn-main">
                      My Projects
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

export default Home;
