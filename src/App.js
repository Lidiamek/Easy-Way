import React from "react";
///import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="/" className="brand">
              {" "}
              <img src="https://img.icons8.com/ios-filled/50/000000/checkout.png" />{" "}
              Easy Way{" "}
            </a>
          </div>

          <div className="Cart-signin-padding">
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>

        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>

        <footer className="row center">
          {" "}
          <div>All right reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
