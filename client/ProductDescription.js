import React from 'react';

function ProductDescription(props) {
    //console.log('sup')
    //console.log(props.item.options[0].option)
    return (
        <div>
            
            <div>
            {props.item.title}
            </div>
            
            <div> 
            seller: {props.item.seller}
            </div>
            
            <div>
            {props.item.stars} / out of 5 stars
            </div>
            
            <div>
            {props.item.number_ratings} ratings
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
                    
            <div>
            <ul>
                    {props.item.description.map((row)=> (
                        <li>{row}</li>
                    ))}
            </ul>
            </div>

        </div>
    )
}

export default ProductDescription;