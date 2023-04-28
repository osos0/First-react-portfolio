import { Component, Fragment } from "react";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <section id="PORTFOLIO">
          <h3 className="myser">
            My <span>PORTFOLIO</span>
            <hr />
          </h3>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-11 PorCon">
                    <img src={require("../img/11.jpg")} alt="panana" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-11 PorCon">
                    <img src={require("../img/11.jpg")} alt="panana" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-11 PorCon">
                    <img src={require("../img/11.jpg")} alt="panana" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-11 PorCon">
                    <img src={require("../img/11.jpg")} alt="panana" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-11 PorCon">
                    <img src={require("../img/11.jpg")} alt="panana" />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="row">
                  <div className="col-11 PorCon">
                    <img src={require("../img/11.jpg")} alt="panana" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row counConf">
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                <div className="row">
                  <div className="col-11 counConchild">
                    <h3>90+</h3>
                    <h5>Successul Projects</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                <div className="row">
                  <div className="col-11 counConchild">
                    <h3>510K</h3>
                    <h5>Successul Projects</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                <div className="row">
                  <div className="col-11 counConchild">
                    <h3>510K</h3>
                    <h5>Successul Projects</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2">
                <div className="row">
                  <div className="col-11 counConchild">
                    <h3>510K</h3>
                    <h5>Successul Projects</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a id="upbtn" href="#nave">
            <button>UP</button>
          </a>
        </section>
      </Fragment>
    );
  }
}

export default Portfolio;
