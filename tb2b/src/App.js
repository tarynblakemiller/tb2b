import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Room from "./pages/Room";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/:id" component={Room} />
          <Route path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
