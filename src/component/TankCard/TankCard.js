import React from 'react';
import './TankCard.css'

const TankCard = (props) => {
    // console.log(props.tankData);
    const {img,name, price}=props.tankData;
    return (
        <div className='card'>

        
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Name:{name}</h5>
            <p className="card-text">Price: {price}</p>
            <button className='btn btn-primary'>Add to Cart</button>        </div>
        
            {/* <img src={img} alt="" />
            <h1>Name: {name}</h1> */}
            
            
           
        </div>
    );
};

export default TankCard;