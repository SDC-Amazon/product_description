import React from 'react';
import Stars from './Stars.js';
import Description from './Description.js';
import Options from './Options.js';
import Ad from './Ad.js';
import Price from './Price.js';
import Seller from './Seller.js';
import Title from './Title.js';
import Incorrect from './Incorrect.js'

function ProductDescription(props) {
    //console.log(props.option_text)
    return (
        <div>
            <Title title={props.item.title}/>
            <Seller seller={props.item.seller}/>
            <Stars stars={props.item.stars} ratings={props.item.number_ratings} id="stars"/> 
            <Price item={props.item} option_text={props.option_text}/>
            <Ad />
            <Options options={props.item.options} change={props.change}/>     
            <Description description={props.item.description}/>
            <Incorrect />
        </div>
    )
}

export default ProductDescription;