import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import inventory from "./inventory.ES6";
import ComposeSalad from "./components/ComposeSalad";
import ComposeSaladWrapper from "./components/ComposeSaladWrapper";
import ViewIngredient from "./components/ViewIngredient";


import ViewOrder from "./components/ViewOrder";
import { Link, Route, Routes } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCart: [],
    };
    this.addToCart = this.addToCart.bind(this);
    this.removeSalad = this.removeSalad.bind(this);
  } np

  addToCart(salad) {
    console.log("Retrieved salad: ", salad); // LOGS DATA FROM CHILD (ComposeSalad)
    this.setState((oldState) => ({
      shoppingCart: [...oldState.shoppingCart, salad],
    }));
  }

  removeSalad(salad) {
    console.log("Removing salad from App.js, with uuid: ", salad.uuid);
    let cart = this.state.shoppingCart;
    cart.splice(cart.indexOf(salad), 1);
    this.setState({ shoppingCart: cart });
    // this.setState((oldState) => ({
    //   shoppingCart: [...oldState.shoppingCart, cart],
    // }));
  }

  render() {
    return (
      <div className="container py-4">
        <header className="pb-3 mb-4 border-bottom">
          <span className="fs-4">Min egen salladsbar</span>
        </header>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="/">hjem</Link>
          <Link to="/compose-salad">komponera en sallad</Link>

          <Link to="/view-order">cart</Link>
        </div>
        <div className="col-12">
          <Routes>
            <Route path="/" element={<h1>Välkommen</h1>} />
            <Route path='/view-ingredient/:extra' element={<ViewIngredient
              inventory={inventory}
            />} />
            <Route path="/compose-salad" element={<ComposeSaladWrapper
              inventory={inventory}
              addToCart={this.addToCart}
            />} />
            <Route path="/view-order" element={<ViewOrder
              cart={this.state.shoppingCart}
              remove={this.removeSalad}
            ></ViewOrder>} />
          </Routes>
        </div>

        <footer className="pt-3 mt-4 text-muted border-top">
          EDAF90 - webprogrammering
        </footer>
      </div>
    );
  }
}

export default App;
