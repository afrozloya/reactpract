import React from 'react'

export default function delme(props) {
    return (
        <ul>
            {props.errors.map( (e, i) => <li key={i}>{e}</li> )}            
        </ul>
    )
}
