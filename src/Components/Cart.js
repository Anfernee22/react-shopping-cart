import '../Styles/Cart.css';
const Cart = ({cart, setCart, one, id}) => {
    const removeItem = () => {
        setCart(cart.filter(el => el.id !== id))
        
    }
 
    return(
        <div className="cart-items-container">
            <div className="cart-image">
                <img src={one.image} alt={one.description} />
            </div>
            <div className="items-detail">
                <div className="item-description">
                    <h2>{one.description}</h2>
                    <h4>{one.color}</h4>
                </div>
                <p>Size: {one.size}</p>
                <p>Quantity: {one.quantity}</p>
                <p>Price: ${one.price}</p>
                <div className="cart-buttons">
                    <button onClick={removeItem}>Remove</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;