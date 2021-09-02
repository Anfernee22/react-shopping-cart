import ShoppingItems from './ShoppingItems.json'

const Tshirts = ({shirtSize, setShirtSize}) => {
    return(
        <div className="shirts-container">
            <div className="shirts-header">
                <h2>T-Shirts</h2>
            </div>
            {ShoppingItems['t-shirts'].map(items => (
                <div className="shirts-items" key={items.id}>
                    <h2>{items.description}</h2>
                    <img src={items.image} alt={items.description} />
                    <p>Price : ${items.price}</p>
                    <div className="shirt-size">
                        <h4>Size : {shirtSize}</h4>
                        <div className="sizes">
                           {ShoppingItems['shirts-sizes'].map(el => (
                               <button onClick={(e) => setShirtSize(e.target.value)} value={el.size} key={el.id}>{el.size}</button>
                           ))}
                        </div>
                    </div>
                    <div className="add-btn">
                        <button>Add To Cart</button>
                    </div>      
                </div>
            ))}
        </div>
    )
}
export default Tshirts;