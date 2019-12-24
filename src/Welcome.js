import React from 'react'

export default function Welcome(props) {
    return (
        <div>
        <h1>Welcome {props.name}!!</h1>
        { props.city ? <p>U live in {props.city}</p> : null}
        </div>
    )
}
