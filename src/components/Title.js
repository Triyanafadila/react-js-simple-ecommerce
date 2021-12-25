import React, { Component } from 'react';

//props name dan title digunakan untuk menangkap data name dan title dari product list
//my= margin top dan bottom
export default function Title({name, title}) { 
   
        return (
            <div className="row">
                
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="class text-uppercase font-weight">
                        {name} <strong className="text-blue">{title}</strong>
                    </h1>
                </div>
            </div>
        );
   
}
