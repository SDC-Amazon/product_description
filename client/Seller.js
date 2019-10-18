import React from 'react';

function Seller (props) {
    return (
        <div> 
            <span id="plain-text"> seller:</span> <span id="seller_ps">{props.seller}</span>
        </div>
    )
}    
export default Seller;