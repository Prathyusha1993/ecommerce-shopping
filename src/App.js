import React, { Component } from "react";
import { Provider } from "react-redux";
import Products from "./components/products";
import Filter from "./components/filter";
import Basket from "./components/basket";
import store from "./store";
import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h1>E-commerce Shopping Cart Application</h1>
          <hr />
          <div className="row">
            <div className="col-md-9">
              <Filter />
              <hr />
              <Products />
            </div>
            <div className="col-md-3">
              <Basket />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;