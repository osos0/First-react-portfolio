import { Component, Fragment } from "react";
import About from "./componants/About/About";
import Header from "./componants/header/Header";
import Experianse from "./componants/Experianse/Experianse";
import MyPortfolio from "./componants/portfolio/portfolio";
import Blog from "./componants/Blog/BLOG";
import Contactus from "./componants/Contact us/ContactUs";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Experianse />
        <MyPortfolio />
        <Blog />
        <Contactus />
      </Fragment>
    );
  }
}

export default App;
