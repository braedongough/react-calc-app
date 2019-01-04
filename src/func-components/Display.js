import React from 'react'

const Display = (props) => {
    return (
        <div className="display">
        <h1>{props.result}</h1>
        </div>
    )
}

export default Display