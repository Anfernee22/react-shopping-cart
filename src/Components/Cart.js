import '../Styles/Cart.css';
const Cart = ({cart, setCart}) => {
    const totalPrice = cart.reduce((price, item) => price + item.quantity * item.price, 0);
    const tax = (totalPrice * .10);
    const total = totalPrice + tax;
    return(
        <div className="cart-items-wrapper">
            {cart.length < 1 ? <h1 className="cart-header animate__animated animate__zoomIn">Your Cart is Empty</h1> : <h1 className="cart-header animate__animated animate__zoomIn">My Cart</h1>}
            <div className="cart-container">
                <div className="cart-box">
                    {cart.map(item => {
                        return(
                            <div className="cart-items" key={item.id}>
                                <div className="cart-image">
                                    <img src={item.image} alt={item.description} />
                                </div>
                                <div className="items-detail">
                                    <div className="item-description">
                                        <h2>{item.description}</h2>
                                        <h4>{item.color}</h4>
                                    </div>
                                    <p>Size: {item.size}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <p>Price: ${item.price}</p>
                                    <div className="cart-button">
                                        <button onClick={() => setCart(cart.filter(one => one.id !== item.id)) }>Remove</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className={cart.length < 1 ? 'cart-summary-wrapper' : 'active'}>
                    <div className="summary-header">
                        <h1>Order Summary</h1>
                    </div>
                    <div className="summary-info">
                        <p>Subtotal: <span>${totalPrice.toFixed(2)}</span></p>
                        <p>Tax: <span>${tax.toFixed(2)}</span></p>
                        <p>Total: <span>${total.toFixed(2)}</span></p>
                        <p>(<span style={{color: '#d2601a', fontWeight: 'bold'}}>{cart.length}</span>) items</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;