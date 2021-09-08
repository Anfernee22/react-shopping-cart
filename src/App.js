import './Styles/App.css'
import { useState } from 'react';
import Header from './Components/Header'
import Tshirts from './Components/Tshirts';
import Shoes from './Components/Shoes';
import ShoppingItems from './Components/ShoppingItems.json';
function App() {
  const [storedShoes, setStoredShoes] = useState(ShoppingItems['shoes']);
  const [storedShirts, setStoredShirts] = useState(ShoppingItems['t-shirts']);
  const [shoesSizes, setShoesSize] = useState(ShoppingItems['shoes-sizes'])
  const [shirtSizes, setShirtSizes] = useState(ShoppingItems['shirts-sizes'])
  return (
    <div className="app-wrapper">
      <Header/>
      <div className="items-container">
        <div className="shirts-wrapper">
          <div className="shirts-header">
            <h1>T-shirts</h1>
          </div>
          {storedShirts.map(items => (
            <Tshirts img={items.image} price ={items.price} id={items.id} description={items.description} gender={items.gender} items={items} setStoredShirst={setStoredShirts} storedShirts={storedShirts} key={items.id} color={items.color} shirtSizes={shirtSizes} setShirtSizes={setShirtSizes}/>
          ))}
        </div>

      
        <div className="shoes-wrapper">
          <div className="shoes-header ">
            <h1>Shoes</h1>
          </div>
          {storedShoes.map(items => (
            <Shoes img={items.image} price ={items.price} id={items.id} description={items.description} color={items.color} gender={items.gender} items={items} setStoredShoes={setStoredShoes} storedShoes={storedShoes} shoesSizes={shoesSizes} setShoesSize={setShoesSize} key={items.id}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
