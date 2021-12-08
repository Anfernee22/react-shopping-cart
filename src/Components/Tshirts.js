import { useState } from 'react'
import '../Styles/Tshirts.css'
import Message from './Message';
const Tshirts = ({img, price, id, description, color, gender, shirtSizes, cart, setCart, securedId}) => {
  const [shirtCounter, setShirtCounter] = useState(0);
  const [shirtSize, setShirtSize] = useState('');
  const plus = () => {
    setShirtCounter(shirtCounter+1)
  }
  const minus = () => {
    if(shirtCounter < 1){
      setShirtCounter(0)
    }else{
      setShirtCounter(shirtCounter - 1)
    }
  }
  const addShirt = () => {
    if(shirtCounter === 0 || shirtSize === ''){
      <Message/>
    }else{
      setShirtCounter(0)
      setShirtSize('')
      setCart([...cart, {image: img, description: description, gender: gender, color: color, price: price, size: shirtSize, quantity: shirtCounter, securedId: securedId, id : Math.ceil(Math.random() * 1000 - (8*8)) }])
    }
  }
  return(
    <div className="shirts-items" key={id} >
      <img src={img} alt={description}/> 
      <div className="shirts-info" >
        <h3>{description}</h3>
        <p>{gender} - {color}</p>
        <p>Price : ${price}</p>
      </div>
      <div className='shirts-details'>
        <div className="details">
          <Message shirtCounter={shirtCounter} shirtSize={shirtSize}/>
          <div className="quantity-container">
            <h4>Qty:</h4>
            <div className="quantity-buttons">
              <button onClick={minus}> - </button>
              <div className="shirts-counter" onChange={() => setShirtCounter(shirtCounter)}>{shirtCounter}</div>
              <button onClick={plus}> + </button>
            </div>
          </div>
          <div className="shirts-size">
            {shirtSizes.map(el => (
              <button className='shirt-btn' key={el.id} onClick={() => setShirtSize(el.size)}>{el.size}</button>
            ))}
          </div>
          <button className={shirtCounter < 1 && shirtSize === '' ? 'disabled': 'add-shirt'} onClick={addShirt}>Add To Cart</button>
        </div>
      </div>
    </div>    
  )
}
export default Tshirts;