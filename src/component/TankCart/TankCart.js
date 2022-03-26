import React, { useState } from 'react';
import './TankCart.css'

const TankCart = ({cart, chooseAgain, randomChoose,chooseOne}) => {

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
                    <div className='cart-item mt-2'>
                        
                             <div><img id='mypic' src={chooseOne.img} alt="" /></div>
                             <div><h4> {chooseOne.name}</h4></div>
                    </div> 
                    <button className='text-info mt-4' onClick={()=>randomChoose(cart)}>Choose 1 for me</button>
                    </div>
                    
                     
                    <button onClick={chooseAgain} className='text-danger mt-2'>Choose Again</button>

                    </div>

        </div>
       );
};

export default TankCart;