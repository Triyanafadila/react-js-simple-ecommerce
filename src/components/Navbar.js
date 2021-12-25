import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import { FaCartPlus } from 'react-icons/fa';
import { ButtonContainer } from './Button';
import styled from 'styled-components';


class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="Navbar navbar-expand-sm navbar-dark px-sm-5">
                <div className="d-flex align-items-center justify-content-center">
                <Link to="/">
                   <img src={logo} alt="store" className="navbar-brand"/>
                </Link>      
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/"> Product </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ms-auto ">
                   <NavbarButton>
                       <span className="mx-1 ">
                            <i> <FaCartPlus/></i>
                       </span>
                       My Cart
                   </NavbarButton>
                </Link> 
                </div> 
            </NavWrapper>
        );
    }    
}

export default Navbar;

const NavWrapper = styled.nav`
    background : var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform:capitalize;
        padding-top:1rem;
    }
`
const NavbarButton = styled.button`
text-transform:capitalize;
font-size:1rem;
background:transparent;  
color: var(--mainWhite);
border-radius: 4px;
&:hover {
    background: var(--mainBlue);
    color: var(--lightBlue);
}
`

