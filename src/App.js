import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Shipment from './components/Shipment/Shipment';
import Header from './components/Header/Header';
import { createContext, useState } from 'react';




function App() {

const [count, setCount] = useState(0);

  return (
    <div>
     <p>Count value in app: {count}</p>
      <Home count={count} setCount={setCount} ></Home>
      <Shipment></Shipment>
      <Header count={count} setCount={setCount}></Header>
    </div>
  );
}

export default App;
