import { useState } from 'react'
import '../Styles/Tshirts.css'
const Tshirts = ({img, price, id, description, color, gender, shirtSizes, cart, setCart}) => {
    const [shirtCounter, setShirtCounter] = useState(0);
    const [shirtSize, setShirtSize] = useState('')
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
            console.log('empty')
          }else{
            setShirtCounter(0)
            setCart([...cart, {image: img, description: description, gender: gender, color: color, price: price, size: shirtSize, quantity: shirtCounter, id : Math.ceil(Math.random() * 1000 - (8*8)) }])
          }
      }
      console.log(cart)
    return(
        <div className="shirts-items" key={id}>
            <img src={img} alt={description}/> 
            <div className="shirts-info">
                <h3>{description}</h3>
                <p>{gender} - {color}</p>
                <p>Price : ${price}</p>
            </div>

            <div className="shirts-details">
                <div className="details">
                    <div className="quantity-container">
                        <h4>Quantity:</h4>
                        <button onClick={minus}> - </button>
                        <div className="shirts-counter" onChange={() => setShirtCounter(shirtCounter)}>{shirtCounter}</div>
                        <button onClick={plus}> + </button>
                    </div>

                    <div className="shirts-size">
                        {shirtSizes.map(el => (
                            <button className="shirt-btn" key={el.id} onClick={() => setShirtSize(el.size)}>{el.size}</button>
                        ))}
                    </div>
                    <button className={shirtCounter < 1 ? 'disable' : 'add-shirt'} onClick={addShirt}>Add To Cart</button>
                </div>
            </div>
        </div>    
    )
}
export default Tshirts;