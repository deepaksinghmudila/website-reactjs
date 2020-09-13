import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg:"",
  });
  
  const InputEvent = (event) => {
    const { name, value } = event.target;
    
    setData( (preVal) => {
      return {
        ...preVal,
        [name]:value,
      };  
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname} ${data.email} 
    ${data.phone} ${data.msg}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder=" Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder=" Enter your mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder=" Enter your email"
                />
              </div>            ￼
              <div class="mb-3">
                <label for="exampleControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea                      
                  className="form-control"                   
                  rows="3"
                  name="message"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
