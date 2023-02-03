import { Component, Fragment } from "react";
import "./ContactUs.css";

class Contactus extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="myser">
          My <span>Blog</span>
          <hr />
        </h3>
        <div className="container">
          <div className="row contactCon">
            <div className="col-md-4 col-sm-12 contactChild">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required="required"
              />
            </div>
            <div className="col-md-4 col-sm-12 contactChild">
              <input
                type="text"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="col-md-4 col-sm-12 contactChild">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required="required"
              />
            </div>
            <div className="col-md-12 textareaCon">
              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required="required"
              ></textarea>
            </div>
            <button id="sendbtn" type="">
              Send Message
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Contactus;
