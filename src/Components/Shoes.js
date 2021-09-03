// import ShoppingItems from './ShoppingItems.json'
import '../Styles/Shoes.css'
const Shoes = ({img, price, id, items, description, color, gender, shoesSize, setShoesSize, storedShoes, setStoredShoes}) => {
  const shoesHandler = (e) => {
    // setStoredShoes(storedShoes.filter(el => {
    //     if(el.id === id){
    //         const container = document.querySelector('.items')
    //        const div = document.createElement('div');
    //        div.classList = 'pop-up-items';
    //        div.innerHTML = `
    //        <img src=${el.image}></img>
    //        <p>Price : ${el.price}</p>`;
    //        container.appendChild(div)
    //        console.log(div)
    //     }
    //     return storedShoes;
             
    //     }))  
  }
    
    return(
      <div className="shoes-items" key={id}>
        <img src={img} alt={description} onClick={shoesHandler}/>
        <div className="shoes-info">
          <h3>{description}</h3>
          <p>{gender} - {color}</p>
          <p>Price : ${price}.00</p>
        </div>
      </div>  
    )
}
export default Shoes;