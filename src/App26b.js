import React from 'react'

export default function App26b(props) {
    return (
        <div>
            {props.isLogin ? <h1>Logout</h1> : <h1>Login</h1>}
        </div>
    )
}
