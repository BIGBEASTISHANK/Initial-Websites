import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Owner from "./Owner";
import Project from "./Project";
import Game from "./Game"; 
import Contact from "./Contact";
import Footer from "./Footer";
import Error from "./Error";
import mothersday from "./mothersday";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/owner" component={Owner} />
        <Route exact path="/about" component={About} />
        <Route exace path="/project" component={Project} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/mothersday" component={mothersday} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
