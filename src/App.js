import Router from './Config/Router';
import './App.css';
import CartContext from './Context/Context';
import { useEffect, useState } from 'react';
function App() {
  
  const [cart ,setcart] = useState(0)

useEffect(()=>{
  const cart = JSON.parse(localStorage.getItem("cart") )|| [];
  setcart(cart)
},[])
  return (
   <CartContext.Provider value={{cart,setcart}}>
   <Router/> 
   </CartContext.Provider>
  );
}

export default App;
