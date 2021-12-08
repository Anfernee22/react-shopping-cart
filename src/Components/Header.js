import '../Styles/Header.css';
import { Link } from 'react-router-dom';
const Header = ({cart}) => {
    return(
        <div className="main-header">
            <div className="header">
                <i className="fas fa-tint"></i>
                <h1 className="animate__animated animate__bounce">Drip Store</h1>
                <i className="fas fa-tint"></i>
            </div>
            <nav className="nav-links" >
                <div className="products-container" >
                    <Link to="/" className='link'>Products</Link>
                </div>
                <div className="shopping-cart">
                    <Link to="/cart" className="cart-icon"><i className="fas fa-shopping-cart "></i></Link>
                    <div className='cart-quantity'>({cart.length})</div>
                </div>
           </nav>
        </div>
    )
}
export default Header;