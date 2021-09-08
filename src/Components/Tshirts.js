import { useState } from 'react'
import '../Styles/Tshirts.css'
const Tshirts = ({img, price, id, description, color, gender, shirtSizes}) => {
    const [shirtCounter, setShirtCounter] = useState(0)
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
                            <button className="shirt-btn" key={el.id} value={el.size} >{el.size}</button>
                        ))}
                    </div>
                    <button className="add-shirt">Add To Cart</button>
                </div>
            </div>
        </div>    
    )
}
export default Tshirts;