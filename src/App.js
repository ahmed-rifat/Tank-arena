import logo from './logo.svg';
import './App.css';
import Title from './component/Title/Title';
import { useEffect, useState } from 'react';
import TankCard from './component/TankCard/TankCard';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import TankCart from './component/TankCart/TankCart';



function App() {
  const [tanks, setTank]= useState([]);
  const [cart, setCart] =useState([]);
  // console.log(cart);

  // console.log(tanks);

  useEffect(()=>{
    fetch('tankshow.json')
    .then(res => res.json())
    .then(data => setTank(data));
  },[])
  

  const addToCart= (tank)=>{
     setCart([...cart,tank]);
}
const chooseAgain=(tank)=>{
  setCart([],tank);
}

  return (
    <div className="App">
     <Title></Title>
          <div className='row'>
           <div className='col-9 card-shape mt-4'>
           {
              tanks.map(tank=>(
                <TankCard key={tank.id} tankData={tank} addToCart={addToCart}></TankCard>
              ))
            }
           </div>
           <div className='col-3'>
                {
                   
                     <TankCart chooseAgain={chooseAgain} cart={cart}></TankCart>
                   
                 
                }
           </div>
          </div>

          
    </div>
  );
}

export default App;
