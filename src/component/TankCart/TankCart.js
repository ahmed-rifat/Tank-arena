import React, { useState } from 'react';
import './TankCart.css'

const TankCart = ({cart}) => {
    // console.log(cart);
    // const {name,img,id} =cart;

    const[chooseOne, setChooseOne] =useState([]);
    console.log(chooseOne);

    const randomChoose=()=>{
        const randomItem = cart[Math.floor(Math.random() * cart.length)];
         setChooseOne(randomItem);
        // console.log(randomItem);
    }
    return (
        <div className='sticky-top'>
            <div>
            <h1>Selected Tanks</h1>
            </div>
                    <div className='cart-added-item'>
                        {
                         cart.map(item=>(
                            <div className='cart-item mt-2' key= {item.id}>
                                 <div><img src={item.img} alt="" /></div>
                                      <div><h4> {item.name}</h4></div>
                              </div>   
                            ))
                        }

                    <div>
                        <hr/>
                    <div className='cart-item mt-2 shadow-lg p-3 mb-5 bg-white rounded'>
                                 <div><img src={chooseOne.img} alt="" /></div>
                                      <div><h4> {chooseOne.name}</h4></div>
                              </div> 
                    <button className='text-info mt-4' onClick={()=>randomChoose(cart)}>Choose 1 for me</button>
                    </div>
                    
                     
                    <button className='text-danger mt-2'>Choose Again</button>

                    </div>

        </div>
    );
};

export default TankCart;