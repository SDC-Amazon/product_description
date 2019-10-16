import React from 'react';

function ProductDescription(props) {

    return (
        <div>
            
            <div id="p01">
            {props.item.title}
            </div>
            
            <div id="p02"> 
            seller: {props.item.seller}
            </div>
            
            <div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star-half-empty "></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                
            {props.item.stars} / out of 5 stars
            </div>
            
            <div id="ratings">
            {props.item.number_ratings} people destroyed this product (ratings)
            </div>

            <div id="price">
            Price:  {props.item.options[0].price}
            </div>

            <div id="ad">
            Get $70 off instantly: Pay $0.00 upon approval for the Amazon Prime Rewards Visa Card. No annual fee.
            </div>
            <div>
            Options 
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