import React from 'react';
import Stars from './Stars.js';

function ProductDescription(props) {
    //console.log(props.item.stars)
    return (
        <div>
            
            <div id="p01">
            {props.item.title}
            </div>
            
            <div id="p02"> 
            <span id="plain-text"> seller:</span> {props.item.seller}
            </div>
            
            <div id="ratings">
            {props.item.number_ratings} ratings
            </div>
            
            <div id="stars">
                <Stars stars={props.item.stars}/> 
                <span> </span>
            </div>

            <div id="price">
            <span id="price-label">Price:</span> ${props.item.options[0].price}
            </div>

            <div id="ad" >
            Get $70 off instantly: Pay <span id="zero">$0.00</span> upon approval for the Amazon Prime Rewards Visa Card. No annual fee.
            </div>

            <div>
                { (props.item.prime === true) ? <span>prime</span> : <span>not prime</span>}
            </div>

            <div>
                <select>
                    {props.item.options.map( (item) => (
                        <option key={item.option}> {item.option} </option>
                    ))}
                </select>
            </div>
                    
            <div id="list">
            <ul>
                {props.item.description.map((row)=> (
                    <li key={row}>{row}</li>
                ))}
            </ul>
            </div>

        </div>
    )
}

export default ProductDescription;