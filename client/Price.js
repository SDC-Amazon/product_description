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
        <span id="price-label">Price:</span> ${props.item.options[index].price.toFixed(2)} 
        { (props.item.prime === true) 
            ? <img id ="logo" src="https://farmingshon.s3.us-east-2.amazonaws.com/Amazon-Prime-Logo.png"/>
            : <span id="notPrime"> <strong >Note:</strong> Not eligible for Farmazon Prime.</span>}
        </div>
    )
}    
export default Price;