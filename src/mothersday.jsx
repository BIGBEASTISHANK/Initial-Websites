import React from "react";
import mothersday_image from "../src/Img/mothersday_image.png";

const mothersday = () => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name"> Happy Mother's Day </strong>
                  </h1>
                  <h2 className="my-3 mb-5">
                    You are the best Mother in the world. I shout on you a lot because I love you. Your the best
                  </h2>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img src={mothersday_image} className="img-fluid animated" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default mothersday;
