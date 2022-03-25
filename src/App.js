import logo from './logo.svg';
import './App.css';
import Title from './component/Title/Title';
import { useEffect, useState } from 'react';
import TankCard from './component/TankCard/TankCard';

function App() {
  const [tanks, setTank]= useState([]);
  // console.log(tanks);

  useEffect(()=>{
    fetch('tankshow.json')
    .then(res => res.json())
    .then(data => setTank(data));
  },[])

  return (
    <div className="App">
     <Title></Title>
          <div>
            {
              tanks.map(tank=>(
                <TankCard key={tank.id} tankData={tank}></TankCard>
              ))
            }
          </div>
    </div>
  );
}

export default App;
