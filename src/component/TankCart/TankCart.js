import React from 'react';

const TankCart = () => {
    return (
        <div className='sticky-top'>
            <div>
            <h1>Selected Tanks</h1>
            </div>
            
            <div>
                <button className='text-info'>Choose 1 for me</button>
            </div>
            <div>
            <button className='text-danger'>Choose Again</button>

            </div>

        </div>
    );
};

export default TankCart;