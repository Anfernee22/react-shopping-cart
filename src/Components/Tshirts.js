// import ShoppingItems from './ShoppingItems.json'
import '../Styles/Tshirts.css'
const Tshirts = ({img, price, item, id, description, color, gender, storedShirts, setStoredShirts}) => {
    return(
        <div className="shirts-items" key={id}>
            <img src={img} alt={description}/> 
            <div className="shirts-info">
                <h3>{description}</h3>
                <p>{gender} - {color}</p>
                <p>Price : ${price}</p>
            </div>
        </div>    
    )
}
export default Tshirts;