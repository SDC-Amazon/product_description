import React from 'react';

function Options(props) {
    return (
        <div>
            <select className="option_selector" onChange={props.change}>
                {props.options.map( (item) => (
                    <option key={item.option}> {item.option} </option>
                ))}
            </select>

            {/* {props.options.map( (item) => (
                    <button className="button" key={item.option}> {item.option} ${item.price} </button>
                ))} */}
            
        </div>
    )
}

export default Options;