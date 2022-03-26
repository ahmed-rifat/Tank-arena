import React from 'react';

const TankCart = ({cart}) => {
    // console.log(props.cart);
    // const {name,img} =props.cart;
    return (
        <div className='sticky-top'>
            <div>
            <h1>Selected Tanks</h1>
            </div>
                    <div>
                        {
                            cart.map(item=>(
                              <div>
                                  <h4>{item.name}</h4> 
                              </div>   
                            ))
                        }

                    
                    
                    <button className='text-info'>Choose 1 for me</button>
                    <button className='text-danger'>Choose Again</button>

                    </div>

        </div>
    );
};

export default TankCart;