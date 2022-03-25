import React from 'react';

const TankCard = (props) => {
    // console.log(props.tankData);
    const {img,name}=props.tankData;
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default TankCard;