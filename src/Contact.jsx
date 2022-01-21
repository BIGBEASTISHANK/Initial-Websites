import React, { useState } from "react";

const Contact = () => {
  const [data, Setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    Setdata((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Your Name is ${data.fullname}. Your Mobile Number is ${data.phone}. Your Email is ${data.email} and your message is - ${data.msg}. This website is curently under construction.`
    );
  };

  return (
    <>
      <div className="middle">
        <div className="my-5">
          <h1 className="text-center"> Contact Us </h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="fullname"
                    value={data.fullname}
                    onChange={InputEvent}
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="phone"
                    value={data.phone}
                    onChange={InputEvent}
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                    value={data.email}
                    onChange={InputEvent}
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    name="msg"
                    value={data.msg}
                    onChange={InputEvent}
                    placeholder="Your Message"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-outline-primary mb-5"
                    type="submit"
                  >
                    Submit Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
