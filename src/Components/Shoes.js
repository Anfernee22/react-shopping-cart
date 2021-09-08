import '../Styles/Shoes.css'
import { useState } from 'react'
const Shoes = ({img, price, id, shoesSizes, setShoesSize, description, color, gender, storedShoes, setStoredShoes}) => {
const [counter, setCounter] = useState(0); 
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
            <button className="size-btn" key={size.id} value={size.size}>{size.size}</button>
          ))}
        </div>
        <button className="add-btn">Add To Cart</button>
      </div>
    </div>
  </div>  
  )
}
export default Shoes;