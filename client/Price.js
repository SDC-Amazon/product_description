import React from 'react';

function Price (props) {
    var index = 0;
    if (props.option_text === '')  {
        index = 0;
    } else {
        for(var i=0;i<props.item.options.length;i++) {
            if(props.item.options[i].option === props.option_text) {
                index = i;
            }
        }
    }
    return (
        <div id="price">
        <span id="price-label">Price:</span> ${props.item.options[index].price} 
        { (props.item.prime === true) 
            ? <img id ="logo" src="Amazon-Prime-Logo.jpg"/>
            : <span id="notPrime"> <strong >Note:</strong> Not eligible for AMISHON Prime.</span>}
        </div>
    )
}    
export default Price;