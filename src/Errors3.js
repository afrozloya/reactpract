import React from 'react'

export default function delme(props) {
    return (
        <span style={{color: 'red'}}>
            {props.field.error}
        </span>
    )

}
