import { Component, Fragment } from "react";

import "./About.css";
import cv from "../img/cv_Ossama_Magdy_Nessim.pdf";
// import { BsLinkedin } from "react-icons/bs";

class About extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="container">
            <div className="row ">
              <div className="col-md-7 welcomeCon">
                <h3>WELCOME!</h3>
                <h2>I Am Web DesignerWeb DeveloperPhotographer</h2>
                <p>
                  I'm a Web Developer with extensive experience for over 5
                  years. My expertise is to create and Websites design, graphic
                  design and many more...
                </p>
                <div className="linCon">
                  {/* <a href="https://www.linkedin.com/feed/">
                    <BsLinkedin />
                  </a> */}
                  <a href="https://www.facebook.com" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ossama-magdy-6b8a3b263/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ossama-magdy-6b8a3b263/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="https://github.com/osos0" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <img src={require("../img/banner.jpg")} alt="Profile" />
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="row AboutCon">
              <div className="col-md-5">
                <img src={require("../img/about.jpg")} alt="Profile" />
              </div>
              <div className="col-md-7 AboutConRi">
                <h2>I Am Ossama Magdy</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer tellus est, finibus ut congue sed, faucibus ut dui.
                  Sed congue nisl dolor, id dapibus leo elementum posuere. Ut
                  aliquam metus quis laoreet elementum. In hac habitasse platea
                  dictumst. In hac habitasse platea dictumst. Aliquam porta
                  faucibus arcu, et consequat velit vestibulum in. Donec quis
                  tellus ut urna volutpat posuere quis consectetur quam.
                </p>
                <p>
                  Name<span>-----------</span>: Ossama Magdy
                </p>
                <p>
                  Age<span>-------------</span>: 36
                </p>
                <p>
                  Address<span>---------</span>: Egypt, Cairo{" "}
                </p>
                <p>
                  Phone Number<span>--</span> : +00 111-222-3333
                </p>
                <p>
                  Email<span>-----------</span> : Example@gmail.com
                </p>
                <div className="myinfo">
                  <a href={cv} download>
                    <button>Download CV</button>
                  </a>
                  <a href="#contactUs">
                    <button>Let's Talk</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;
