import React from 'react'
// import { add } from './math.js';

export default function App2() {
    // console.log(add(3,4))
    import('./math').then(math => {
        console.log(math.add(3,4))
    })
    return (
        <div>
            <h1>I am App2</h1>
        </div>
    )
}
