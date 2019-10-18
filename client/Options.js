import React from 'react';

function Options(props) {
    return (
        <div>
            <select>
                {props.options.map( (item) => (
                    <option key={item.option}> {item.option} </option>
                ))}
            </select>
        </div>
    )
}

export default Options;