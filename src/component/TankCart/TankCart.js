import React, { useState } from 'react';
import './TankCart.css'

const TankCart = ({cart, chooseAgain, randomChoose, chooseOne}) => {

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
                        
                             {
                                 chooseOne.map(final=>(
                                     <div key ={final.id}>
                                         <div><img src={final.img} alt="" /></div>
                                        <div><h4> {final.name}</h4></div>
                                     </div>
                                 ))
                             }
                    </div> 
                    <button className='text-info mt-4' onClick={()=>randomChoose(cart)}>Choose one for me</button>
                    </div>
                    
                     
                    <button onClick={chooseAgain} className='text-danger mt-2'>Reset</button>

                    </div>

        </div>
       );
};

export default TankCart;