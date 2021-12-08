import "../Styles/Message.css"
const Message = ({counter, selectedShoesSize, shirtCounter, shirtSize}) => {
    return(
        <div className="message-container">
            {counter === 0 || shirtCounter === 0 ? <p style={{color: 'red'}}>Add quantity</p> : <p style={{color: 'green'}}>Quantity added</p> }
            {selectedShoesSize === "" || shirtSize === '' ? <p style={{color: 'red'}}>Select shoes size</p> : <p style={{color: 'green'}}>Shoe size selected</p>}
        </div>
    )
}
export default Message;