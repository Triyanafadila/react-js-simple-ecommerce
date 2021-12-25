import React, { Component } from 'react';


export default function CartColumns() {
    return (
        <div>
            <div className="container-fluid text-center d-lg-block">               
                <div className="row ">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">name of product</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">quantity</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="text-uppercase">total</p>
                    </div>
                </div>
            </div>
        </div>
    );

};

