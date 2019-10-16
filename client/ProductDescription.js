import React from 'react';

function ProductDescription(props) {
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
            </div>

        </div>
    )
}

export default ProductDescription;