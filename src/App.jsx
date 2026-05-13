import './App.css'
import Navbar from './Component/Navbar'
import Banner from './Component/Banner'
import Product from './Component/Product'
import { useState } from 'react'

function App() {

  const [cart,setCart] = useState([]);

  const [activeTab,setActiveTab] =useState("product");

  return (
    <>
      <Navbar cart={cart} setActiveTab={setActiveTab} />
      <Banner />
      <Product cart={cart} setCart={setCart} activeTab={activeTab} setActiveTab={setActiveTab}/>
    </>
  )
}

export default App