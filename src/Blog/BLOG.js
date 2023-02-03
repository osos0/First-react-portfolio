import { Component, Fragment } from "react";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="myser">
          My <span>Blog</span>
          <hr />
        </h3>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="col-12 cardCon">
                <div className="cardImg">
                  <img src={require("../componants/img/1.jpg")} alt="BlogImg" />
                </div>
                <h4>Make Your Website</h4>
                <p>
                  <span>May 30, 2022</span> | Design
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  eveniet incidunt quidem illum repellat
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="col-12 cardCon">
                <div className="cardImg">
                  <img src={require("../componants/img/2.jpg")} alt="BlogImg" />
                </div>
                <h4>Make Your Website</h4>
                <p>
                  <span>May 30, 2022</span> | Design
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  eveniet incidunt quidem illum repellat
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="col-12 cardCon">
                <div className="cardImg">
                  <img src={require("../componants/img/3.jpg")} alt="BlogImg" />
                </div>
                <h4>Make Your Website</h4>
                <p>
                  <span>May 30, 2022</span> | Design
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                  eveniet incidunt quidem illum repellat
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Blog;
