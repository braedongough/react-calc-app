import React from 'react'

const Button = (props) => {
    return (
        <button
            onClick={props.handleClick}
            data-value={props.value}
        >
            {props.label}
        </button>
    )
}

export default Button