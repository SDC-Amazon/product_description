import React from 'react';

function Options(props) {
    return (
        <div>
            <select className="option_selector" onChange={props.change}>
                {props.options.map( (item) => (
                    <option key={item.option}> {item.option} </option>
                ))}
            </select>
        </div>
    )
}

export default Options;