import React from 'react';

function Seller (props) {
    return (
        <div> 
            <span id="plain-text"> by</span> <span id="seller_ps">{props.seller}</span>
        </div>
    )
}    
export default Seller;