import React, { Component } from "react";
//import PayPalButton from "./PayPalButton";
import { Link } from "react-router-dom";

export default class CartTotal extends Component {
  render() {
    const { cartSubTotal, cartTax, cartTotal, cart, clearCart } = this.props.value;
    const { history } = this.props;
    const emptyCart = cart.length === 0 ? true : false;

    return (
      <React.Fragment>
        {!emptyCart && (
          <div className="container ">
            <div className="row ">
              <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/" >
                  <button className="btn btn-outline-danger mb-3 px-5 text-capitalize" type="button"
                    onClick={() => {
                      clearCart();
                    }}>
                    clear cart
                  </button>
                </Link>
                <div className="row ">
                  <div className="col-sm-2">
                    <h5><span> subtotal :</span> {" "} </h5>
                  </div>
                  <div className="col-sm-4">
                    <h5><strong>$ {cartSubTotal} </strong></h5>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm-2">
                    <h5><span> tax :</span> {" "} </h5>
                  </div>
                  <div className="col-sm-4">
                    <h5><strong>$ {cartTax} </strong></h5>
                  </div>
                </div>

                <div className="row ">
                  <div className="col-sm-2">
                    <h5><span> total :</span> {" "} </h5>
                  </div>
                  <div className="col-sm-4">
                    <h5><strong>$ {cartTotal} </strong></h5>
                  </div>
                </div>                
              </div>
            </div>
          </div>
          
        )}
      </React.Fragment>
    );
  }
}
