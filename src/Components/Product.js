import '../Styles/Product.css'
import { useState } from "react";
import ShoppingItems from './ShoppingItems.json';
import Tshirts from './Tshirts';
import Shoes from './Shoes';
const Product = ({cart, setCart}) => {
  const [storedShoes, setStoredShoes] = useState(ShoppingItems['shoes']);
  const [storedShirts, setStoredShirts] = useState(ShoppingItems['t-shirts']);
  const [shoesSizes, setShoesSize] = useState(ShoppingItems['shoes-sizes'])
  const [shirtSizes, setShirtSizes] = useState(ShoppingItems['shirts-sizes']);
  return(
    <div className="items-container">
      <div className="shirts-wrapper">
        <div className="shirts-header">
          <h1>T-shirts</h1>
        </div>
        <div className="shirt-container">
          {storedShirts.map(items => (
            <Tshirts securedId={items.securedId} cart={cart} setCart={setCart} img={items.image} price ={items.price} id={items.id} description={items.description} gender={items.gender} items={items} setStoredShirst={setStoredShirts} storedShirts={storedShirts} key={items.id} color={items.color} shirtSizes={shirtSizes} setShirtSizes={setShirtSizes}/>
          ))}
        </div>
      </div>
      <div className="shoes-wrapper">
        <div className="shoes-header ">
          <h1>Shoes</h1>
        </div>
        <div className="shoes-container">
          {storedShoes.map(items => (
            <Shoes cart={cart} setCart={setCart} img={items.image} price ={items.price} id={items.id} description={items.description} color={items.color} gender={items.gender} items={items} setStoredShoes={setStoredShoes} storedShoes={storedShoes} shoesSizes={shoesSizes} setShoesSize={setShoesSize} key={items.id}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Product;