import '../Styles/Shoes.css'
import { useState } from 'react';
import Message from './Message';
const Shoes = ({img, price, id, shoesSizes, cart, setCart, description, color, gender}) => {
  const [counter, setCounter] = useState(0); 
  const [selectedShoesSize, setSelectedShoesSize] = useState('')
  const plus = () => {
    setCounter(counter+1)
  }
  const minus = () => {
    if(counter < 1){
      setCounter(1)
    }else{
      setCounter(counter - 1)
    }
  }
  const addShoes = () => {
    if(selectedShoesSize === '' || counter < 1){
      <Message/>
    }else{
      setCart([...cart, {image: img, description: description, gender: gender, color: color, price: price, quantity: counter, size: selectedShoesSize, id: Math.ceil(Math.random() * 1000 - 1) }]);
      setSelectedShoesSize('')
      setCounter(0);
    }
  }
  return(
    <div className="shoes-items" key={id}>
      <img src={img} alt={description}/>
      <div className="shoes-info">
        <h4>{description}</h4>
        <p>{gender} - {color}</p>
        <p>Price : ${price}</p>
      </div> 
      <div className='shoes-details' >
        <div className="details-container">
          <Message counter={counter} selectedShoesSize={selectedShoesSize}/>
          <div className="quantity">
            <h4>Qty:</h4>
            <button onClick={minus} > - </button>
            <div className="counter" onChange={() => setCounter(counter)}>{counter}</div>
            <button onClick={plus}> + </button>
          </div>
          <div className="shoes-size">
            {shoesSizes.map(size => (
              <button className="size-btn" key={size.id} value={size.size} onClick={(e) => setSelectedShoesSize(parseInt(e.target.value))}>{size.size}</button>
            ))}
          </div>
          <button className={counter < 1 && selectedShoesSize === '' ? 'empty' : 'add-btn'} onClick={addShoes}>Add To Cart</button>
        </div>
      </div>
    </div>  
  )
}
export default Shoes;