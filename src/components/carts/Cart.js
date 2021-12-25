import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { ProductConsumer } from '../../Context';


class Cart extends Component {
    render() {
        return (
            <section>
                <React.Fragment>
                    <ProductConsumer>   
                        {value => {
                            const { cart } = value;
                            if (cart.length >0) {
                                return (
                                <div>
                                    <Title name="your" title="cart" />
                                    <CartColumns/>
                                    <CartList value={value} />
                                    <CartTotal value={value} history={this.props.history}/>
                                </div> 
                                );   
                            }
                            else {
                                return <EmptyCart/>;
                            }
                            
                        }}              
                    </ProductConsumer>
                </React.Fragment>  
            </section>
        );
    }
}

export default Cart;