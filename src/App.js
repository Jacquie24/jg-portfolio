import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/Home/Home";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div className="App">
      <Header />
      <Router basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
      <Footer />
      </div>

  );
}

export default App;
