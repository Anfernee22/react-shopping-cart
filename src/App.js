// import {Fragment} from 'react';
import './Styles/App.css'
import { useState } from 'react';
import Header from './Components/Header'
import Tshirts from './Components/Tshirts';
import Shoes from './Components/Shoes';
import ShoppingItems from './Components/ShoppingItems.json'
function App() {
  // const [shirtSize, setShirtSize] = useState('');
  // const [shoesSize, setShoesSize] = useState('');
  const [storedShoes, setStoredShoes] = useState(ShoppingItems['shoes']);
  const [storedShirts, setStoredShirts] = useState(ShoppingItems['t-shirts'])
  // console.log(storedShoes)
  return (
    <div className="app-wrapper">
      <Header/>
      <div className="items-container">
        <div className="shirts-wrapper">
          <div className="shirts-header">
            <h1>T-shirts</h1>
          </div>
          {storedShirts.map(items => (
            <Tshirts img={items.image} price ={items.price} id={items.id} description={items.description} gender={items.gender} items={items} setStoredShirst={setStoredShirts} storedShirts={storedShirts} key={items.id} color={items.color}/>
          ))}
        </div>

      {/* <Tshirts shirtSize={shirtSize} setShirtSize={setShirtSize}/> */}
      
        <div className="shoes-wrapper">
          <div className="shoes-header ">
            <h1>Shoes</h1>
          </div>
          {storedShoes.map(items => (
            <Shoes img={items.image} price ={items.price} id={items.id} description={items.description} color={items.color} gender={items.gender} items={items} setStoredShoes={setStoredShoes} storedShoes={storedShoes} key={items.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
