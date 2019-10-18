import React from 'react';

function Ratings (props) {
    return (
        <React.Fragment >
        <span id="ratings">
        {props.ratings} ratings
        </span>
        
        </React.Fragment>
    )
}    
export default Ratings;