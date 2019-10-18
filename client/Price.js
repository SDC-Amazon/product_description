import React from 'react';

function Price (props) {
    return (
        <div id="price">
        <span id="price-label">Price:</span> ${props.item.options[0].price} 
        { (props.item.prime === true) 
            ? <span><img id ="logo" src="Amazon-Prime-Logo.jpg"/></span> 
            : <span id="notPrime"> <strong >Note:</strong> Not eligible for AMISHON Prime.</span>}
        </div>
    )
}    
export default Price;