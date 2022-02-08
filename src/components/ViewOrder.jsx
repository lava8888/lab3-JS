import { Component } from "react";
import ViewOrderCard from "./ViewOrderCard";

class ViewOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.removeSalad = this.removeSalad.bind(this);
  }

  // Återigen vill jag lyfta upp funktionen till App (längst upp) -- bind igen
  removeSalad(salad) {
    this.props.remove(salad);
  }

  render() {
    console.log("cart in ViewOrder: ", this.props.cart);

    let cart = this.props.cart;
    let proteins = [];
    let foundations = [];
    let extras = [];
    let dressings = [];
    let totalCost = 0;

    cart.forEach((salad) => {
      totalCost += salad.getPrice();
      let extrasForEachSalad = [];

      proteins.push(salad.proteins[0].name);
      foundations.push(salad.foundation[0].name);

      // Check if no extras are selected
      if (salad.extras.length === 0) {
        extras.push("No extra selected");
      } else if (salad.extras.ength !== 0) {
        for (let i = 0; i < salad.extras.length; i++) {
          extrasForEachSalad.push(salad.extras[i].name);
          if (i === salad.extras.length - 1) {
            extras.push(extrasForEachSalad);
          }
        }
      }

      dressings.push(salad.dressing[0].name);
    });

    return (
      <div className="h-200 p-5 bg-light border rounded-3 mt-3">
        <h2>Shopping cart</h2>
        {cart.length === 0 && <p>Your cart is currently empty</p>}
        {cart.length === 1 && <h4>Your salad:</h4>}
        {cart.length > 1 && <h4>Your salads:</h4>}
        {cart.map((salad, index) => (
          <ViewOrderCard
            key={salad.uuid}
            salad={salad}
            foundation={foundations[index]}
            protein={proteins[index]}
            extras={extras[index]}
            dressing={dressings[index]}
            remove={this.removeSalad}
          ></ViewOrderCard>
        ))}
        {cart.length > 0 && <h4>Total price: {totalCost}kr</h4>}
      </div>
    );
  }
}

export default ViewOrder;
