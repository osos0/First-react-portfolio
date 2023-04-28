// import { Component, Fragment } from "react";
import "./Blog.css";

function Blog() {
  // console.log(Trans, setTrans);
  return (
    <>
      <section id="Blog">
        <h3 className="myser">
          My <span>Blog</span>
          <hr />
        </h3>

        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="col-12 cardCon">
                <div className="cardImg">
                  <img src={require("../img/1.jpg")} alt="BlogImg" />
                </div>
                <h4>Make Your Website</h4>
                <p>
                  {/* <span style={{ color: Trans }}>May 30, 2022</span> | Design */}
                  {/* <span style={{ color: cc }}>May 30, 2022</span> | Design */}
                  {/* <span className="testo colllll" onClick={colorChange}> */}
                  <span>May 30, 2022</span>| Design
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
                  <img src={require("../img/2.jpg")} alt="BlogImg" />
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
                  <img src={require("../img/3.jpg")} alt="BlogImg" />
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
      </section>
    </>
  );
}

export default Blog;
