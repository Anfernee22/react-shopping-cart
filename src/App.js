import './Styles/App.css'
import Header from './Components/Header'
import Cart from './Components/Cart';
import Products from './Components/Product';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([])
  return (
    <div className="app-wrapper">
    <Router>
      <Header cart={cart}/>
      <Switch>
        <Route exact path="/">
          <Products cart={cart} setCart={setCart}/>
        </Route>
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart}/>
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
