import React from 'react';

function Description(props) {
    return (
        <div id="list">
            <ul>
                {props.description.map((row)=> (
                    <li key={row}>{row}</li>
                ))}
            </ul>
        </div>
    )
}

export default Description;