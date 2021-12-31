
import './App.css';
import {useState, useEffect} from "react"
import Header from './components/Header';
import products from "./products.json"
import Product from './components/Product.js';
import Basket from './components/Basket';

function App() {

  const [money, setMoney] =useState(10000);
  const [basket, setBasket] =useState([]);
  const [total, setTotal] =useState(0);

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
    
  },[basket])
  
  
  return (
    <div >
      <Header total={total} money={money} />
      {
        products.map(product => (
          <Product total={total} money={money} key={product.id} product={product} basket={basket} setBasket={setBasket} />
        ))
      }
      <Basket total={total} products={products} basket={basket}/>
      <button onClick={resetBasket}>Sepeti Sıfırla</button>
    </div>
  );
}

export default App;
