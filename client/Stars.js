import React from 'react';
import Ratings from './Ratings.js';

const Stars = (props) => {
    console.log(props.stars)                //4.6
    var number = Math.floor(props.stars)    //4
    var decimal = props.stars - number;     //.6
    var array = [0,0,0,0,0]

    for (var i = 0; i < number; i++) {
        array[i] = 1;
    }
    if (.3 <= decimal && decimal <= .7 )  {
        array[number] = .5;
    }
    if (.7 <= decimal && decimal <= .9 )  {
        array[number] = 1;
    }

    return (
        <div id="stars_ps">
            {array.map ((stars, i)=> (
                (stars === 1) 
                ? <span key={i} className="fa fa-star checked" ></span> 
                : (stars === .5 
                    ? <span key={i} className="fa fa-star-half-empty checked" ></span>
                    : <span key={i} className="fa fa-star-o checked" ></span>
                )
            ))}
            <img id ="down_arrow" src="https://farmingshon.s3.us-east-2.amazonaws.com/down_arrow.jpg"/>
            <span><Ratings ratings={props.ratings}/> </span>
            {/* <span id="stars_pd_text">{props.stars} / out of 5 stars </span> */}
            <hr id="line_ps"/>
        </div>
    
    )
}

export default Stars;
