import './Styles/App.css'
import Header from './Components/Header'
import Cart from './Components/Cart';
import Products from './Components/Product';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([])
  return (
    <Router>
      
        <Header cart={cart}/>
        <Switch>
          <Route exact path="/">
            <Products cart={cart} setCart={setCart}/>
          </Route>

          <Route path="/cart">
            <div className="cart-main-container">
             
              <div className="cart-body">
                
                {cart.length === 0 ? <h1 className="empty-cart-header">Cart is Empty</h1> : <h1>My Cart</h1>}
                {cart.map(one => (
                  <Cart cart={cart} setCart={setCart}  id={one.id} key={one.id} one={one}/>
                ))}
              </div>
            </div>
          </Route>
        </Switch>
    
    </Router>
  );
}

export default App;
