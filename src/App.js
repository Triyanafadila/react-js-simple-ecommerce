import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Detail from './components/Detail';
import Cart from './components/carts/Cart';
import Default from './components/Default';
import Modal from './components/Modal';



//import './component';
//import './react-icon';

class App extends Component {
  render() {
    return (
      <React.Fragment>   
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<ProductList/>}/>
            <Route path='/details' element={<Detail/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='*' element={<Default/>}/>
          </Routes>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
