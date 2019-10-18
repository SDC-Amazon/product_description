import React from 'react';
import Stars from './Stars.js';
import Description from './Description.js';
import Options from './Options.js';
import Ad from './Ad.js';
import Price from './Price.js';
import Seller from './Seller.js';
import Title from './Title.js';
import Ratings from './Ratings.js';
import Incorrect from './Incorrect.js'

function ProductDescription(props) {
    //console.log(props.item.stars)
    return (
        <div>
            <Title title={props.item.title}/>
            <Seller seller={props.item.seller}/>
            <Ratings ratings={props.item.number_ratings}/>
            <Stars stars={props.item.stars} id="stars"/> 
            <Price item={props.item}/>
            <Ad />
            <Options options={props.item.options}/>     
            <Description description={props.item.description}/>
            <Incorrect />
        </div>
    )
}

export default ProductDescription;