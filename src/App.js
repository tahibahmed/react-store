import Router from './Config/Router';
import './App.css';
import CartContext from './Context/Context';
import { useEffect, useState } from 'react';
function App() {
  
  const [cart ,setCart] = useState([])

useEffect(()=>{
  const cart = JSON.parse(localStorage.getItem("cart") )|| [];
  setCart(cart)
},[])
  return (
   <CartContext.Provider value={{cart,setCart}}>
   <Router/> 
   </CartContext.Provider>
  );
}

export default App;
