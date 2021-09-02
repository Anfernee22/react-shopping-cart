import {Fragment} from 'react';
import { useState } from 'react';
import Header from './Components/Header'
import Tshirts from './Components/Tshirts';
import Shoes from './Components/Shoes';
import ShoppingItems from './Components/ShoppingItems.json'
function App() {
  const [shirtSize, setShirtSize] = useState('')
  const [shoesSize, setShoesSize] = useState('');
  const [storedShoes, setStoredShoes] = useState(ShoppingItems['shoes'])
  // console.log(storedShoes)
  return (
    <Fragment>
      <Header/>
      <Tshirts shirtSize={shirtSize} setShirtSize={setShirtSize}/>
      <div className="shoes-wrapper">
        <div className="shoes-header">
          <h1>Shoes</h1>
        </div>
        {storedShoes.map(items => (
          <Shoes img={items.image} price ={items.price} id={items.id} description={items.description} alt={items.alt} items={items} setStoredShoes={setStoredShoes} storedShoes={storedShoes} key={items.id}/>
        ))}
      </div>
    </Fragment>
  );
}

export default App;
