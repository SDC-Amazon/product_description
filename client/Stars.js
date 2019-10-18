import React from 'react';


const Stars = (props) => {

    var number = Math.floor(props.stars)
    var decimal = props.stars - number;
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
            <span id="stars_pd_text">{props.stars} / out of 5 stars </span>
            <hr id="line_ps"/>
        </div>
    
    )
}

export default Stars;
