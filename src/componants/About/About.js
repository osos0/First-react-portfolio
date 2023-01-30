import { Component, Fragment } from "react";

import "./About.css";

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
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                </div>
              </div>
              <div className="col-md-5">
                <img src={require("../img/banner.jpg")} />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default About;
