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
            by: {props.item.seller}
            </div>
            
            <div>
            {props.item.stars} / out of 5 stars
            </div>
            
            <div>
            {props.item.number_ratings} ratings
            </div>

            <div>
            Options
            <div>
                <select>
                    <option>Select</option>
                    {props.item.options.map( (item) => (
                        <option key={item.option}> {item.option} </option>
                    ))}
                </select>
            </div>
                    
            </div>

        </div>
    )
}

export default ProductDescription;