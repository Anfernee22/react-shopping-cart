import ShoppingItems from './ShoppingItems.json'
const Shoes = ({img, price, id, items, description, alt, shoesSize, setShoesSize, storedShoes, setStoredShoes}) => {
  const shoesHandler = (e) => {
    setStoredShoes(storedShoes.filter(el => {
        if(el.id === id){
            const container = document.querySelector('.items')
           const div = document.createElement('div');
           div.classList = 'pop-up-items';
           div.innerHTML = `
           <img src=${el.image}></img>
           <p>Price : ${el.price}</p>`;
           container.appendChild(div)
           console.log(div)
        }
        return storedShoes;
             
        }))  
  }
    
    return(
       <div className="shoes-container">
           <div className="items" key={id}>
               <h2>{alt}</h2>
               <img src={img} alt={description} onClick={shoesHandler}/>
               <p>{description}</p>
               <p>Price : ${price}.00</p>
           </div>
       </div>
    )
}
export default Shoes;