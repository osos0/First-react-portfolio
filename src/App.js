import { Component, Fragment } from "react";
import About from "./componants/About/About";
import Header from "./componants/header/Header";
import Experianse from "./componants/Experianse/Experianse";
import Portfolio from "./componants/portfolio/portfolio";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
        <Experianse />
        <Portfolio />
      </Fragment>
    );
  }
}

export default App;
