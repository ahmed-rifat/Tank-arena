import React from 'react';
import './TankCard.css'
import { MdOutlineAddShoppingCart } from 'react-icons/md';

const TankCard = ({tankData, addToCart}) => {
    // console.log(props.tankData);
    const {img,name, price}=tankData;

   
    return (
       
        <div className='card'>
       <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">Name:{name}</h5>
            <p className="card-text">Price: {price}</p>
            <button onClick={()=>addToCart(tankData)} className='btn btn-primary'>Add to Cart <MdOutlineAddShoppingCart/></button>       
             </div>
           
        </div>
    );
};

export default TankCard;