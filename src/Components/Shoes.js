import '../Styles/Shoes.css'
import { useState } from 'react';

const Shoes = ({img, price, id, shoesSizes, cart, setCart, setShoesSize, description, color, gender, storedShoes, setStoredShoes}) => {
  const [counter, setCounter] = useState(0); 
  const [selectedShoesSize, setSelectedShoesSize] = useState('')
  const plus = () => {
  setCounter(counter+1)
  }
  const minus = () => {
    if(counter < 1){
    setCounter(0)
    }else{
    setCounter(counter - 1)
    }
  }
  const addShoes = () => {
    if(counter === 0 || selectedShoesSize === ''){
      console.log('empty')
    }else{
      setCart([...cart, {image: img, description: description, gender: gender, color: color, price: price, quantity: counter, size: selectedShoesSize, id: Math.ceil(Math.random() * 1000 - 1) }]);
      console.log(cart)
     setSelectedShoesSize('')
     setCounter(0)
    }
  }

return(
  <div className="shoes-items" key={id}>
    <img src={img} alt={description}/>
    <div className="shoes-info">
      <h4>{description}</h4>
      <p>{gender} - {color}</p>
      <p>Price : ${price}.00</p>
    </div>

    <div className="shoes-details">
      <div className="details-container">
        <div className="quantity">
          <h4>Quantity:</h4>
          <button onClick={minus} > - </button>
          <div className="counter" onChange={() => setCounter(counter)}>{counter}</div>
          <button onClick={plus}> + </button>
        </div>
        
        <div className="shoes-size">
          {shoesSizes.map(size => (
            <button className="size-btn" key={size.id} value={size.size} onClick={(e) => setSelectedShoesSize(parseInt(e.target.value))}>{size.size}</button>
          ))}
        </div>
        <button className={counter < 1 ? 'empty' : 'add-btn'} onClick={addShoes}>Add To Cart</button>
      </div>
    </div>
  </div>  
  )
}
export default Shoes;