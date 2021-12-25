import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {storeProducts} from '../data';
import {ProductConsumer} from '../Context';

//state digunakan untuk menampung data-data dari props
class ProductList extends Component {
    
    render() {
       
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                  {/*fungsi map() digunakan untuk perulangan, perulangan map() harus menggunakan key atau akan error*/}
                                {value => {
                                    return value.products.map(product=> {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;